import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./products.module.scss";

import Product from "./components/Product";
// import axios from "axios";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsAfterFilter, userSelector } from "../../redux/selector";
import { productsSlice } from "./productsSlice";
import {
  getAllProduct,
  getProductByCaterogy,
} from "../../apiRequset/product.api";
import { addProductFavorite } from "../../apiRequset/client.api";
import Cookies from "js-cookie";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function Products(props) {
  // const keyFilter = useSelector(searchTextSelector);
  // console.log(keyFilter);
  // let date =new Date();
  const cx = classNames.bind(styles);
  const dispatch = useDispatch();
  const inforUser = useSelector(userSelector);
  const accessToken = Cookies.get("accessToken");


  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (props.router.params.caterogy) {
      getProductByCaterogy(props.router.params.caterogy, setProducts);
    } else {
      getAllProduct(setProducts);
    }
  }, [props.router.params.caterogy]);

  // console.log(products);

  dispatch(productsSlice.actions.setProductsList(products));
  const productsList = useSelector(productsAfterFilter);

  // console.log(productsList)

  // console.log(inforUser);

  const handleOnClickIconFavorite = async (id_product) => {
    if (inforUser && id_product) {
      const entity = { id_user: inforUser.id_user, id_product };
      const resultaddFVR = await addProductFavorite(entity,accessToken);
      alert(resultaddFVR);
    }
    else{
      alert("Please, login to add to favorite")
    }
  };

  return (
    <div>
      <div className={cx("frame--intruduce")}>
        {/* <img className={cx("framepicture__picturemain" src="img/slide_1_img.webp" alt="loading">  */}
      </div>
      <main>
        <div className={cx("mt-2")}>
          <h2>Men fashion</h2>
        </div>
        <div className={cx("product", "mt-2", "d-flex", "flex-wrap")}>
          {/* <div>
            <p>Không sản có sản phẩm được tải lên</p>
          </div> */}

          {productsList.length > 0
            ? productsList.map((product) => {
                return (
                  <Product key={product.id_product} product={product} handleOnClickIconFavorite={handleOnClickIconFavorite}></Product>
                );
              })
            : "Chưa có sản phẩm"}

          {/*  */}
        </div>
      </main>
    </div>
  );
}

export default withRouter(Products);
