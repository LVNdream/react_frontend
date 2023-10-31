import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./productdeleted.module.scss";
import { getProductDeleted, restoreProduct } from "../../apiRequset/admin.api";
import Cookies from "js-cookie";
import DeletedProduct from "./components/DeletedProduct";
import Swal from "sweetalert2";
function ProductDeleted() {
  const cx = classnames.bind(styles);

  const accessToken = Cookies.get("accessToken");

  const [listDeletedProduct, setlistDeletedProduct] = useState([]);
  const [rerender, setRerender] = useState(0);

  useEffect(() => {
    async function getProductDelete() {
      const productdeleted = await getProductDeleted(accessToken);
      // setOrders(rowsOrder);
      // console.log(productdeleted);
      setlistDeletedProduct(productdeleted);
    }
    getProductDelete();
  }, [accessToken, rerender]);

  // ham de xu li khoi phuc san pham
  const handleRestoreProduct = async (id_product_deleted) => {
    const entity = { id_product_deleted };
    const resultRestore = await restoreProduct(entity, accessToken);
    // console.log(resultRestore);
    if (!resultRestore.isError) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: resultRestore.mess,
        showConfirmButton: false,
        timer: 1500,
      });
      setRerender(rerender + 1);
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: resultRestore.mess,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div id={cx("aritcle__infor")}>
        {listDeletedProduct.length > 0
          ? listDeletedProduct.map((product, index) => {
              return (
                <DeletedProduct
                  key={product.id_product_deleted}
                  product={product}
                  handleRestoreProduct={handleRestoreProduct}
                ></DeletedProduct>
              );
            })
          : "Ban chua co san pham"}
      </div>
    </>
  );
}

export default ProductDeleted;
