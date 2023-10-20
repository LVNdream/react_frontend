import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../Cart/cartSlice";
import Swal from "sweetalert2";

function Product(props) {
  const {
    id_product,
    picture_product,
    name_product,
    price_product,
    type_product,
    caterogy_product,
    listColor,
    listSize,
    listColorDetail,
    isFavorite,
  } = props.product;

  const [quantity, setQuantity] = useState(listColorDetail[0].quantity_product);
  const [size, setSize] = useState(listSize[0].id_size);
  const [colorrr, setColor] = useState(listColor[0].color);

  const handleOnChangeColor = (e) => {
    setColor(e.target.value);
    const itemColor = listColorDetail.filter((productColor) => {
      return (
        productColor.color === e.target.value && productColor.id_size === size
      );
    });
    setQuantity(itemColor[0].quantity_product);
  };
  const handleOnChangeSize = (e) => {
    setSize(e.target.value);
    const itemColor = listColorDetail.filter((productColor) => {
      return (
        productColor.color === colorrr &&
        productColor.id_size === e.target.value
      );
    });

    setQuantity(itemColor[0].quantity_product);
  };

  const handleAddToFVR = () => {
    props.handleOnClickIconFavorite(id_product);
  };

  const dispatch = useDispatch();

  const cx = classNames.bind(styles);

  return (
    <div className={cx("product__item")}>
      <div className={cx("avata--product")}>
        <Link
          className={cx("avata__link")}
          to={`/products/men/${caterogy_product}/${id_product}`}
        >
          <img
            className={cx("img-fluid", "avata__link--product")}
            src={picture_product}
            alt=""
            title="ÁO SƠ MI HỒNG TAY NGẮN TRẺ TRUNG"
          />
        </Link>
      </div>
      <div className={cx("item-infor")}>
        <p className={cx("item-id")} hidden>
          {id_product}
        </p>
        <p className={cx("item-name")}>{name_product}</p>
        <p className={cx("item-price mb-2")}>{price_product}</p>

        <div className={cx("article--itemStyle")}>
          <div className={cx("d-flex", "color--selection")}>
            {listColor && listColor.length > 0
              ? listColor.map((color, index) => {
                  return (
                    <div key={index}>
                      <input
                        id={color.color + index + id_product}
                        onChange={(e) => {
                          handleOnChangeColor(e);
                        }}
                        type="radio"
                        name="itemColor"
                        value={color.color}
                      />
                      <label htmlFor={color.color + index + id_product}>
                        {color.color}
                      </label>
                      <br />
                    </div>
                  );
                })
              : ""}
          </div>
          <div className={cx("d-flex", "size--selection", "mt-2")}>
            {/*  */}

            {listSize && listSize.length > 0
              ? listSize.map((size, index) => {
                  return (
                    <div key={index + size.id_size}>
                      <input
                        type="radio"
                        onChange={(e) => {
                          handleOnChangeSize(e);
                        }}
                        id={size.id_size + index + id_product}
                        name="itemSize"
                        value={size.id_size}
                      />
                      <label htmlFor={size.id_size + index + id_product}>
                        {size.id_size}
                      </label>
                      <br />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className={cx("show--cart")}>
          <div className={cx("cart", "d-flex", "justify-content-around")}>
            <div
              className={cx("cart__shopping")}
              onClick={() => {
                dispatch(
                  cartSlice.actions.addToCart({
                    id_product: id_product,
                    picture_product: picture_product,
                    name_product: name_product,
                    price_product: price_product,
                    type_product: type_product,
                    caterogy_product: caterogy_product,
                    quantity: 1,
                    size: size,
                    color: colorrr,
                    quantity_product: quantity,
                  })
                );
                Swal.fire({
                  position: 'top',
                  icon: 'success',
                  title: 'Add to caart success',
                  showConfirmButton: false,
                  timer: 1500,
                
                })
              }}
            >
              {/* <i className={cx("fa-solid fa-cart-shopping")}></i> */}
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </div>
            <div className={cx("bag__shopping", "text-center")}>
              {/* <i className={cx("fa-solid fa-bag-shopping"></i> */}
              <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
            </div>

            <div
              className={cx("article--iconFavorite", "iconFavorite", {
                isFavorite: isFavorite,
              })}
              onClick={handleAddToFVR}
            >
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </div>
          </div>

          <p className={cx("item-quantity")}>Số lượng: {quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
