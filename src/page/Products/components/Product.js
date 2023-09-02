import React from "react";
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
  const dispatch = useDispatch()
  const { id_product, name_product, picture_product, price_product } =
    props.product;
  // console.log(props.product)
  const cx = classNames.bind(styles);
  return (
    <div className={cx("product__item")}>
      <div className={cx("avata--product")}>
        <Link
          className={cx("avata__link")}
          to={`/products/men/detail/${id_product}`}
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
            <div>
              <input type="radio" name="itemColor" value="" />
              <label>do</label>
              <br />
            </div>
            <div>
              <input type="radio" name="itemColor" value="" />
              <label>xanh</label>
              <br />
            </div>
            <div>
              <input type="radio" name="itemColor" value="" />
              <label>tim</label>
              <br />
            </div>
          </div>
          <div className={cx("d-flex", "size--selection", "mt-2")}>
            <div>
              <input type="radio" id="size1" name="itemSize" value="S" />
              <label htmlFor="size1">S</label>
              <br />
            </div>
            <div>
              <input type="radio" id="size2" name="itemSize" value="M" />
              <label htmlFor="size2">M</label>
              <br />
            </div>
            <div>
              <input type="radio" id="size3" name="itemSize" value="L" />
              <label htmlFor="size3">L</label>
            </div>
            <div>
              <input type="radio" id="size4" name="itemSize" value="XL" />
              <label htmlFor="size4">XL</label>
            </div>
          </div>
        </div>
        <div className={cx("show--cart")}>
          <div className={cx("cart", "d-flex", "justify-content-around")}>
            <div className={cx("cart__shopping")} onClick={()=>{
              dispatch(cartSlice.actions.addToCart({...props.product,quantity:1}))
            }}>
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

          <p className={cx("item-quantity")}>Số lượng: 306</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
