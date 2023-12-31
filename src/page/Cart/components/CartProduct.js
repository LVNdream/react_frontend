import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./cartproduct.module.scss";
import { useDispatch } from "react-redux";
import { cartSlice } from "../cartSlice";
// import { totalMoney } from "../../../redux/selector";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// CommonJS

function CartProduct(props) {
  // const Swal = require("sweetalert2");
  const {
    // caterogy_product,

    id_product,

    name_product,

    price_product,

    quantity,
    size,
    color,
    quantity_product,

    // type_product,

    picture_product,
  } = props.product;

  // console.log(quantity);
  const [inputQuantity, setInputQuantity] = useState(quantity);
  useEffect(() => {
    setInputQuantity(quantity);
  }, [quantity]);
  const cx = classNames.bind(styles);

  const dispatch = useDispatch();

  const changeInputQuantity = (data, operator = false) => {
    // console.log(data);
    if (operator === true) {
      if (inputQuantity <= 1 && data === -1) {

        Swal.fire({
          position: 'top',
          icon: 'warning',
          title: 'Quantity have to larger 0',
          showConfirmButton: false,
          timer: 1500
        })
        // alert(" Quantity have to larger 0");
      } else if (data === 1 && inputQuantity >= quantity_product) {
        Swal.fire({
          position: 'top',
          icon: 'warning',
          title: 'Quantity not enough for you',
          showConfirmButton: false,
          timer: 1500
        })
        // alert(" Quantity not enough for you");
      } else {
        setInputQuantity(inputQuantity + data);
      }
    } else {
      if (data < 0) {
        Swal.fire({
          position: 'top',
          icon: 'warning',
          title: 'Quantity have to larger 0',
          showConfirmButton: false,
          timer: 1500
        })
        // alert(" Quantity have to larger 0");
      } else if (data > quantity_product) {
        Swal.fire({
          position: 'top',
          icon: 'warning',
          title: 'Quantity not enough for you',
          showConfirmButton: false,
          timer: 1500
        })
        // alert(" Quantity not enough for you");
      } else {
        setInputQuantity(data);
      }
    }
  };

  const hadleDeleteOnClick = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want delete it now!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cartSlice.actions.DeleteItemInCart(product));

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
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
              <p className={cx("productInCart--size")}>{size}</p>
              <p className={cx("productInCart--color")}>{color}</p>
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
                  if (inputQuantity > 0) {
                    Swal.fire({
                      title: "Are you sure?",
                      text: "You want updated!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Yes, update it!",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        dispatch(
                          cartSlice.actions.updateQuantityInCart({
                            ...props.product,
                            quantity: inputQuantity,
                          })
                        );
                        Swal.fire(
                          "Updated!",
                          "Your cart has been updated.",
                          "success"
                        );
                      }
                    });
                  } else {
                    Swal.fire({
                      position: "top",
                      icon: "error",
                      title: "Quantity phải lớn hơn 0",
                      showConfirmButton: false,
                      timer: 1500,
                    });

                    // alert("Quantity phải lớn hơn 0");
                  }
                }}
              >
                Update
              </button>
            </div>
          </div>
          <div
            className={cx("delete--product", "col-2")}
            onClick={() => {
              hadleDeleteOnClick({ size, color, id_product });
            }}
          >
            {/* <i className={cx("fa-solid fa-trash iconDelete")}></i>
             */}
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </div>
          <div className={cx("mt-2", "quanity_product")}>
            <p>Số lượng: {quantity_product}</p>
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
