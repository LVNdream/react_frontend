import React, { useEffect, useState } from "react";
import classname from "classnames/bind";

import styles from "./evaluatepage.module.scss";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { userSelector } from "../../redux/selector";
import { clientGetAllOrderSuccess } from "../../apiRequset/order.api";
import Order from "../MyOrder/components/Order";

function EvalauatePage() {
  const cx = classname.bind(styles);
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();
  const inforUser = useSelector(userSelector);
  const [orders, setOrders] = useState({});
  const [rerender, setRerender] = useState(1);

  useEffect(() => {
    if (inforUser === null) {
      navigate("/client/login");
    } else {
      async function getOrder() {
        const rowsOrder = await clientGetAllOrderSuccess(
          inforUser.email_user,
          accessToken
        );
        setOrders(rowsOrder);
        // console.log(rowsOrder);
      }
      getOrder();
    }
  }, [accessToken, inforUser, navigate, rerender]);
  // console.log(orders);
  return (
    <>
      <div>
        <div id={cx("aritcle__infor")} classnames={cx("container")}>
          {orders.length > 0 ? (
            <div>
              {orders.length > 0 ? (
                orders.map((order) => {
                  return (
                    <Order
                      key={order.id_order}
                      order={order}
                      comment={true}
                    ></Order>
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
    </>
  );
}

export default EvalauatePage;
