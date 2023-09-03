import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./cartproduct.module.scss";
import { useDispatch } from "react-redux";
import { cartSlice } from "../cartSlice";
// import { totalMoney } from "../../../redux/selector";

function CartProduct(props) {
  const {
    // caterogy_product,

    // id_product,

    name_product,

    price_product,

    quantity,

    // type_product,

    picture_product,
  } = props.product;
  const [inputQuantity, setInputQuantity] = useState(quantity);
  const cx = classNames.bind(styles);

  const dispatch = useDispatch();

  const changeInputQuantity = (data, operator = false) => {
    // console.log(data);
    if (operator === true) {
      if (inputQuantity === 1 && data === -1) {
        alert(" Quantity have to larger 0");
      } else {
        setInputQuantity(inputQuantity + data);
      }
    } else {
      if (data < 1) {
        alert(" Quantity have to larger 0");
      } else {
        setInputQuantity(data);
      }
    }
  };

  return (
    <div className={cx("article--borderCart", "mt-3")}>
      <div className={cx("productIncart", "d-flex")}>
        <img
          className={cx("productInCart--picture")}
          src={picture_product}
          alt="Loading"
        />

        <div className={cx("row")}>
          <div className={cx("col-10")}>
            <p hidden>2410</p>
            <p className={cx("productInCart--name")}>{name_product}</p>
            <div className={cx("d-flex", "itemStyle")}>
              <p className={cx("productInCart--size")}>M</p>
              <p className={cx("productInCart--color")}>Do</p>
            </div>
            <div className={cx("productInCart--quantity", "d-flex")}>
              <div className={cx("d-flex")}>
                <button
                  className={cx("buttonquantityDown")}
                  name="down"
                  onClick={() => {
                    changeInputQuantity(-1, true);
                  }}
                >
                  -
                </button>
                <input
                  className={cx("input--quantity")}
                  name="quantity"
                  value={inputQuantity}
                  onChange={(event) => {
                    changeInputQuantity(Number(event.target.value));
                  }}
                />
                <button
                  className={cx("buttonquantityUp")}
                  name="up"
                  onClick={() => {
                    changeInputQuantity(1, true);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className={cx(
                  "btn",
                  "btn-warning",
                  "ml-3",
                  "btnUpdateQuantity"
                )}
                onClick={() => {
                  dispatch(
                    cartSlice.actions.updateQuantityInCart({
                      ...props.product,
                      quantity: inputQuantity,
                    })
                  );
                }}
              >
                Update
              </button>
            </div>
          </div>
          <div className={cx("delete--product", "col-2")}>
            {/* <i className={cx("fa-solid fa-trash iconDelete")}></i>
             */}
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className={cx("mb-4", "d-flex", "justify-content-between")}>
        <h6 className={cx("mt-2")}>Thành tiền: {quantity * price_product}</h6>
        <p className={cx("fw-bold", "text-danger")}></p>
      </div>
    </div>
  );
}

export default CartProduct;
