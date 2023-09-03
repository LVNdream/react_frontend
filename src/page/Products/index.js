import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./products.module.scss";

import Product from "./components/Product";
import axios from "axios";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsAfterFilter } from "../../redux/selector";
import { productsSlice } from "./productsSlice";

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

  const cx = classNames.bind(styles);

  // console.log(props.router.params.caterogy);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (props.router.params.caterogy) {
      axios
        .get(
          `http://localhost:3001/products/men/${props.router.params.caterogy}`
        )
        .then((res) => {
          // console.log(res.data);
          setProducts(res.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`http://localhost:3001/products/men/`)
        .then((res) => {
          // console.log(res.data);
          setProducts(res.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.router.params.caterogy]);

  const dispatch = useDispatch();
  dispatch(productsSlice.actions.setProductsList(products));
  const productsList = useSelector(productsAfterFilter);
  // console.log(productsList);

  // console.log(keyFilter)
  // useEffect(()=>{
  //   if (keyFilter && products !== null) {
  //     const new_product = products.filter((product) => {
  //       // console.log(product.name_product)
  //       return product.name_product.includes(keyFilter);
  //     });
  //     console.log(new_product);
  //     setProducts(new_product);
  //   }
  // },[keyFilter,products])
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
                  <Product key={product.id_product} product={product}></Product>
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
