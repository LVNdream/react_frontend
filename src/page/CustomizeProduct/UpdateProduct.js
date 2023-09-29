import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./updateproduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsAfterFilter } from "../../redux/selector";
import {
  getAllProduct,
  getProductByCaterogy,
} from "../../apiRequset/product.api";
import { productsSlice } from "../Products/productsSlice";
const cx = classnames.bind(styles);
//
// import axios from "axios";

//

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

//
function UpdateProduct(props) {
  //
  // const keyFilter = useSelector(searchTextSelector);
  // console.log(keyFilter);
  // let date =new Date();
  const dispatch = useDispatch();
  // console.log(date.getTime());

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (props.router.params.caterogy) {
      getProductByCaterogy(props.router.params.caterogy, setProducts);
      // axios
      //   .get(
      //     `http://localhost:3001/products/men/${props.router.params.caterogy}`
      //   )
      //   .then((res) => {
      //     // console.log(res.data);
      //     setProducts(res.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    } else {
      getAllProduct(setProducts);
      // axios
      //   .get(`http://localhost:3001/products/men/`)
      //   .then((res) => {
      //     // console.log(res.data);
      //     setProducts(res.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }, [props.router.params.caterogy]);

  // console.log(products);

  dispatch(productsSlice.actions.setProductsList(products));
  const productsList = useSelector(productsAfterFilter);
  console.log(productsList);

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
  //
  return (
    <>
      <div>
        <div>
          <div>Bạn chưa có sản phẩm</div>

          <div id={cx("aritcle__infor")} className={cx("container")}>
            <div className={cx("d-flex", "article_infor_item")}>
              <img className={cx("item_picture")} src="" alt="" />
              <div className={cx("infor_item")}>
                <p hidden>123</p>
                <h5 className={cx("item_name")}>dfdfg</h5>
                <p className={cx("item_price", "mb-1")}>
                  <b>Giá: </b>dfgdfg
                </p>
                <p className={cx("item_quantity", "mb-1")}>
                  <b>Số lượng: </b>dgdfgd
                </p>
              </div>
              <div className={cx("icon_edit")}>
                <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(UpdateProduct);
