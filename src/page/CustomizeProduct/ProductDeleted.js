import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./productdeleted.module.scss";
import { getProductDeleted } from "../../apiRequset/admin.api";
import Cookies from "js-cookie";
import DeletedProduct from "./components/DeletedProduct";
function ProductDeleted() {
  const cx = classnames.bind(styles);

  const accessToken = Cookies.get("accessToken");

  const [listDeletedProduct, setlistDeletedProduct] = useState([]);

  useEffect(() => {
    async function getProductDelete() {
      const productdeleted = await getProductDeleted(accessToken);
      // setOrders(rowsOrder);
      // console.log(productdeleted);
      setlistDeletedProduct(productdeleted);
    }
    getProductDelete();
  }, [accessToken]);
// console.log(listDeletedProduct)
  return (
    <>
      <div id={cx("aritcle__infor")}>
        {listDeletedProduct.length > 0
          ? listDeletedProduct.map((product, index) => {
              return <DeletedProduct key={product.id_product_deleted} product={product}></DeletedProduct>;
            })
          : "Ban chua co san pham"}
      </div>
    </>
  );
}

export default ProductDeleted;
