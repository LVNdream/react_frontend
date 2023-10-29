import React, { useState } from "react";
import classname from "classnames/bind";
import styles from "../thongkesanpham.module.scss";
import ModalSeemore from "./ModalSeemore";

function ProductDaban(props) {
  const cx = classname.bind(styles);

  const [openModalSeemore, setOpenModalSeemore] = useState(false);

  const {
    id_product,
    picture_product,
    name_product,
    quantity_product,
    quantity_daban,
    price_temp,
  } = props.product;
  return (
    <div key={id_product} className={cx("row", "ms-3", "me-3")}>
      <div className={cx("col-4", "colName")}>
        <div
          className={cx("d-flex", "articleInfor")}
          onClick={() => {
            setOpenModalSeemore(true);
          }}
        >
          <img
            className={cx("picture_product")}
            src={picture_product}
            alt="loading"
          ></img>
          <p>{name_product}</p>
        </div>
      </div>

      <div className={cx("row", "col-8")}>
        <p className={cx("col-3", "colName")}>{quantity_product}</p>
        <p className={cx("col-3", "colName")}>{quantity_daban}</p>
        <p className={cx("col-3", "colName")}>{price_temp}</p>
        <p className={cx("col-3", "colName")}>{price_temp * quantity_daban}</p>
      </div>

      {openModalSeemore ? (
        <ModalSeemore
          setOpenModalSeemore={setOpenModalSeemore}
          id_product={id_product}
          startday={props.startday}
          endday={props.endday}
        ></ModalSeemore>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProductDaban;
