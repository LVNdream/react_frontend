import React from "react";
import classnames from "classnames/bind";
import styles from "./deletedproduct.module.scss";
import Swal from "sweetalert2";

function DeletedProduct(props) {
  const cx = classnames.bind(styles);
  const {
    id_product_deleted,
    name_product_deleted,
    price_product_deleted,
    picture_product_deleted,
  } = props.product;

  // ham khi click vao nut restore
  const handleOnclickBtnRestore = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        props.handleRestoreProduct(id_product_deleted);
      }
    });
  };
  return (
    <div className={cx("infor_item", "d-flex", "flex-wrap")}>
      <div
        onClick={handleOnclickBtnRestore}
        className={cx("btn", "btn-danger", "button-undo")}
      >
        {" "}
        Restore{" "}
      </div>
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
