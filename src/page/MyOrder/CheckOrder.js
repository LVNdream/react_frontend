import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./checkorder.module.scss";

import { clientGetAllOrder } from "../../apiRequset/order.api";
import Cookies from "js-cookie";
import { userSelector } from "../../redux/selector";
import { useSelector } from "react-redux";
import Order from "./components/Order";
import { useNavigate } from "react-router-dom";

function CheckOrder() {
  const cx = classnames.bind(styles);
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  const inforUser = useSelector(userSelector);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    if (inforUser === null) {
      navigate("/client/login");
    } else {
      async function getOrder() {
        const rowsOrder = await clientGetAllOrder(
          inforUser.email_user,
          accessToken
        );
        setOrders(rowsOrder);
        // console.log(rowsOrder);
      }
      getOrder();
    }
  }, [accessToken, inforUser, navigate]);
  console.log(orders);

  return (
    <>
      <div>
        <div id={cx("aritcle__infor")} classnames={cx("container")}>
          {orders?.issetHD === true ? (
            <div>
              {orders.allOrder ? (
                orders.allOrder.map((order) => {
                  return <Order key={order.id_order} order={order}></Order>
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
    </>
  );
}

export default CheckOrder;
