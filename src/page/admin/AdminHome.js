import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./admin.module.scss";
import {  useNavigate } from "react-router-dom";
// import { checkAdmin } from "../../apiRequset/account.api";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selector";
import Cookies from "js-cookie";
import { getAllOrder } from "../../apiRequset/order.api";
import OrderAdmin from "./components/OrderAdmin";
import { filterToUpdate } from "../../apiRequset/admin.api";

function AdminHome() {
  const cx = classNames.bind(styles);
  const inforUser = useSelector(userSelector);
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  const [rerender, setRerender] = useState(1);

  const [orders, setOrder] = useState();
  const [filterDate, setFilterDate] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    if (inforUser !== null && inforUser.authorization === 0) {
      async function adminGetAllOrder() {
        const allorder = await getAllOrder(accessToken);
        setOrder(allorder);
      }
      adminGetAllOrder();
    } else {
      navigate("/client/login");
    }
  }, [accessToken, inforUser, navigate, rerender]);

  //  ham su dung khi nhaan nuts tim haos don theo ngay va thoe kieu
  const handleClickBtnSearch = async () => {
    const dataSearch = {
      date_order: filterDate,
      status_order: filterType,
    };
    console.log(dataSearch);
    const filteredOrder = await filterToUpdate(dataSearch, accessToken);
    console.log(filteredOrder);
    setOrder(filteredOrder)
  };

  return (
    <>
      {inforUser !== null && inforUser.authorization === 0 ? (
        <div>
          <div>
            <div id={cx("aritcle__infor")} className={cx("container")}>
              <div className={cx("d-flex", "filter_order", "mb-1")}>
                <div>
                  <input
                    onChange={(e) => {
                      setFilterDate(e.target.value);
                    }}
                    type="date"
                    value={filterDate}
                    className={cx("me-2")}
                  />

                  <select
                    className={cx("me-2")}
                    value={filterType}
                    onChange={(e) => {
                      setFilterType(e.target.value);
                    }}
                  >
                    <option value="">Tất cả hóa đơn</option>

                    <option value="Chờ xác nhận">Chờ xác nhận</option>
                    <option value="Đang giao">Đang giao</option>
                    <option value="Giao hàng thành công">
                      Giao hàng thành công
                    </option>
                  </select>

                  <button
                    onClick={handleClickBtnSearch}
                    className={cx("btn", "btn-primary")}
                  >
                    Tìm
                  </button>
                </div>
              </div>
              <div className={cx("mb-2")}>
                <div
                  className={cx("setAllOrder")}
                  onClick={() => {
                    setRerender(rerender + 1);
                    setFilterDate("")
                    setFilterType("")

                  }}
                >
                  Tất cả hóa đơn
                </div>
              </div>

              {orders?.issetHD === true ? (
                <div>
                  {orders.allOrder ? (
                    orders.allOrder.map((order) => {
                      return (
                        <OrderAdmin
                          key={order.id_order}
                          order={order}
                        ></OrderAdmin>
                      );
                    })
                  ) : (
                    <div>Bạn chưa có đơn hàng</div>
                  )}
                </div>
              ) : (
                <div>Bạn chưa có đơn hàng</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AdminHome;
