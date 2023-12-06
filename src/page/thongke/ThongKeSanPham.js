import React, { useState } from "react";
import classname from "classnames/bind";
import styles from "./thongkesanpham.module.scss";
import { sanphamdaban } from "../../apiRequset/admin.api";
import Cookies from "js-cookie";
import ProductDaban from "./components/ProductDaban";

function ThongKeDonHang() {
  const accessToken = Cookies.get("accessToken");
  const cx = classname.bind(styles);

  const [startday, setStartday] = useState("");
  const [endday, setEndday] = useState("");
  const [nameProduct, setNameProduct] = useState("");

  const [products, setProducts] = useState("");
  const [productsFilter, setProductsFilter] = useState([]);

  //   console.log(dataChart);

  // ham xet lai gia tri day

  const handleOnChangeDay = (e, setData) => {
    setData(e.target.value);
  };

  const handleOnChangSearch = (e) => {
    setNameProduct(e.target.value);
    const productAfterFilter = products.filter((product) => {
      return product.name_product
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    console.log(productAfterFilter);
    setProductsFilter(productAfterFilter);
    console.log(e.target.value);
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
        // console.log(resfilter);
        setProducts(resfilter);
        setProductsFilter(resfilter);
        alert("success");
      }
    } else {
      alert("Moi ban chon cac ngay");
    }
  };

  //   cai de ve bieu do

  //
  // console.log(products);
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
                  handleOnChangSearch(e);
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
          <div className={cx("row", "ms-3", "me-3", "mt-3")}>
            <h6 className={cx("col-4", "colName")}>Tên sản phẩm</h6>

            <div className={cx("row", "col-8")}>
              <h6 className={cx("col-3", "colName")}>Số lượng còn lại</h6>
              <h6 className={cx("col-3", "colName")}>Số lượng bán ra</h6>
              <h6 className={cx("col-3", "colName")}>Giá bán</h6>
              <h6 className={cx("col-3", "colName")}>Thành tiền</h6>
            </div>
          </div>
          {productsFilter.length > 0
            ? productsFilter.map((product) => {
                return (
                 
                  <ProductDaban key={product.id_product} product={product} startday={startday} endday={endday}></ProductDaban>

                );
              })
            : "Vui lòng chọn mốc thời gian để xem hoặc không có sản phẩm phù hợp với tên bạn nhập"}
        </div>
      </div>
    </>
  );
}

export default ThongKeDonHang;
