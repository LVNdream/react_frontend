import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./updateproduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsAfterFilter } from "../../redux/selector";
import {
  getAllProduct,
  getProductByCaterogy,
} from "../../apiRequset/product.api";
import { productsSlice } from "../Products/productsSlice";
import ModalUpdate from "./components/ModalUpdate";
import Swal from "sweetalert2";
import { addProductDeleted } from "../../apiRequset/admin.api";
import Cookies from "js-cookie";
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
  const accessToken = Cookies.get("accessToken");

  const dispatch = useDispatch();
  // console.log(date.getTime());

  const [products, setProducts] = useState([]);
  const [seeDetail, setSeeDetail] = useState({ open: false, id: "" });
  const [openModalUpdate, setOpenModalUpdate] = useState({
    open: false,
    id: "",
  });
  const [rerender, setRerender] = useState(0);

  const handleOpenToggle = (id, setToggle) => {
    const cp = { open: true, id: id };
    // console.log(cp);
    setToggle(cp);
  };
  const handleCloseToggle = (id, setToggle) => {
    const cp = { open: false, id: id };
    // console.log(cp);
    setToggle(cp);
  };

  // xu li modal update
  const handleCloseToggleModal = (id) => {
    const cp = { open: false, id: id };
    // console.log(cp);
    setOpenModalUpdate(cp);
  };

  const handleClickTrash = async (product) => {
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
        const inforProductDeleted = {
          id_product_deleted: product.id_product,
          name_product_deleted: product.name_product,
          picture_product_deleted: product.picture_product,
          price_product_deleted: product.price_product,
          type_product_deleted: product.type_product,
          caterogy_product_deleted: product.caterogy_product,
        };
        const resutlDeleted = await addProductDeleted(
          inforProductDeleted,
          accessToken
        );

        if (resutlDeleted.error) {
          Swal.fire({
            position: "top",
            icon: "error",
            title: resutlDeleted.mess,
            showConfirmButton: false,
            timer: 1500,
          });
          // alert(resutlDeleted.mess)
        } else {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          setRerender(rerender + 1);
        }
      }
    });
  };

  // console.log(deleteItem)
  useEffect(() => {
    if (props.router.params.caterogy) {
      getProductByCaterogy(props.router.params.caterogy, setProducts);
    } else {
      getAllProduct(setProducts);
    }
  }, [props.router.params.caterogy, rerender]);

  // console.log(products);

  dispatch(productsSlice.actions.setProductsList(products));
  const productsList = useSelector(productsAfterFilter);
  // console.log(productsList);

  return (
    <>
      <div id={cx("aritcle__infor")} className={cx("container")}>
        {productsList.length > 0 ? (
          productsList.map((product, index) => {
            return (
              <div
                key={product.id_product}
                className={cx("d-flex", "article_infor_item")}
              >
                <img
                  className={cx("item_picture")}
                  src={product.picture_product}
                  alt="Loading"
                />
                <div className={cx("infor_item")}>
                  <h5 className={cx("item_name")}>{product.name_product}</h5>
                  <p className={cx("item_price", "mb-1")}>
                    <b>Giá: </b>
                    {product.price_product}
                  </p>

                  {seeDetail.id === product.id_product && seeDetail.open ? (
                    <span
                      className={cx("btnToggleSeeDetail")}
                      onClick={() => {
                        handleCloseToggle(product.id_product, setSeeDetail);
                      }}
                    >
                      Ẩn bớt
                    </span>
                  ) : (
                    <span
                      className={cx("btnToggleSeeDetail")}
                      onClick={() => {
                        handleOpenToggle(product.id_product, setSeeDetail);
                      }}
                    >
                      Xem chi tiết
                    </span>
                  )}

                  {seeDetail.id === product.id_product && seeDetail.open ? (
                    <div>
                      {product.listColorDetail.length > 0 ? (
                        product.listColorDetail.map((productDetail, index) => {
                          return (
                            <div
                              key={productDetail.id_size + productDetail.color}
                            >
                              <div className={cx("d-flex", "item_color")}>
                                <p>
                                  <b>Size: </b>
                                  {productDetail.id_size}
                                </p>
                                <p>
                                  <b>Màu sắc: </b>
                                  {productDetail.color}
                                </p>
                                <p className={cx("item_quantity", "mb-1")}>
                                  <b>Số lượng: </b>
                                  {productDetail.quantity_product}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div>Error load listDetail</div>
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                  {/*  */}
                </div>

                <div className={cx("d-flex", "articleIconUpdate")}>
                  <div
                    className={cx("icon_edit")}
                    onClick={() => {
                      handleOpenToggle(product.id_product, setOpenModalUpdate);
                    }}
                  >
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                  </div>
                  <div
                    onClick={() => {
                      handleClickTrash(product);
                    }}
                    className={cx("icon_edit")}
                  >
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                  </div>
                </div>

                {openModalUpdate.open &&
                openModalUpdate.id === product.id_product ? (
                  <ModalUpdate
                    product={product}
                    rerender={rerender}
                    setRerender={setRerender}
                    handleCloseToggleModal={handleCloseToggleModal}
                  ></ModalUpdate>
                ) : (
                  ""
                )}
              </div>
            );
          })
        ) : (
          <div>Bạn chưa có sản phẩm</div>
        )}
      </div>
    </>
  );
}

export default withRouter(UpdateProduct);
