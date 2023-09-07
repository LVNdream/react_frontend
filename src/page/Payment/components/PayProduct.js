import React from "react";
import classNames from "classnames/bind";
import styles from "./PayProduct.module.scss";

function PayProduct(props) {
  const {
    name_product,
    size,
    color,
    price_product,
    quantity,
    picture_product,
  } = props.item;
  const cx = classNames.bind(styles);
  return (
    <div className={cx("d-flex", "mb-3", "article--inforItem")}>
      <img className={cx("picture")} src={picture_product} alt="Loading" />
      <div className={cx("")}>
        {/* <p hidden>001</p> */}
        <h5 className={cx("article--inforItem--name")}>{name_product}</h5>
        <div className={cx("d-flex", "pay_itemStyle")}>
          <p className={cx("article--inforItem--size")}>{size}</p>
          <p className={cx("article--inforItem--color")}>{color}</p>
        </div>
      </div>
      <p className={cx("article--inforItem--money")}>{price_product}</p>
      <p className={cx("article--inforItem--quantity")}>{quantity}</p>
    </div>
  );
}

export default PayProduct;
