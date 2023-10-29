import React, { useEffect, useState } from "react";
import classname from "classnames/bind";
import styles from "./thongkesanpham.module.scss";
import { sanphamdaban } from "../../apiRequset/admin.api";
import Cookies from "js-cookie";

function ThongKeDonHang() {
  const accessToken = Cookies.get("accessToken");
  const cx = classname.bind(styles);

  const [startday, setStartday] = useState("");
  const [endday, setEndday] = useState("");
  const [nameProduct, setNameProduct] = useState("");

  const [products, setProducts] = useState("");

  //   useEffect(() => {
  //     if (orders) {
  //       setDataChart(orders);
  //       if (email && !typeOrder) {
  //         async function fetchData() {
  //           const filter = {
  //             startday,
  //             endday,
  //             email,
  //           };
  //           const data = await getOrderFilterByDate_Email(filter, accessToken);
  //           setDataChart(data);
  //         }
  //         fetchData();
  //       } else if (!email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
  //         async function fetchData() {
  //           const filter = {
  //             startday,
  //             endday,
  //             status_order: typeOrder,
  //           };
  //           const data = await getOrderFilterByDate_TypeOrder(
  //             filter,
  //             accessToken
  //           );
  //           setDataChart(data);
  //         }
  //         fetchData();
  //       } else if (email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
  //         async function fetchData() {
  //           const filter = {
  //             startday,
  //             endday,
  //             email,
  //             status_order: typeOrder,
  //           };
  //           const data = await getOrderFilterByDate_TypeOrder_Email(
  //             filter,
  //             accessToken
  //           );
  //           setDataChart(data);
  //         }
  //         fetchData();
  //       } else if (!email && typeOrder === "Tất cả đơn hàng") {
  //         console.log(" k co email && all");

  //         const data = orders;
  //         setDataChart(data);
  //       } else if (email && typeOrder === "Tất cả đơn hàng") {
  //         async function fetchData() {
  //           const filter = {
  //             startday,
  //             endday,
  //             email,
  //           };
  //           const data = await getOrderFilterByDate_Email(filter, accessToken);
  //           setDataChart(data);
  //         }
  //         fetchData();
  //       }
  //     }
  //     // thong ke theo nam
  //     if (orderYear) {
  //       if (email && !typeOrder) {
  //         async function fetchData() {
  //           const filter = {
  //             year,
  //             email,
  //           };
  //           const data = await getOrderFilterByDate_Year_Email(
  //             filter,
  //             accessToken
  //           );
  //           setDataChart(data);
  //         }
  //         fetchData();
  //       } else if (!email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
  //         async function fetchData() {
  //           const filter = {
  //             year,
  //             status_order: typeOrder,
  //           };
  //           const data = await getOrderFilterByDate_Year_TypeOrder(
  //             filter,
  //             accessToken
  //           );
  //           setDataChart(data);
  //         }
  //         fetchData();
  //       } else if (email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
  //         async function fetchData() {
  //           const filter = {
  //             year,
  //             email,
  //             status_order: typeOrder,
  //           };
  //           const data = await getOrderFilterByDate_Year_TypeOrder_Email(
  //             filter,
  //             accessToken
  //           );
  //           setDataChart(data);
  //         }
  //         fetchData();
  //       } else if (!email && typeOrder === "Tất cả đơn hàng") {
  //         const data = orderYear;
  //         setDataChart(data);
  //       } else if (email && typeOrder === "Tất cả đơn hàng") {
  //         async function fetchData() {
  //           const filter = {
  //             year,
  //             email,
  //           };
  //           const data = await getOrderFilterByDate_Year_Email(
  //             filter,
  //             accessToken
  //           );
  //           setDataChart(data);
  //         }
  //         fetchData();
  //       }
  //     }
  //   }, [orders, typeOrder, email, orderYear]);

  //   console.log(dataChart);

  // ham xet lai gia tri day

  const handleOnChangeDay = (e, setData) => {
    setData(e.target.value);
  };
  // ham de loc
  const handleProductedByFilter_Date = async () => {
    if (startday && endday) {
      const start = new Date(startday);
      const end = new Date(endday);
      // console.log({ start: start.getTime(), end: end.getTime() });
      if (start.getTime() > end.getTime()) {
        alert("ngay bat dau phai lon hon ngay ket thuc");
      } else {
        // console.log({ startday, endday });
        const dataFilter = { startday, endday };
        const resfilter = await sanphamdaban(dataFilter, accessToken);
        console.log(resfilter);
        setProducts(resfilter);
        alert("success");
      }
    } else {
      alert("Moi ban chon cac ngay");
    }
  };

  //   cai de ve bieu do

  //
  return (
    <>
      <div className={cx("container-fluid", "article_main")}>
        <div className={cx("article_filter", "mb-4")}>
          <div
            className={cx(
              "filter_byDate",
              "d-flex",
              "justify-content-between",
              "align-items-center"
            )}
          >
            <h5>Bộ lọc</h5>
            <div className={cx("d-flex", "article_formDate")}>
              <div>
                <label htmlFor="day_start" className="form-label">
                  Ngày bắt đầu
                </label>
                <input
                  value={startday}
                  onChange={(e) => {
                    handleOnChangeDay(e, setStartday);
                  }}
                  id={cx("day_start")}
                  type="date"
                  className={cx("form-control", "input_date")}
                />
              </div>
              <div>
                <label htmlFor="day_end" className="form-label">
                  Ngày kết thúc
                </label>
                <input
                  value={endday}
                  onChange={(e) => {
                    handleOnChangeDay(e, setEndday);
                  }}
                  id={cx("day_end")}
                  type="date"
                  className={cx("form-control", "input_date")}
                />
              </div>
              <div
                onClick={handleProductedByFilter_Date}
                className={cx("btn", "btn-danger")}
              >
                Tìm
              </div>
            </div>
          </div>
          <hr className={cx("mt-1", "mb-1")}></hr>

          {/*  */}
          <div
            className={cx(
              "filter_byEmail",
              "d-flex",
              "justify-content-between",
              "align-items-center"
            )}
          >
            <div className={cx("mb-3")}>
              <label htmlFor="inputEmail" className="form-label">
                Filter:
              </label>
              <input
                onChange={(e) => {
                  handleOnChangeDay(e, setNameProduct);
                }}
                value={nameProduct}
                type="email"
                className="form-control"
                id={cx("inputEmail")}
                placeholder="Vui lòng tên sản phẩm"
              />
            </div>
          </div>
        </div>

        {/* khu vuc bieu do */}
        <div className={cx("article_chart")}>
          <div className={cx("row","ms-3","me-3","mt-3")}>
            <h6 className={cx("col-4","colName")}>Tên sản phẩm</h6>

            <div className={cx("row","col-8")}>
              <h6 className={cx("col-3","colName")}>Số lượng còn lại</h6>
              <h6 className={cx("col-3","colName")}>Số lượng bán ra</h6>
              <h6 className={cx("col-3","colName")}>Giá bán</h6>
              <h6 className={cx("col-3","colName")}>Thành tiền</h6>
            </div>
          </div>
          {products.length>0? products.map((product)=>{
            return <div key={product.id_product} className={cx("row","ms-3","me-3")}>
            <p className={cx("col-4","colName")}>{product.name_product}</p>

            <div className={cx("row","col-8")}>
              <p className={cx("col-3","colName")}>{product.quantity_daban}</p>
              <p className={cx("col-3","colName")}>{product.quantity_product}</p>
              <p className={cx("col-3","colName")}>{product.price_temp}</p>
              <p className={cx("col-3","colName")}>{product.price_temp*product.quantity_daban}</p>
            </div>
          </div>
          }):"vui lonhgf chọn ngày tháng để xem"}
        </div>
      </div>
    </>
  );
}

export default ThongKeDonHang;
