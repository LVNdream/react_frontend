import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./favoriteproduct.module.scss";
import ProductFRV from "./components/ProductFRV";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { userSelector } from "../../redux/selector";
import {
  clientDeleteAllFVRProduct,
  clientDeleteFVRProduct,
  clientGetListProductFVRbyUser,
} from "../../apiRequset/client.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";

const cx = classnames.bind(styles);

function FavoriteProduct() {
  const accessToken = Cookies.get("accessToken");
  const navigate = useNavigate();

  const inforUser = useSelector(userSelector);
  const [listProductFVR, setListProductFVR] = useState([]);
  const [rerender, setRerender] = useState(1);

  useEffect(() => {
    if (inforUser === null || !accessToken) {
      navigate("/client/login");
    } else {
      async function getListProductFVR() {
        const rowsProductFVR = await clientGetListProductFVRbyUser(
          inforUser.id_user,
          accessToken
        );
        setListProductFVR(rowsProductFVR);
        // console.log(rowsOrder);
      }
      getListProductFVR();
    }
  }, [accessToken, inforUser, navigate, rerender]);
  // console.log(listProductFVR);
  const handleDeleteFVRItem = async (id_product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resultDelete = await clientDeleteFVRProduct(
          inforUser.id_user,
          accessToken,
          id_product
        );
        setRerender(rerender + 1);

        Swal.fire(resultDelete);
      }
    });
  };

  const handleDeleteAllListFVR = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resultDeleteAll = await clientDeleteAllFVRProduct(
          inforUser.id_user,
          accessToken
        );
        setRerender(rerender + 1);
        // console.log(resultDeleteAll)
        Swal.fire(resultDeleteAll);
      }
    });
  };

  return (
    <div id={cx("aritcle__infor")}>
      {listProductFVR.length > 0 ? (
        <div
          className={cx("d-flex", "align-items-center", "aticleClearAll")}
          onClick={handleDeleteAllListFVR}
        >
          <div className={cx("iconHandPointRight")}>
            <FontAwesomeIcon icon={faHandPointRight}></FontAwesomeIcon>
          </div>
          <p className={cx("titleDeleteAll", "mb-2")}>
            Xoa tat ca ({listProductFVR.length})
          </p>
        </div>
      ) : (
        ""
      )}
      {listProductFVR.length > 0
        ? listProductFVR.map((product, index) => {
            return (
              <ProductFRV
                key={product.id_product}
                product={product}
                handleDeleteFVRItem={handleDeleteFVRItem}
              ></ProductFRV>
            );
          })
        : "Ban chua co san pham yeu thich"}
    </div>
  );
}

export default FavoriteProduct;
