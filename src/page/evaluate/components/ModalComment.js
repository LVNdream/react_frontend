import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./modalcomment.module.scss";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

function ModalComment(props) {
  // console.log(props);

  const {
    id_product,
    color,
    size,
    name_product,
    picture_product,
    quantity,
    price_product,
  } = props.product;
  const cx = classnames.bind(styles);
  // khai bao cac ten bien
  // const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  const handleClose = (id) => {
    props.handleCloseToggleModalComment(id);
    // props.setRerender(props.rerender + 1);
  };
  return (
    <>
      <div className={cx("modal123")}>
        <div className={cx("content", "p-3")}>
          <button
            onClick={() => {
              handleClose(id_product);
            }}
            className={cx("btn", "btn-danger", "button-close")}
          >
            X
          </button>

          <form onSubmit={() => {}}>
            <div className={cx("inforOrder")}>
              <div className={cx("mb-4", "mt-4")}>
                <p>
                  <b>Tên sản phẩm:</b> {name_product}
                </p>
                <div className={cx("d-flex", "detailProduct")}>
                  <div>
                    <p>
                      <b>Phân loại: </b>
                      {color}, {size}
                    </p>
                  </div>
                  <div className={cx("")}>
                    <p> x {quantity}</p>
                  </div>
                </div>
                <div className={cx("totalMoney")}>
                  {quantity} sản phẩm / Thành tiền: {quantity * price_product}
                </div>
              </div>
              <div className={cx("mt-5", "articlePicture")}>
                <img
                  className={cx("pictureProduct")}
                  src={picture_product}
                  alt="Loading"
                ></img>
              </div>
              <div class="mb-3">
                <label for="placeComment" class="form-label">
                  Comment
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="placeComment"
                  placeholder="You can write comment here ... "
                />
              </div>
              <div class="mt-3">
                <input type="file" multiple accept="image/*" />
              </div>
              <div className={cx("d-flex", "justify-content-around", "mt-5")}>
                <button className={cx("btn", "btn-danger")} type="submit">
                  Đăng
                </button>
              </div>
              <hr />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalComment;
