import React from "react";
import classNames from "classnames/bind";
import styles from "./productDetail.module.scss";

function ProductDetail() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("container")}>
      <div className={cx("tilte-main")}>
        <p className={cx("title-content")}>
          Trang chủ -&#62; NOBITAHOME -&#62; aaaaaaaaaaaaa
        </p>
      </div>
      <div className={cx("row")}>
        <div className={cx("col-lg-6")}>
          <div>
            <p>Không sản có sản phẩm được tải lên</p>
          </div>

          <div className={cx("article-picture-product")}>
            <img
              className={cx("picture-product")}
              id={cx("picture")}
              src=""
              alt=""
              title="ÁO SƠ MI HỒNG TAY NGẮN TRẺ TRUNG"
            />
          </div>
          <div className={cx("row")}>
            <div>
              <p className={cx("note-size")}>
                - Vui lòng tham khảo “bảng quy đổi kích cỡ” và so sánh với số đo
                áo hoặc quần của bạn để chọn được size phù hợp nhất.
              </p>
            </div>
            <div>
              <p className={cx("note-commit")}>
                - Hình ảnh được chụp 100% từ sản phẩm thật, dưới ánh sáng tự
                nhiên và không qua chỉnh sửa để đảm bảo màu sắc trung thực nhất
                có thể (không tránh khỏi sai lệch từ 10-20% do thiết bị hiển
                thị).
              </p>
            </div>
          </div>
        </div>
        <div className={cx("col-lg-6")}>
          <h5 className={cx("product-name")} id={cx("name")}>
            mmmmmmmmmmmmm
          </h5>
          <p className={cx("product-code")} id={cx("masp")}>
            <b>Mã sản phẩm:</b>kkkk
          </p>
          <div className={cx("d-flex article-price")}>
            <div className={cx("product-discount")}>
              <p className={cx("discount-content")}>0%</p>
            </div>
            <div className={cx("product-price")}>
              <p className={cx("price-content")} id={cx("price")}>
                222222222
              </p>
            </div>
          </div>

          <div className={cx("d-flex", "article-color")}>
            <p className={cx("title-color")}>Màu sắc:</p>
            <div className={cx("d-flex", "article-color-option")}>
              <div>
                <input type="radio" name="itemColor" value="{{mausac}}" />
                <label>do</label>
                <br />
              </div>
              <div>
                <input type="radio" name="itemColor" value="{{mausac}}" />
                <label>do</label>
                <br />
              </div>
              <div>
                <input type="radio" name="itemColor" value="{{mausac}}" />
                <label>do</label>
                <br />
              </div>
            </div>
          </div>

          <div className={cx("d-flex", "article-size")}>
            <div>
              <p className={cx("title-size")}>Kich thước:</p>
            </div>
            <div className={cx("d-flex", "article-size-option", "mt-2")}>
              <div>
                <input type="radio" id={cx("size1")} name="itemSize" value="S" />
                <label for="size1">S</label>
                <br />
              </div>
              <div>
                <input type="radio" id={cx("size2")} name="itemSize" value="M" />
                <label for="size2">M</label>
                <br />
              </div>
              <div>
                <input type="radio" id={cx("size3")} name="itemSize" value="L" />
                <label for="size3">L</label>
              </div>
              <div>
                <input type="radio" id={cx("size4")} name="itemSize" value="XL" />
                <label for="size4">XL</label>
              </div>
            </div>
          </div>

          <hr />

          <div className={cx("d-flex", "article-shopping")}>
            <div className={cx("article--iconFavorite")}>
              <i className={cx("fa-solid fa-heart iconFavorite")}></i>
            </div>
            <div className={cx("productInCart--quantity", "d-flex")}>
              <button
                className={cx("btnquantityDown")}
                id={cx("downquantity")}
                name="down"
              >
                -
              </button>
              <input
                className={cx("input--quantity")}
                id={cx("inputquntity")}
                type="number"
                name="quantity"
                value="1"
                max="{{ctproduct.soluongsp}}"
                disabled
              />
              <button className={cx("btnquantityUp")} id={cx("upquantity")} name="up">
                +
              </button>
            </div>
            <div>
              <button
                id={cx("btn-addToCart")}
                type="button"
                className={cx("btn", "button-cart", "btn-lg")}
              >
                Thêm vào giỏ
                <i
                  className={cx("fa-solid fa-cart-shopping icon-cartShopping")}
                ></i>
              </button>
            </div>
          </div>

          <div>
            <p className={cx("title-advertisment")}>
              Số lượng có hạn, đã bán gần hết, Số lượng: 9999
            </p>
          </div>
          <hr />

          <div className={cx("article-infor-product")}>
            <p className={cx("title-infor-szie")}>Thông tin sản phẩm:</p>
            <div className={cx("article-infor-product-size")}>
              <img
                className={cx("infor-product-size")}
                src="https://file.hstatic.net/1000296747/file/8032_3530ce6306c04951b8e5376bcd0f448b_1024x1024.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div
          className={cx(
            "d-flex",
            "justify-content-between",
            "article-notification"
          )}
        >
          <p>Đánh giá sản phẩm</p>

          <div className={cx("alert", "alert-danger")} role="alert">
            <p>Để đánh giá sản phẩm vui lòng bạn hãy đăng nhập</p>
          </div>
        </div>

        <div className={cx("mb-3", "aritcle-infor-comment")}>
          <div className={cx("")}>
            <div className={cx("d-flex", "align-items-center")}>
              <div className={cx("d-flex", "article-comment-content")}>
                <img
                  className={cx("avata")}
                  src="/img/uploaded/avatar-trang-y-nghia.webp"
                  alt=""
                />
                <p className={cx("writer")}>nhut nhut: </p>
                <p className={cx("comment-content")}> hang qua dep</p>
              </div>

              <div className={cx("icon-edit")}>
                <i className={cx("fa-solid fa-pen-to-square")}></i>
              </div>
            </div>

            <img
              className={cx("picture-comment")}
              src="/img/uploaded/{{namepicture}}"
              alt="Đang xử lí"
            />

            <hr />
          </div>
        </div>

        <p>không có nhận xét</p>

        <div>
          <form
            action="/fashion/menfashion/product/{{ctproduct.masp}}"
            enctype="multipart/form-data"
            method="post"
          >
            <div className={cx("d-flex", "article_input-infor")}>
              <div>
                <div id={cx("article-upfile")}>
                  <label for="upFile">
                    <i className={cx("fa-solid fa-camera-retro")}></i>
                  </label>
                  <input
                    id={cx("upFile")}
                    name="file"
                    className={cx("input-image")}
                    type="file"
                    accept="video/*,image/*"
                    multiple="mutiple"
                  />
                </div>
                <div id={cx("comment")}>
                  <label for="comment">
                    <b>Nhận xét</b>
                  </label>
                  <input
                    id={cx("comment")}
                    name="content"
                    type="text"
                    className={cx("input-comment")}
                    placeholder="Viết nhận xét..."
                    required
                  />
                </div>
                <input
                  id={cx("comment")}
                  name="masp"
                  type="text"
                  className={cx("input-comment")}
                  value="{{ctproduct.masp}}"
                  readonly="true"
                  hidden
                />
              </div>
              <button className={cx("btn-post")} type="submit">
                Đăng
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
