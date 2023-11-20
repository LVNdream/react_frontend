import React, { useState } from "react";
import classname from "classnames/bind";
import styles from "./contentcomment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { clientDeleteComment, clientUpdateComment } from "../../../apiRequset/client.api";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function ContentComment(props) {
  const cx = classname.bind(styles);
  // console.log(props.comment);
  const accessToken = Cookies.get("accessToken");

  const {
    lastname_user,
    firstname_user,
    content,
    img,
    id_user,
    id_product,
    id_content,
  } = props.comment;
  const handleRerender = props.handleRerender;
  const inforUser = props.inforUser;
  const [inputValueCmt, setInputValueCmt] = useState(content);
  const [openInputUpdate, setOpenInputUpdate] = useState(false);

  const handleFocusComment = () => {
    if (id_user === inforUser?.id_user) {
      setOpenInputUpdate(true);
    }
  };
  const handleUpdateComment = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (id_user === inforUser?.id_user) {
          const entity = {
            id_user,
            id_product,
            id_content,
            content: inputValueCmt,
          };
          const resultUpdate = await clientUpdateComment(entity, accessToken);
          if (!resultUpdate.isError) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: resultUpdate.mess,
              showConfirmButton: false,
              timer: 1500,
            });
            handleRerender();
            setOpenInputUpdate(false);
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: resultUpdate.mess,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Ban khong phai tac gia",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  // hàm để xóa comment
  const handleDeleteComment = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (id_user === inforUser?.id_user) {
          const entity = {
            id_user,
            id_product,
            id_content,
          };
          const resultUpdate = await clientDeleteComment(entity, accessToken);
          if (!resultUpdate.isError) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: resultUpdate.mess,
              showConfirmButton: false,
              timer: 1500,
            });
            handleRerender();
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title: resultUpdate.mess,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Ban khong phai tac gia",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log("da xóa thành công")
      }
    });
  };

  return (
    <>
      <div className={cx("")}>
        <div className={cx("d-flex", "align-items-center")}>
          <div className={cx("d-flex", "article-comment-content")}>
            <img
              className={cx("avata")}
              src="https://img6.thuthuatphanmem.vn/uploads/2022/11/18/anh-avatar-don-gian-nam_081758062.png"
              alt="Loading"
            />
            <p className={cx("writer")}>
              {firstname_user} {lastname_user}:
            </p>

            {openInputUpdate ? (
              <input
                onChange={(e) => {
                  setInputValueCmt(e.target.value);
                }}
                className={cx("form-control")}
                type="text"
                value={inputValueCmt}
                autoFocus
              ></input>
            ) : (
              <p className={cx("comment-content")}>{content}</p>
            )}
          </div>

          {inforUser?.id_user === id_user ? (
            <div className={cx("icon-edit")}>
              {openInputUpdate ? (
                <div className={cx("article_btnUpdate")}>
                  <button
                    onClick={() => {
                      setOpenInputUpdate(false);
                    }}
                    className={cx("", "button-close")}
                  >
                    X
                  </button>
                  <div
                    onClick={handleUpdateComment}
                    className={cx("btn", "btn-small", "btn-danger")}
                  >
                    Update
                  </div>
                </div>
              ) : (
                <FontAwesomeIcon
                  onClick={handleFocusComment}
                  icon={faPenToSquare}
                ></FontAwesomeIcon>
              )}
              <FontAwesomeIcon icon={faTrash} onClick={handleDeleteComment}></FontAwesomeIcon>
            </div>
          ) : (
            ""
          )}
        </div>

        {img && img.length > 0
          ? img.map((imgDetail, index) => {
              return (
                <img
                  key={index}
                  className={cx("picture-comment")}
                  src={imgDetail.src_image}
                  alt="Đang xử lí"
                />
              );
            })
          : ""}

        <hr />
      </div>
    </>
  );
}

export default ContentComment;
