import React from "react";
import classnames from "classnames/bind";
import styles from "./deletedproduct.module.scss";

function DeletedProduct(props) {
  const cx = classnames.bind(styles);
  const {
    id_product_deleted,
    name_product_deleted,
    price_product_deleted,
    picture_product_deleted,
  } = props.product;
  return (
    <div className={cx("infor_item", "d-flex", "flex-wrap")}>
      <div className={cx("btn", "btn-danger", "button-undo")}>Restore</div>
      <img
        className={cx("picture_item")}
        src={picture_product_deleted}
        alt="Loading"
      ></img>
      <div className={cx("flex-fill")}>
        <p>
          <b>ID:</b>
          {id_product_deleted}
        </p>
        <p className={cx("name_product")}>
          <b>Name: </b>
          {name_product_deleted}
        </p>
        <p>
          <b>Price: </b>
          {price_product_deleted}
        </p>
      </div>
    </div>
  );
}

export default DeletedProduct;
