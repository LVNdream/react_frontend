import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./orderadmin.module.scss";
const cx = classnames.bind(styles);

function OrderAdmin(props) {
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

  const [seeMore, setSeeMore] = useState(false);

  const [reciive, setRecive] = useState("");

  const handleOnChangeInput = (e) => {
    setRecive(e.target.value);
  };
  console.log(reciive);

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  return (
    <>
      <div>
        <div className={cx("inforOrder")}>
          <h5 className={cx("idOrder")}>Mã đơn hàng: 24102001{id_order}</h5>
          <div className={cx("inforOrder--customer")}>
            <p>Ngày mua: {date_order}</p>
            <p>Họ và tên: {fullname}</p>
            <p>Số điện thoại:{phone}</p>

            {adress ? <p>Địa chỉ giao: {adress}</p> : <p>Nhận tại của hàng</p>}
          </div>
          <h6 className={cx("statusOrder")}>
            Trạng thái đơn hàng: <b>{status_order}</b>
          </h6>

          {seeMore === false ? (
            <div
              className={cx("button_toggle_seemore")}
              onClick={toggleSeeMore}
            >
              Xem chi tiết
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

          <div className={cx("mb-2")}>
            <p> Trạng thái cập nhật:</p>
            <div className={cx("d-flex", "statusUpdate", "mt-1")}>
              <div>
                <input
                onChange={(e)=>{
                    handleOnChangeInput(e)
                }} 
                id={cx("recive1")}
                  type="radio"
                  placeholder="name@example.com"
                  name="trangthai"
                  defaultValue="Chờ xác nhân"
                />
                <label htmlFor="recive1" className={cx("form-label")}>Chờ xác nhận</label>
              </div>
              <div>
                <input
                onChange={(e)=>{
                    handleOnChangeInput(e)
                }} 
                id={cx("recive2")}
                  type="radio"
                  placeholder="name@example.com"
                  name="trangthai"
                  defaultValue="Đang giao"
                />
                <label htmlFor="recive2" className={cx("form-label")}>Đang giao</label>
              </div>
              <div>
                <input
                onChange={(e)=>{
                    handleOnChangeInput(e)
                }} 
                id={cx("recive3")}
                  type="radio"
                  placeholder="name@example.com"
                  name="trangthai"
                  defaultValue="Giao hàng thành công"
                />
                <label htmlFor="recive3" className={cx("form-label")}>Giao hàng thành công</label>
              </div>
            </div>
            {/* <input
              type="text"
              className={cx("form-control")}
              placeholder="name@example.com"
              name="idhd"
              value="123"
              hidden
            /> */}
          </div>
          <div className={cx("d-flex", "justify-content-between", "mt-3")}>
            <p className={cx("tongtien")}>Tổng tiền{total_money_order}</p>

            <button className={cx("btn", "btn-danger")} type="submit">
              Cập nhật
            </button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default OrderAdmin;
