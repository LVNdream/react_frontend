import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./productdeleted.module.scss";
import { getProductDeleted } from "../../apiRequset/admin.api";
import Cookies from "js-cookie";
function ProductDeleted() {
  const cx = classnames.bind(styles);

  const accessToken = Cookies.get("accessToken");

  const [listDeletedProduct,setlistDeletedProduct] = useState([])


  useEffect(() => {
    async function getProductDelete() {
      const productdeleted = await getProductDeleted(accessToken);
      // setOrders(rowsOrder);
      // console.log(productdeleted);
      setlistDeletedProduct(productdeleted)
    }
    getProductDelete();
  }, [accessToken]);

  return <div className={cx("asdas")}></div>;
}

export default ProductDeleted;
