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
  } = props.product;

  // console.log(listColorDetail);
  const [quantity, setQuantity] = useState(listColorDetail[0].quantity_product);
  const [size, setSize] = useState(listSize[0].id_size);
  const [colorrr, setColor] = useState(listColor[0].color);

  // console.log(listColor)

  const handleOnChangeColor = (e) => {
    // setQuantity(quantity);
    // console.log(e.target.value);
    setColor(e.target.value);
    const itemColor = listColorDetail.filter((productColor) => {
      return (
        productColor.color === e.target.value && productColor.id_size === size
      );
    });
    setQuantity(itemColor[0].quantity_product);

    // console.log(itemColor);
    // console.log(itemColor.quantity_product);
  };
  const handleOnChangeSize = (e) => {
    // setQuantity(quantity);
    // console.log(e.target.value);
    setSize(e.target.value);
    const itemColor = listColorDetail.filter((productColor) => {
      return (
        productColor.color === colorrr &&
        productColor.id_size === e.target.value
      );
    });
    // console.log(itemColor);
    setQuantity(itemColor[0].quantity_product);
  };
  // const handleOnChangeQuantity = () => {
  //   const itemColor = listColorDetail.filter((productColor) => {
  //     return productColor.color === colorrr && productColor.id_size === size;
  //   });
  //   console.log(itemColor);
  // };

  const dispatch = useDispatch();
  // console.log(props.product)
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
                        onChange={(e) => {
                          handleOnChangeColor(e);
                        }}
                        type="radio"
                        name="itemColor"
                        value={color.color}
                      />
                      <label>{color.color}</label>
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
                        id="size1"
                        name="itemSize"
                        value={size.id_size}
                      />
                      <label htmlFor="size1">{size.id_size}</label>
                      <br />
                    </div>
                  );
                })
              : ""}

            {/* <div>
              <input
                type="radio"
                onChange={(e) => {
                  handleOnChangeSize(e);
                }}
                id="size1"
                name="itemSize"
                value="S"
              />
              <label htmlFor="size1">S</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                onChange={(e) => {
                  handleOnChangeSize(e);
                }}
                id="size2"
                name="itemSize"
                value="M"
              />
              <label htmlFor="size2">M</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                onChange={(e) => {
                  handleOnChangeSize(e);
                }}
                id="size3"
                name="itemSize"
                value="L"
              />
              <label htmlFor="size3">L</label>
            </div>
            <div>
              <input
                type="radio"
                onChange={(e) => {
                  handleOnChangeSize(e);
                }}
                id="size4"
                name="itemSize"
                value="XL"
              />
              <label htmlFor="size4">XL</label>
            </div> */}
            {/*  */}
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
              }}
            >
              {/* <i className={cx("fa-solid fa-cart-shopping")}></i> */}
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </div>
            <div className={cx("bag__shopping", "text-center")}>
              {/* <i className={cx("fa-solid fa-bag-shopping"></i> */}
              <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
            </div>

            <div className={cx("article--iconFavorite")}>
              {/* /<i className={cx("fa-solid fa-heart isFavorite"></i> */}
              <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </div>

            <div className={cx("article--iconFavorite")}>
              {/* <i className={cx("fa-solid fa-heart iconFavorite"></i> */}
            </div>
          </div>

          <p className={cx("item-quantity")}>Số lượng: {quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
