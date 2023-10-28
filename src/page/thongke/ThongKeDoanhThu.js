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
  revenueByDate,
  revenueByYear,
} from "../../apiRequset/admin.api";
import Cookies from "js-cookie";

function ThongKeDaonhThu() {
  const accessToken = Cookies.get("accessToken");
  const cx = classname.bind(styles);
  const [year, setYear] = useState("");
  const [startday, setStartday] = useState("");
  const [endday, setEndday] = useState("");
//   
  const [orderYear, setOrderYear] = useState("");
  const [orders, setOrders] = useState("");

  const [dataChart, setDataChart] = useState([]);

  //   if (orders) {
  //     setDataChart(orders);
  //     if (email && !typeOrder) {
  //       async function fetchData() {
  //         const filter = {
  //           startday,
  //           endday,
  //           email,
  //         };
  //         const data = await getOrderFilterByDate_Email(filter, accessToken);
  //         setDataChart(data);
  //       }
  //       fetchData();
  //     } else if (!email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
  //       async function fetchData() {
  //         const filter = {
  //           startday,
  //           endday,
  //           status_order: typeOrder,
  //         };
  //         const data = await getOrderFilterByDate_TypeOrder(
  //           filter,
  //           accessToken
  //         );
  //         setDataChart(data);
  //       }
  //       fetchData();
  //     } else if (email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
  //       async function fetchData() {
  //         const filter = {
  //           startday,
  //           endday,
  //           email,
  //           status_order: typeOrder,
  //         };
  //         const data = await getOrderFilterByDate_TypeOrder_Email(
  //           filter,
  //           accessToken
  //         );
  //         setDataChart(data);
  //       }
  //       fetchData();
  //     } else if (!email && typeOrder === "Tất cả đơn hàng") {
  //       console.log(" k co email && all");

  //       const data = orders;
  //       setDataChart(data);
  //     } else if (email && typeOrder === "Tất cả đơn hàng") {
  //       async function fetchData() {
  //         const filter = {
  //           startday,
  //           endday,
  //           email,
  //         };
  //         const data = await getOrderFilterByDate_Email(filter, accessToken);
  //         setDataChart(data);
  //       }
  //       fetchData();
  //     }
  //   }
  //   // thong ke theo nam
  //   if (orderYear) {
  //     if (email && !typeOrder) {
  //       async function fetchData() {
  //         const filter = {
  //           year,
  //           email,
  //         };
  //         const data = await getOrderFilterByDate_Year_Email(
  //           filter,
  //           accessToken
  //         );
  //         setDataChart(data);
  //       }
  //       fetchData();
  //     } else if (!email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
  //       async function fetchData() {
  //         const filter = {
  //           year,
  //           status_order: typeOrder,
  //         };
  //         const data = await getOrderFilterByDate_Year_TypeOrder(
  //           filter,
  //           accessToken
  //         );
  //         setDataChart(data);
  //       }
  //       fetchData();
  //     } else if (email && typeOrder && typeOrder !== "Tất cả đơn hàng") {
  //       async function fetchData() {
  //         const filter = {
  //           year,
  //           email,
  //           status_order: typeOrder,
  //         };
  //         const data = await getOrderFilterByDate_Year_TypeOrder_Email(
  //           filter,
  //           accessToken
  //         );
  //         setDataChart(data);
  //       }
  //       fetchData();
  //     } else if (!email && typeOrder === "Tất cả đơn hàng") {
  //       const data = orderYear;
  //       setDataChart(data);
  //     } else if (email && typeOrder === "Tất cả đơn hàng") {
  //       async function fetchData() {
  //         const filter = {
  //           year,
  //           email,
  //         };
  //         const data = await getOrderFilterByDate_Year_Email(
  //           filter,
  //           accessToken
  //         );
  //         setDataChart(data);
  //       }
  //       fetchData();
  //     }
  //   }
  // }, [orders, typeOrder, email, orderYear]);

  // console.log(dataChart);

  // ham xet lai gia tri day

  const handleOnChangeDay = (e, setData) => {
    setData(e.target.value);
  };
  // ham de loc
  const handleRevenueByFilter_ByDate = async () => {
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
        const resfilter = await revenueByDate(dataFilter, accessToken);
        // console.log(resfilter);
        setDataChart(resfilter)
        setOrders(resfilter);
        setOrderYear("");
        alert("success");
      }
    } else {
      alert("Moi ban chon cac ngay");
    }
  };

  const handleRevenueByFilter_ByYear = async () => {
    if (year) {
      setStartday("");
      setEndday("");
      // console.log({ startday, endday });
      const dataFilter = { year };
      // console.log(dataFilter)
      const resfilter = await revenueByYear(
        dataFilter,
        accessToken
      );
      // console.log(resfilter);
      setOrderYear(resfilter);
      setDataChart(resfilter);
      setOrders("");
      alert("success");
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
        label: "Doanh thu",
        data: dataChart.map((data) => {
          return data.total_money;
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
                onClick={handleRevenueByFilter_ByDate}
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
                onClick={handleRevenueByFilter_ByYear}
                className={cx("btn", "btn-danger")}
              >
                Tìm
              </div>
            </div>
          </div>
          <hr className={cx("mt-1", "mb-1")}></hr>
        </div>

        {/* khu vuc bieu do */}
        <div className={cx("article_chart")}>
          {dataChart.length <= 0
            ? "Mời bạn chọn ngày tháng để xem biểu đồ"
            : ""}
          <div className={cx("total_order")}>
            Daonh thu:
            {orders.length > 0
              ? dataChart.reduce((total, data) => {
                  return total + data.total_money;
                }, 0)
              : ""}
            {orderYear.length > 0
              ? dataChart.reduce((total, data) => {
                  return total + data.total_money;
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

export default ThongKeDaonhThu;
