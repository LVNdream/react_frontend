import React from "react";
import classNames from "classnames/bind";
import styles from "./cart.module.scss";
import CartProduct from "./components/CartProduct";
import { useSelector } from "react-redux";
import { cartSelector, totalItem, totalMoney } from "../../redux/selector";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const cx = classNames.bind(styles);

  const totalItemInCart = useSelector(totalItem);
  const totalMoneyInCart = useSelector(totalMoney);
  const itemInCart = useSelector(cartSelector);
  // console.log({
  // //   totalItemInCart,
  // //   totalMoneyInCart,
  //   itemInCart,
  // });
  return (
    <main className={cx("container")}>
      <h1 className={cx("title--cart")}>Giỏ hàng của bạn</h1>
      <div className={cx("article--main", "d-flex", "justify-content-between")}>
        <div className={cx("article-productInCart")}>
          {!totalItemInCart || totalItemInCart < 0 ? (
            <p className={cx("itemCount")}>Giỏ hàng của bạn đang trống</p>
          ) : (
            itemInCart.map((product,index) => {
              return (
                <CartProduct
                  key={product.id_product+index}
                  product={product}
                ></CartProduct>
              );
            })
          )}
        </div>
        <div className={cx("infor--order")}>
          <div className={cx("ordered", "container")}>
            <h5 className={cx("ordered--title")}>Thông tin đơn hàng</h5>
            <hr />
            <div className={cx("d-flex", "justify-content-between")}>
              <h6 className={cx("mt-2")}>Tổng tiền:</h6>
              <p className={cx("ordered--cost", "fw-bold")}>
                {totalItemInCart < 0 ? "0" : totalMoneyInCart}
              </p>
            </div>
            <hr />
            <ul>
              <li>Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
              <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
            </ul>
            <Link id="pay--link" to={"/payment"}>
              {!totalItemInCart || totalItemInCart < 0 ? (
                <button
                  type="submit"
                  className={cx("btn", "btn-danger", "pay--button")}
                  id="pay--button"
                  disabled
                >
                  THANH TOÁN
                </button>
              ) : (
                <button
                  type="submit"
                  className={cx("btn", "btn-danger", "pay--button")}
                  id="pay--button"
                >
                  THANH TOÁN
                </button>
              )}
            </Link>
          </div>
          <div className={cx("ordered--policy", "container")}>
            <h5>Chính sách mua hàng:</h5>
            <p>
              Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối
              thiểu 0₫ trở lên.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
