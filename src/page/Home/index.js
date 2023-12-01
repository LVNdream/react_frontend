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
      <div className={cx("intruduce")}>
        <div
          className={cx("intruduce__left")}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
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
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
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
          <img
            className={cx("avata--fashion")}
            src="https://theme.hstatic.net/1000296747/1000891809/14/home_collection_1_banner.jpg?v=20"
            alt="loanging"
          />

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
                    src="https://product.hstatic.net/1000296747/product/f22075a1aef0d004cc26ef7c2363a175_f6930902ace64756a1b5482b801fe456_large.jpeg"
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
                    src="https://product.hstatic.net/1000296747/product/e31882b2f297a3792b560058c0682238_eb01758ac8144bfe927f728cb30f842d_large.jpeg"
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
                    src="https://product.hstatic.net/1000296747/product/d38fe4cf3645a626d16082b001106f0a_074efeec0569474ba2ed69f6a0722a06_large.jpeg"
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
                    src="https://product.hstatic.net/1000296747/product/20f53362-778f-47ab-bbf0-e3fb031f202a_94a637ac0c7442709e1a3307cc203abc_large.jpeg"
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
                    src="https://product.hstatic.net/1000296747/product/6530a85e-ea31-4eb6-a3e1-29cac1798622_a5c6a0d6a3934bb3837d6231478fc341_large.jpeg"
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
        <p className={cx("information__content", "pb-3 ")}>Thời trang nữ</p>
        <div className={cx("information__product")}>
          <div className={cx("product", "product--girl")}>
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
                    src="https://product.hstatic.net/1000296747/product/16410911-d4de-4e30-8996-b046d669687a_4ead70ce92234433be8747840308a851_7c729a89c4eb44ab98108694fa92a8a3_master.jpeg"
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
                    src="https://product.hstatic.net/1000296747/product/443af396-4ab4-4a18-a9fa-5345d6ac7c90_e0b6a026ee80425cbeb6066dd510ad7f_large.jpeg"
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
                    src="https://product.hstatic.net/1000296747/product/b9816da5-5e97-4b65-bf6d-6e277ac48c0d_61843e9fb79e46c5b5f27bdb077bf12c_16ffd26eef9141849afaac90a6b6a8e6_large.jpeg"
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
                    src="https://product.hstatic.net/1000296747/product/0fb97819-ba9b-4100-8952-9c7c9eede46e_3098afefb3da4db1aae1a2b045a8e270_large.png"
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
                    src="https://product.hstatic.net/1000296747/product/c70de8d3-764b-4fcf-bbcd-9af3b7ec313c_ae0d14826e054e55af50c88c7441e97a_edcaf13203a248bfb24d8b33220f0c5e_large.jpeg"
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

          <img
            className={cx("avata--fashion")}
            src="https://theme.hstatic.net/1000296747/1000891809/14/home_collection_2_banner.jpg?v=20"
            alt="loanging"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
