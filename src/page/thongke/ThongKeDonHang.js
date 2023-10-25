import React, { useState } from "react";
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
//   import {faker} from 'faker';
import { faker } from "@faker-js/faker";
import { getOrderFilterByDate } from "../../apiRequset/admin.api";
import Cookies from "js-cookie";

function ThongKeDonHang() {
  const accessToken = Cookies.get("accessToken");
  const cx = classname.bind(styles);

  const [startday, setStartday] = useState("");
  const [endday, setEndday] = useState("");
  const [email, setEmail] = useState("");
  const [typeOrder, setTypeOrder] = useState("");

  // ham xet lai gia tri day

  const handleOnChangeDay = (e, setData) => {
    setData(e.target.value);
  };
  // ham de loc
  const handleGetOrderByFilter = async () => {
    if (startday && endday) {
      const start = new Date(startday);
      const end = new Date(endday);
      console.log({ start: start.getTime(), end: end.getTime() });
      if (start.getTime() > end.getTime()) {
        alert("ngay bat dau phai lon hon ngay ket thuc");
      } else {
        console.log({ startday, endday });
        const dataFilter = { start, endday };
        const resfilter = await getOrderFilterByDate(dataFilter, accessToken);
        alert(resfilter);
      }
    } else {
      alert("Moi ban chon cac ngay");
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
  console.log({ startday, endday });
  const labels = [
    "21/12/2023",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "July8",
    "July9",
    "July10",
    "July11",
    "July12",
    "July13",
    "July14",
    "July15",
    "July16",
    "July17",
    "July18",
    "July19",
    "July20",
    "July22",
    "July23",
    "July24",
    "July25",
    "July26",
    "July27",
    "July28",
    "July29",
    "July30",
    "July31",
    "July32",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Số đơn hàng",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 13 })),
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
                value="Tất cả đơn hàng"
                onChange={(e) => {
                  handleOnChangeDay(e, setTypeOrder);
                }}
              >
                <option value="Tất cả đơn hàng">Tất cả đơn hàng</option>
                <option value="Chờ xác nhận">Chờ xác nhận</option>
                <option value="Đang xác nhận">Đang xác nhận</option>
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
                  handleOnChangeDay(setEmail);
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
          <div className={cx("total_order")}>Đơn hàng:</div>
          <hr className={cx("mt-1", "mb-1")}></hr>
          <Line options={options} data={data} />
        </div>
      </div>
    </>
  );
}

export default ThongKeDonHang;
