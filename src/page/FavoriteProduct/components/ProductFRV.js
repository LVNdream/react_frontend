import React from "react";

import classnames from "classnames/bind";
import styles from "./productfvr.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);

function ProductFRV(props) {
  const navigate = useNavigate()
  const {
    id_product,
    picture_product,
    name_product,
    price_product,
    type_product,
    caterogy_product,
  } = props.product;

  const handleClickPictureItem = ()=>{
   navigate(`/products/${type_product}/${caterogy_product}/${id_product}`)
  }
  const handleClickDeleteFVRItem = ()=>{
    props.handleDeleteFVRItem(id_product)
  }

  return (
    <>
      <div
        className={cx("infor_itemFVR", "d-flex", "align-items-center", "mb-3")}
      >
        <div className={cx("iconItem")}>
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
        </div>
        {/* <div className={cx("form-check", "ms-2", "check-box_item")}>
          <input className={cx("form-check-input")} type="checkbox" value={id_product} />
        </div> */}

        <img 
        onClick={handleClickPictureItem}
          src={picture_product}
          alt="Loading"
          className={cx("pictureItem")}
        ></img>

        <div className={cx("me-2", "flex-fill")}>
          <p>
            <b>Name: </b>
            {name_product}
          </p>
          <p>
            <b>Price: </b>
            {price_product}
          </p>

          <div
            className={cx(
              "d-flex",
              "justify-content-between",
              "align-items-center"
            )}
          >
            <p className={cx("quantityItem")}>
              <b>Quantity: </b> Còn hàng
            </p>
            <p className={cx("titleDeleteItem")} onClick={handleClickDeleteFVRItem}>Xóa yêu thích</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductFRV;
