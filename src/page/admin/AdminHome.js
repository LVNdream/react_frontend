import React from "react";
import classNames from "classnames/bind";
import styles from "./admin.module.scss";
import { Link } from "react-router-dom";

function AdminHome() {
  const cx = classNames.bind(styles);
  return (
    <div>
      <div>
        <div id={cx("aritcle__infor")} className={cx("container")}>
          <div className={cx("d-flex","filter_order","mb-1")}>
            <form action="/admin/showOrder/filterByDate" method="POST">
              <input type="date" name="ngay" />
              <button className={cx("btn-design","btn-info","btn-sizebtn")}>Tìm</button>
            </form>
            <form action="/admin/showOrder/filterByMonth" method="POST">
              <input type="month" name="thang" aria-placeholder="asdasdsa" />
              <button className={cx("btn-design","btn-info","btn-sizebtn")}>Tìm</button>
            </form>
            <form action="/admin/showOrder/filterByWeek" method="POST">
              <input type="week" name="tuan" />
              <button className={cx("btn-design","btn-info","btn-sizebtn")}>Tìm</button>
            </form>
          </div>
          <div className={cx("mb-2")}>
            <Link >Tất cả hóa đơn</Link>
          </div>

          <div>
            <div className={cx("inforOrder")}>
              <h5 className={cx("idOrder")}>Mã đơn hàng: 123</h5>
              <div className={cx("inforOrder--customer")}>
                <p>Ngày mua: 123213213</p>
                <p>Họ và tên: qưeqweqw</p>

                <p>Địa chỉ giao: qưeqweqeqweqweqweqwqqqq</p>

                <p>qưeeeeeeeeeeeee</p>
              </div>
              <h6 className={cx("statusOrder")}>
                Trạng thái đơn hàng: <b>qưeeeeeeeee</b>
              </h6>

              <div className={cx("d-flex","justify-content-between","mb-2","mr-5","listItem")}>
                <div>
                  <p>Sản phẩm: SP111, ten, gia, s, do</p>
                </div>
                <div>
                  <img style={{ height: "50px", withd: "50px" }} src="" alt="Loading" />
                </div>
              </div>

              <div className={cx("mb-3")}>
                <p> Trạng thái đơn hàng:</p>
                <div className={cx("d-flex","statusUpdate")}>
                  <div>
                    <input
                      type="radio"
                      placeholder="name@example.com"
                      name="trangthai"
                      value="Chờ xác nhân"
                    />
                    <label className={cx("form-label")}>Chờ xác nhận</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      placeholder="name@example.com"
                      name="trangthai"
                      value="Đang giao"
                    />
                    <label className={cx("form-label")}>Đang giao</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      placeholder="name@example.com"
                      name="trangthai"
                      value="Giao hàng thành công"
                    />
                    <label className={cx("form-label")}>Giao hàng thành công</label>
                  </div>
                </div>
                <input
                  type="text"
                  className={cx("form-control")}
                  placeholder="name@example.com"
                  name="idhd"
                  value="123"
                  hidden
                />
              </div>
              <div className={cx("d-flex","justify-content-around","mt-3")}>
                <p className={cx("tongtien")}>Tổng tiền:tong tien</p>

                <button className={cx("btn","btn-danger")} type="submit">
                  Cập nhật
                </button>
              </div>
              <hr />
            </div>
          </div>

          <div>Bạn chưa có đơn hàng</div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
