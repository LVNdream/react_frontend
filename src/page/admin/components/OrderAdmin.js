import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./orderadmin.module.scss";
import { updateOrderStatus } from "../../../apiRequset/admin.api";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
const cx = classnames.bind(styles);
const accessToken = Cookies.get("accessToken");

function OrderAdmin(props) {
  const {
    adress,
    date_order,
    email,
    fullname,
    id_order,
    phone,
    listItem,
    status_order,
    total_money_order,
  } = props.order;
  // console.log(props.order)

  const [seeMore, setSeeMore] = useState(false);

  const [statusUpdate, setStatusUpdate] = useState(status_order);

  const handleOnChangeInput = (e) => {
    setStatusUpdate(e.target.value);
  };

  const handleUpdateStatus = async (
    id_orderUpdate,
    status_orderUpdate,
    email
  ) => {
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
        const entityUpdate = {
          id_order: id_orderUpdate,
          status_order: status_orderUpdate,
          email: email,
        };
        const resultUpdate = await updateOrderStatus(entityUpdate, accessToken);
        Swal.fire({ title: "Updated", text: resultUpdate });
      }
    });
  };

  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
  };
  return (
    <>
      <div>
        <div className={cx("inforOrder")}>
          <h5 className={cx("idOrder")}>Mã đơn hàng: 24102001{id_order}</h5>

          <div className={cx("row")}>
            <div className={cx("col-8")}>
              <div className={cx("inforOrder--customer")}>
                <p>Ngày mua: {date_order}</p>
                <p>Họ và tên: {fullname}</p>
                <p>Số điện thoại:{phone}</p>

                {adress ? (
                  <p>Địa chỉ giao: {adress}</p>
                ) : (
                  <p>Nhận tại của hàng</p>
                )}
              </div>
              <h6 className={cx("statusOrder")}>
                Trạng thái đơn hàng: <b>{status_order}</b>
              </h6>
            </div>

            {/*  */}
            <div className={cx("col-4")}>
              <div className={cx("mb-2")}>
                <p> Trạng thái cập nhật:</p>
                <div className={cx("d-flex", "statusUpdate", "mt-1")}>
                  <select
                    value={statusUpdate}
                    onChange={(e) => {
                      handleOnChangeInput(e, setStatusUpdate);
                    }}
                  >
                    <option value="Chờ xác nhận">Chờ xác nhận</option>
                    <option value="Đang giao">Đang giao</option>
                    <option value="Giao hàng thành công">
                      Giao hàng thành công
                    </option>
                  </select>
                </div>
              </div>
              <div className={cx("d-flex", "justify-content-between", "mt-3")}>
                <p className={cx("tongtien")}>Tổng tiền{total_money_order}</p>
              </div>
            </div>
          </div>
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
                            Sản phẩm: 2410{item.id_product}, {item.size},
                            {item.quantity} X {item.price_temp} =
                            {item.quantity * item.price_temp}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : "Eror render item in order"}
            </>
          ) : (
            ""
          )}

          <div
            onClick={() => {
              handleUpdateStatus(id_order, statusUpdate, email);
            }}
            className={cx("btn", "btn-danger")}
            type="submit"
          >
            Cập nhật
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default OrderAdmin;
