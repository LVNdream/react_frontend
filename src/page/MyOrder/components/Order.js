import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./order.module.scss";
function Order(props) {
  const cx = classnames.bind(styles);

  // console.log(props.order);
  const [seeMore, setSeeMore] = useState(false);

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };

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

  return (
    <>
      <div>
        <div className={cx("inforOrder")}>
          <h5 className={cx("idOrder")}>Mã đơn hàng:24102001{id_order} </h5>
          <div className={cx("inforOrder--customer")}>
            <p>Ngày mua: {date_order}</p>
            <p>Họ và tên: {fullname} </p>
            <p>Số điện thoại:{phone}</p>
            {adress ? (
              <p>Địa chỉ giao:{adress} </p>
            ) : (
              <p>Nhận tại cửa hàng</p>
            )}
          </div>
          <h6 className={cx("statusOrder")}>
            Trạng thái đơn hàng:{" "}
            <b className={cx("trangthai")}> {status_order}</b>
          </h6>

          {seeMore === false ? (
            <div className={cx("button_toggle_seemore")} onClick={toggleSeeMore}> Xem chi tiết</div>
          ) : (
            <div className={cx("button_toggle_seemore")} onClick={toggleSeeMore}>Ẩn bớt</div>
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
                          "justify-content-between",
                          "mb-2",
                          "mr-5",
                          "listItem",
                          "align-items-center"
                        )}
                      >
                        <div>
                          <p>
                            Sản phẩm: 2410{item.id_product}, {item.size},
                            {item.quantity} X {item.price_temp} =
                            {item.quantity * item.price_temp}
                          </p>
                        </div>
                        <div>
                          <img
                            style={{ height: "50px", width: "50px" }}
                            src={item.picture_product}
                            alt="Loading"
                          />
                        </div>
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
                  <div className={cx("btn btn-danger btnCanlce_HoaDon")}>
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
