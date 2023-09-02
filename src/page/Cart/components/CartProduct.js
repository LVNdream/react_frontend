import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classNames from "classnames/bind";
import styles from "./cartproduct.module.scss";

function CartProduct() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("article--borderCart", "mt-3")}>
      <div className={cx("productIncart", "d-flex")}>
        <img className={cx("productInCart--picture")} src="" alt="" />

        <div className={cx("row")}>
          <div className={cx("col-10")}>
            <p hidden>2410</p>
            <p className={cx("productInCart--name")}>Ao khoac thoi trang thoi trang thoi trang thoi trang thoi trang thoi trang </p>
            <div className={cx("d-flex", "itemStyle")}>
              <p className={cx("productInCart--size")}>M</p>
              <p className={cx("productInCart--color")}>Do</p>
            </div>
            <div className={cx("productInCart--quantity", "d-flex")}>
              <button className={cx("buttonquantityDown")} name="down">
                -
              </button>
              <input
                className={cx("input--quantity")}
                type="number"
                name="quantity"
                value="5"
                disabled
              />
              <button className={cx("buttonquantityUp")} name="up">
                +
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
      <div className={cx("mb-3", "d-flex", "justify-content-between")}>
        <h6>Thành tiền:</h6>
        <p className={cx("fw-bold", "text-danger")}>$200000</p>
      </div>
    </div>
  );
}

export default CartProduct;
