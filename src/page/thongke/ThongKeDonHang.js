import React, { useEffect, useState } from "react";
import classname from "classnames/bind";
import styles from "./thongkedonhang.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import { faker } from "@faker-js/faker";
import {
  getOrderFilterByDate,
  getOrderFilterByDate_Email,
  getOrderFilterByDate_TypeOrder,
  getOrderFilterByDate_TypeOrder_Email,
  getOrderFilterByDate_Year,
  getOrderFilterByDate_Year_Email,
  getOrderFilterByDate_Year_TypeOrder,
  getOrderFilterByDate_Year_TypeOrder_Email,
} from "../../apiRequset/admin.api";
import Cookies from "js-cookie";

function ThongKeDonHang() {
  const accessToken = Cookies.get("accessToken");
  const cx = classname.bind(styles);
  const [year, setYear] = useState("");
  const [startday, setStartday] = useState("");
  const [endday, setEndday] = useState("");
  const [email, setEmail] = useState("");
  const [typeOrder, setTypeOrder] = useState();
  const [orderYear, setOrderYear] = useState("");
  const [orders, setOrders] = useState("");

  const [dataChart, setDataChart] = useState([]);
  useEffect(() => {
    if (orders) {
      setDataChart(orders);
      if (email && !typeOrder) {
        async function fetchData() {
          const filter = {
            startday,
            endday,
            email,
          };
          const data = await getOrderFilterByDate_Email(filter, accessToken);
          setDataChart(data);
        }
        fetchData();
      } else if (!email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
        async function fetchData() {
          const filter = {
            startday,
            endday,
            status_order: typeOrder,
          };
          const data = await getOrderFilterByDate_TypeOrder(
            filter,
            accessToken
          );
          setDataChart(data);
        }
        fetchData();
      } else if (email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
        async function fetchData() {
          const filter = {
            startday,
            endday,
            email,
            status_order: typeOrder,
          };
          const data = await getOrderFilterByDate_TypeOrder_Email(
            filter,
            accessToken
          );
          setDataChart(data);
        }
        fetchData();
      } else if (!email && typeOrder === "Tất cả đơn hàng") {
        console.log(" k co email && all");

        const data = orders;
        setDataChart(data);
      } else if (email && typeOrder === "Tất cả đơn hàng") {
        async function fetchData() {
          const filter = {
            startday,
            endday,
            email,
          };
          const data = await getOrderFilterByDate_Email(filter, accessToken);
          setDataChart(data);
        }
        fetchData();
      }
    }
    // thong ke theo nam
    if (orderYear) {
      if (email && !typeOrder) {
        async function fetchData() {
          const filter = {
            year,
            email,
          };
          const data = await getOrderFilterByDate_Year_Email(
            filter,
            accessToken
          );
          setDataChart(data);
        }
        fetchData();
      } else if (!email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
        async function fetchData() {
          const filter = {
            year,
            status_order: typeOrder,
          };
          const data = await getOrderFilterByDate_Year_TypeOrder(
            filter,
            accessToken
          );
          setDataChart(data);
        }
        fetchData();
      } else if (email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
        async function fetchData() {
          const filter = {
            year,
            email,
            status_order: typeOrder,
          };
          const data = await getOrderFilterByDate_Year_TypeOrder_Email(
            filter,
            accessToken
          );
          setDataChart(data);
        }
        fetchData();
      } else if (!email && typeOrder === "Tất cả đơn hàng") {
        const data = orderYear;
        setDataChart(data);
      } else if (email && typeOrder === "Tất cả đơn hàng") {
        async function fetchData() {
          const filter = {
            year,
            email,
          };
          const data = await getOrderFilterByDate_Year_Email(
            filter,
            accessToken
          );
          setDataChart(data);
        }
        fetchData();
      }
    }
  }, [orders, typeOrder, email, orderYear]);

  console.log(dataChart);

  // ham xet lai gia tri day

  const handleOnChangeDay = (e, setData) => {
    setData(e.target.value);
  };
  // ham de loc
  const handleGetOrderByFilter = async () => {
    if (startday && endday) {
      const start = new Date(startday);
      const end = new Date(endday);
      // console.log({ start: start.getTime(), end: end.getTime() });
      if (start.getTime() > end.getTime()) {
        alert("ngay bat dau phai lon hon ngay ket thuc");
      } else {
        setYear("");
        // console.log({ startday, endday });
        const dataFilter = { startday, endday };
        const resfilter = await getOrderFilterByDate(dataFilter, accessToken);
        console.log(resfilter);
        setOrders(resfilter);
        setOrderYear("");
        alert("success");
      }
    } else {
      alert("Moi ban chon cac ngay");
    }
  };

  const handleGetOrderByFilter_ByYear = async () => {
    if (year) {
      setStartday("");
      setEndday("");
      // console.log({ startday, endday });
      const dataFilter = { year };
      // console.log(dataFilter)
      const resfilter = await getOrderFilterByDate_Year(
        dataFilter,
        accessToken
      );
      console.log(resfilter);
      setOrderYear(resfilter);
      setDataChart(resfilter);
      setOrders("");
      // alert("success");
    } else {
      alert("Mời bạn nhập năm");
    }
  };

  //   cai de ve bieu do

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Biểu đồ số lượng đơn hàng",
      },
    },
  };

  const labels = dataChart.map((data) => {
    return data.date_order;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Số đơn hàng",
        data: dataChart.map((data) => {
          return data.total_order;
        }),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
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
                onClick={handleGetOrderByFilter}
                className={cx("btn", "btn-danger")}
              >
                Tìm
              </div>
            </div>
            <div className={cx("d-flex")}>
              <div className={cx("me-3")}>
                <label htmlFor="filterByYear" className="form-label">
                  Năm
                </label>
                <input
                  value={year}
                  onChange={(e) => {
                    handleOnChangeDay(e, setYear);
                  }}
                  id={cx("filterByYear")}
                  type="text"
                  className={cx("form-control", "input_date")}
                />
              </div>
              <div
                onClick={handleGetOrderByFilter_ByYear}
                className={cx("btn", "btn-danger")}
              >
                Tìm
              </div>
            </div>
          </div>
          <hr className={cx("mt-1", "mb-1")}></hr>
          <div
            className={cx(
              "filter_byEmail",
              "d-flex",
              "justify-content-between",
              "align-items-center"
            )}
          >
            <div className={cx("mb-3")}>
              <label htmlFor="type_order" className="form-label">
                Loại đơn hàng
              </label>
              <select
                id={cx("type_order")}
                className="form-select"
                value={typeOrder}
                onChange={(e) => {
                  handleOnChangeDay(e, setTypeOrder);
                }}
              >
                <option value="Tất cả đơn hàng">Tất cả đơn hàng</option>
                <option value="Chờ xác nhận">Chờ xác nhận</option>
                <option value="Đang giao">Đang giao</option>
                <option value="Giao hàng thành công">
                  Giao hàng thành công
                </option>
              </select>
            </div>

            <div className={cx("mb-3")}>
              <label htmlFor="inputEmail" className="form-label">
                Email khách hàng
              </label>
              <input
                onChange={(e) => {
                  handleOnChangeDay(e, setEmail);
                }}
                value={email}
                type="email"
                className="form-control"
                id={cx("inputEmail")}
                placeholder="Vui lòng nhập email"
              />
            </div>
          </div>
        </div>

        {/* khu vuc bieu do */}
        <div className={cx("article_chart")}>
          {dataChart.length <= 0
            ? "Mời bạn chọn mốc thời gian để xem biểu đồ"
            : ""}
          <div className={cx("total_order")}>
            Đơn hàng:
            {orders.length > 0
              ? dataChart.reduce((total, data) => {
                  return total + data.total_order;
                }, 0)
              : ""}
            {orderYear.length > 0
              ? dataChart.reduce((total, data) => {
                  return total + data.total_order;
                }, 0)
              : ""}
            {orderYear.length <= 0 && orders.length <= 0 ? "0" : ""}
          </div>
          <hr className={cx("mt-1", "mb-1")}></hr>
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}

export default ThongKeDonHang;
