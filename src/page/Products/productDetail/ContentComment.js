import React from "react";
import classname from "classnames/bind";
import styles from "./contentcomment.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function ContentComment(props) {
  const cx = classname.bind(styles);
  //   console.log(props.comment);
  const { lastname_user, firstname_user, content, img, id_user } =
    props.comment;
  const inforUser = props.inforUser;
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
            <p className={cx("comment-content")}> {content}</p>
          </div>

          {inforUser?.id_user === id_user ? (
            <div className={cx("icon-edit")}>
              <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

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
