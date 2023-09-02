import React from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const cx = classNames.bind(styles);
  return (
    <main className={cx("mainHome")}>
      {/* <div className={cx("frame--intruduce")}>
        <img className={cx("framepicture__picturemain" src="img/slide_1_img.webp" alt="loading"> 
      </div> */}
      <div className={cx("intruduce")}>
        <div
          className={cx("intruduce__left")}
          onMouseEnter={()=>{}}
          onMouseLeave={()=>{}}
        >
          <div
            id={cx("intruduce__animation--left1")}
            className={cx("intruduce__animation1")}
          ></div>
          <div
            id={cx("intruduce__animation--left2")}
            className={cx("intruduce__animation2")}
          ></div>
          <div className={cx("content-Intruduce--left")}>
            <p
              className={cx(
                "content-Intruduce__title1",
                "content-Intruduce__title--l1"
              )}
            >
              Phong cách vintage
            </p>
            <h4
              className={cx(
                "content-Intruduce__title2",
                "content-Intruduce__title--l2"
              )}
            >
              Alice Blue
            </h4>
            <p
              className={cx(
                "content-Intruduce__title3",
                "content-Intruduce__title--l3"
              )}
            >
              Mẹo phối đò nữ tính
            </p>
            <div className={cx("btn", "button--seemore")}>
              <a className={cx("intruduce__link-seemore")} href="/home">
                Xem thêm
              </a>
            </div>
          </div>
        </div>

        <div
          className={cx("intruduce__right")}
          onMouseEnter={()=>{}}
          onMouseLeave={()=>{}}
        >
          <div
            id={cx("intruduce__animation--right1")}
            className={cx("intruduce__animation1")}
          ></div>
          <div
            id={cx("intruduce__animation--right2")}
            className={cx("intruduce__animation2")}
          ></div>
          <div className={cx("content-Intruduce--right")}>
            <p
              className={cx(
                "content-Intruduce__title1",
                "content-Intruduce__title--r1"
              )}
            >
              Phụ kiện thời trang
            </p>
            <h4
              className={cx(
                "content-Intruduce__title2",
                "content-Intruduce__title--r2"
              )}
            >
              Accessories
            </h4>
            <p
              className={cx(
                "content-Intruduce__title3",
                "content-Intruduce__title--r3"
              )}
            >
              Nón, giày, dép, túi xách...
            </p>
            <div className={cx("btn", "button--seemore")}>
              <a className={cx("intruduce__link-seemore")} href="/home">
                Xem thêm
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("article--menfashion")}>
        <div className={cx("title--menfashion")}>
          <a className={cx("title--fashion__link")} href="/home">
            HOMESHOP Fashion
          </a>
        </div>
        <p className={cx("information__content", "pb-2")}>Thời trang nam</p>
        <div className={cx("information__product")}>
          <div
            className={cx("avata")}
            onMouseEnter={()=>{}}
            onMouseLeave={()=>{}}
          >
            <div
              id={cx("AvataMan__animation--left1")}
              className={cx("AvataMan__animation1")}
            ></div>
            <div
              id={cx("AvataMan__animation--left2")}
              className={cx("AvataMan__animation2")}
            ></div>
            <img
              className={cx("avata--fashion")}
              src="https://theme.hstatic.net/1000296747/1000891809/14/home_collection_1_banner.jpg?v=20"
              alt="loanging"
            />
          </div>
          <div className={cx("product")}>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/9658b6249cd58d7d169cc033e391a081_960970bb55324e5e9b31235ad34851ac_large.jpeg"
                    alt=""
                    title="ÁO SƠ MI HỒNG TAY NGẮN TRẺ TRUNG"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo sơ mi nam tay ngắn</p>
                <p className={cx("item-price")}>
                  <strong>200000</strong>
                </p>
                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/9658b6249cd58d7d169cc033e391a081_960970bb55324e5e9b31235ad34851ac_large.jpeg"
                    alt=""
                    title="ÁO SƠ MI TRẮNG TAY NGẮN TRẺ TRUNG"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo sơ mi nam tay ngắn</p>
                <p className={cx("item-price")}>
                  <strong>250000</strong>
                </p>
                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/9658b6249cd58d7d169cc033e391a081_960970bb55324e5e9b31235ad34851ac_large.jpeg"
                    alt=""
                    title="QUẦN ÂU TRẺ TRUNG"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Quần Âu Korea</p>
                <p className={cx("item-price")}>
                  <strong>350000</strong>
                </p>
                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/9658b6249cd58d7d169cc033e391a081_960970bb55324e5e9b31235ad34851ac_large.jpeg"
                    alt=""
                    title="ÁO KHOÁC BLAZER"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo khoác Blazer trẻ...</p>
                <p className={cx("item-price")}>
                  <strong>350000</strong>
                </p>
                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/9658b6249cd58d7d169cc033e391a081_960970bb55324e5e9b31235ad34851ac_large.jpeg"
                    alt=""
                    title="ÁO THUN BALO MÙA HÈ"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo thun nam 3 lỗ</p>
                <p className={cx("item-price")}>
                  <strong>350000</strong>
                </p>
                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/9658b6249cd58d7d169cc033e391a081_960970bb55324e5e9b31235ad34851ac_large.jpeg"
                    alt=""
                    title="ÁO THUN 3 LỖ NHẸ NHÀNG"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo thun 3 lỗ Cotton...</p>
                <p className={cx("item-price")}>
                  <strong>350000</strong>
                </p>
                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("article--womenfashion")}>
        <div className={cx("title--womenfashion")}>
          <a className={cx("title--fashion__link")} href="/home">
            ALICE BLUE
          </a>
        </div>
        <p className={cx("information__content","pb-3 ")}>Thời trang nữ</p>
        <div className={cx("information__product")}>
          <div className={cx("product","product--girl")}>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/0fc10df3e2c5b7280de9ba92fe94a1b6_0e20dea6ac1b4d8dbd1ee2b5436d2dfc_large.jpg"
                    alt=""
                    title="VÁY NỮ TRẺ TRUNG"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo váy nữ tay ngắn</p>
                <p className={cx("item-price")}>
                  <strong>350000</strong>
                </p>

                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/0fc10df3e2c5b7280de9ba92fe94a1b6_0e20dea6ac1b4d8dbd1ee2b5436d2dfc_large.jpg"
                    alt=""
                    title="VÁY NỮ TRẺ TRUNG"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo váy nữ tay ngắn</p>
                <p className={cx("item-price")}>
                  <strong>350000</strong>
                </p>

                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/0fc10df3e2c5b7280de9ba92fe94a1b6_0e20dea6ac1b4d8dbd1ee2b5436d2dfc_large.jpg"
                    alt=""
                    title="VÁY NỮ TRẺ TRUNG"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo váy nữ tay ngắn</p>
                <p className={cx("item-price")}>
                  <strong>350000</strong>
                </p>

                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/0fc10df3e2c5b7280de9ba92fe94a1b6_0e20dea6ac1b4d8dbd1ee2b5436d2dfc_large.jpg"
                    alt=""
                    title="VÁY NỮ THỜI TRANG NĂNG ĐỘNG"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo váy nữ tay ngắn thời trang</p>
                <p className={cx("item-price")}>
                  <strong>350000</strong>
                </p>

                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/0fc10df3e2c5b7280de9ba92fe94a1b6_0e20dea6ac1b4d8dbd1ee2b5436d2dfc_large.jpg"
                    alt=""
                    title="VÁY NỮ CỔ TRÒN NỮ TÍNH"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <p className={cx("item-name")}>Áo váy nữ tay ngắn thời trang</p>
                <p className={cx("item-price")}>
                  <strong>350000</strong>
                </p>

                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("product__items")}>
              <div className={cx("avata--product")}>
                <a className={cx("avata__link")} href="/">
                  <img
                    className={cx("avata__link--product")}
                    src="https://product.hstatic.net/1000296747/product/0fc10df3e2c5b7280de9ba92fe94a1b6_0e20dea6ac1b4d8dbd1ee2b5436d2dfc_large.jpg"
                    alt=""
                    title="VÁY NỮ KIỂU CÔ DÂU"
                  />
                </a>
              </div>
              <div className={cx("item-infor")}>
                <div className={cx("money")}>
                  <p className={cx("item-name")}>
                    Áo váy nữ tay ngắn thời trang
                  </p>
                  <p className={cx("item-price")}>
                    <strong>350000</strong>
                  </p>
                </div>
                <div className={cx("show--cart")}>
                  <div className={cx("cart")}>
                    <div className={cx("cart__shopping")}>
                      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className={cx("bag__shopping")}>
                      <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("avata")}
            onMouseEnter={()=>{}}
            onMouseLeave={()=>{}} 
          >
            <div
              id={cx("AvataWoman__animation--left1")}
              className={cx("AvataWoman__animation1")}
            ></div>
            <div
              id={cx("AvataWoman__animation--left2")}
              className={cx("AvataWoman__animation2")}
            ></div>
            <img
              className={cx("avata--fashion")}
              src="https://theme.hstatic.net/1000296747/1000891809/14/home_collection_2_banner.jpg?v=20"
              alt="loanging"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
