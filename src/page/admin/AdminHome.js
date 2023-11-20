import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./admin.module.scss";
import { Link, useNavigate } from "react-router-dom";
// import { checkAdmin } from "../../apiRequset/account.api";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selector";
import Cookies from "js-cookie";
import { getAllOrder } from "../../apiRequset/order.api";
import OrderAdmin from "./components/OrderAdmin";

function AdminHome() {
  const cx = classNames.bind(styles);
  const inforUser = useSelector(userSelector);
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  const [orders, setOrder] = useState();
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
  }, [accessToken, inforUser, navigate]);

  return (
    <>
      {inforUser !== null && inforUser.authorization === 0 ? (
        <div>
          <div>
            <div id={cx("aritcle__infor")} className={cx("container")}>
              <div className={cx("d-flex", "filter_order", "mb-1")}>
                <div>
                  <input type="date" />
                  <button
                    className={cx("btn-design", "btn-info", "btn-sizebtn")}
                  >
                    Tìm
                  </button>
                </div>
              </div>
              <div className={cx("mb-2")}>
                <Link>Tất cả hóa đơn</Link>
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
