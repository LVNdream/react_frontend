import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./modalcomment.module.scss";
import Cookies from "js-cookie";
import { clientUploadImgCmt } from "../../../apiRequset/client.api";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { userSelector } from "../../../redux/selector";

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
  const inforUser = useSelector(userSelector);
  const [files, setFile] = useState("");
  const [content, setContent] = useState("");
  // const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  const handleClose = (id) => {
    props.handleCloseToggleModalComment(id);
    // props.setRerender(props.rerender + 1);
  };

  const handleOnclickBtnPost = async (e) => {
    e.preventDefault();
    if (files.length > 0 || content) {
      const formData = new FormData();
      console.log({ accessToken, id_user: inforUser.id_user });
      formData.append(`accessToken`, accessToken);
      formData.append(`id_user`, inforUser.id_user);
      formData.append(`content`, content);
      formData.append(`lastname_user`, inforUser.lastname_user);
      formData.append(`firstname_user`, inforUser.firstname_user);
      formData.append(`id_product`, id_product);




      for (let i = 0; i < files.length; i++) {
        formData.append(`files`, files[i]);
      }

      const resUpload = await clientUploadImgCmt(formData);
      alert(resUpload);
    } else {
      alert("No data");
    }
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

          <form
            onSubmit={(e) => {
              handleOnclickBtnPost(e);
            }}
          >
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
              <div className="mb-3">
                <label htmlFor="placeComment" className="form-label">
                  Comment
                </label>
                <input
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="placeComment"
                  placeholder="You can write comment here ... "
                />
              </div>
              <div className="mt-3">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    // console.log(e.target.files);

                    setFile(e.target.files);
                  }}
                />
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
