import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./modalseemore.module.scss";
import { sanphamdabanchitiet } from "../../../apiRequset/admin.api";
import Cookies from "js-cookie";
const accessToken = Cookies.get("accessToken");

function ModalSeemore(props) {
  const cx = classnames.bind(styles);
  // console.log(props);

  const [productsdaban_detail, setProductsdaban_detail] = useState([]);
  const id_product = props.id_product;
  const startday = props.startday;
  const endday = props.endday;

  useEffect(() => {
    const dataFilter = { startday, endday, id_product };
    async function fetchData() {
      const response = await sanphamdabanchitiet(dataFilter, accessToken);
      setProductsdaban_detail(response);
    }
    fetchData();
  }, []);
  console.log(productsdaban_detail);
  return (
    <>
      <div className={cx("modal123")}>
        <div className={cx("content", "p-3")}>
          <button
            onClick={() => {
              props.setOpenModalSeemore(false);
            }}
            className={cx("btn", "btn-danger", "button-close")}
          >
            X
          </button>
          <div className={cx("mt-3")}>
          {productsdaban_detail.length > 0
            ? productsdaban_detail.map((product) => {
                return (
                  <div className={cx("d-flex","mt-2")}>
                    <p className={cx("ms-3")}>Color: {product.color}</p>
                    <p className={cx("ms-3")}>size: {product.size}</p>
                    <p className={cx("ms-3")}>
                      Đã bán: {product.quantity_daban}
                    </p>
                  </div>
                );
              })
            : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSeemore;
