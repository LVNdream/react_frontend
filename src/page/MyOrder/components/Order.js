import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./order.module.scss";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import ModalComment from "../../evaluate/components/ModalComment";
function Order(props) {
  const cx = classnames.bind(styles);

  // console.log(props.order);
  const [seeMore, setSeeMore] = useState(false);

  const [openModalComment, setOpenModalComment] = useState({
    open: false,
    id: "",
  });
  //
  //
  // ham để mở cái bảng comment
  const handleOpenToggleModalComment = (id, setToggle) => {
    const cp = { open: true, id: id };
    // console.log(cp);
    setToggle(cp);
  };
  //
  // cái bảng để đóng comment
  const handleCloseToggleModalComment = (id) => {
    const cp = { open: false, id: id };
    // console.log(cp);
    setOpenModalComment(cp);
  };
  //
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  const comment = props.comment;
  const {
    adress,
    date_order,

    fullname,
    id_order,
    phone,
    listItem,
    status_order,
    total_money_order,
  } = props.order;

  const handleClickButtonDeleteOrder = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        props.handleClientDeleteOrder(id_order);
      }
    });
  };
  return (
    <>
      <div>
        <div className={cx("inforOrder")}>
          <h5 className={cx("idOrder")}>Mã đơn hàng:24102001{id_order} </h5>
          <div className={cx("inforOrder--customer")}>
            <p>Ngày mua: {date_order}</p>
            <p>Họ và tên: {fullname} </p>
            <p>Số điện thoại:{phone}</p>
            {adress ? <p>Địa chỉ giao:{adress} </p> : <p>Nhận tại cửa hàng</p>}
          </div>
          <h6 className={cx("statusOrder")}>
            Trạng thái đơn hàng:{" "}
            <b className={cx("trangthai")}> {status_order}</b>
          </h6>

          {seeMore === false ? (
            <div
              className={cx("button_toggle_seemore")}
              onClick={toggleSeeMore}
            >
              {comment ? (
                <div>Xem chi tiết và đánh giá</div>
              ) : (
                <div>xem chi tiết</div>
              )}
            </div>
          ) : (
            <div
              className={cx("button_toggle_seemore")}
              onClick={toggleSeeMore}
            >
              Ẩn bớt
            </div>
          )}

          {seeMore === true ? (
            <>
              {listItem
                ? listItem.map((item) => {
                    return (
                      <div
                        key={item.id_product + item.size + item.color}
                        className={cx(
                          "d-flex",

                          "mb-2",
                          "mr-5",
                          "listItem",
                          "align-items-center"
                        )}
                      >
                        <div>
                          <img
                            style={{ height: "50px", width: "50px" }}
                            src={item.picture_product}
                            alt="Loading"
                          />
                        </div>
                        <div>
                          <p>
                            <b>Sản phẩm</b>: 2410{item.id_product},{" "}
                            <b>Size: </b>
                            {item.size},<b> Giá: </b>
                            {item.quantity} X {item.price_temp} =
                            <b>Tổng tiền: </b>
                            {item.quantity * item.price_temp}
                          </p>
                        </div>
                        {comment ? (
                          <div className={cx("flex-fill", "iconComment")}>
                            <FontAwesomeIcon
                              icon={faComment}
                              onClick={() => {
                                handleOpenToggleModalComment(
                                  item.id_product,
                                  setOpenModalComment
                                );
                              }}
                            ></FontAwesomeIcon>
                          </div>
                        ) : (
                          ""
                        )}
                        {openModalComment.open &&
                        openModalComment.id === item.id_product ? (
                          <ModalComment
                            product={item}
                            handleCloseToggleModalComment={
                              handleCloseToggleModalComment
                            }
                          ></ModalComment>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })
                : "Eror render item in order"}
            </>
          ) : (
            ""
          )}

          <div className={cx("d-flex", "justify-content-between", "mt-1")}>
            <p className={cx("tongtien")}>Tổng tiền: {total_money_order}</p>
            <div>
              <form className={cx("")}>
                <input
                  type="text"
                  className={cx("form-control")}
                  name="idhd"
                  hidden
                />
                {status_order && status_order === "Chờ xác nhận" ? (
                  <div
                    className={cx("btn btn-danger btnCanlce_HoaDon")}
                    onClick={handleClickButtonDeleteOrder}
                  >
                    HỦY ĐƠN
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default Order;
