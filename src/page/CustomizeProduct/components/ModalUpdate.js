import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./modalupdate.module.scss";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
import UpdateQuantity from "./UpdateQuantity";
import AddColorAndSize from "./AddColorAndSize";
import {
  UpdateProductDetail,
  addProductDetail,
  updateQuantity,
} from "../../../apiRequset/admin.api";
import Swal from "sweetalert2";

function ModalUpdate(props) {
  // console.log(props);

  const {
    id_product,

    listColorDetail,

    name_product,
    picture_product,
    price_product,
  } = props.product;
  const cx = classnames.bind(styles);
  // khai bao cac ten bien
  // const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  const [nameProduct, setNameProduct] = useState(name_product);
  const [pictureProduct, setPictureProduct] = useState(picture_product);
  const [priceProduct, setPriceProduct] = useState(price_product);
  const [openUpdateQuantity, setopenUpdateQuantity] = useState(false);
  const [openAddSizeAndColor, setopenAddSizeAndColor] = useState(false);

  const [listColorDetailState, setListColorDetail] = useState(listColorDetail);

  const handleOnChangeInpuInfor = (e, setInfor) => {
    setInfor(e.target.value);
  };

  const inforProduct = {
    id_product,
    name_product: nameProduct,
    picture_product: pictureProduct,
    price_product: priceProduct,
  };

  const handleSubmitUpdateQuantityProduct = async (entityUpdate) => {
    // console.log({entity,accessToken});

    Swal.fire({
      title: "Are you sure?",
      text: "You want to update this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resultadd = await updateQuantity(entityUpdate, accessToken);
        Swal.fire({
          title: "Updated!",
          text: resultadd.mess,
          icon: "success",
        });
      }
    });

    // Swal.fire({
    //   position: "top",
    //   icon: "success",
    //   title: resultadd.mess,
    //   showConfirmButton: false,
    //   timer: 1500,
    // });

    // console.log(resultadd);
    // alert(resultadd.mess);
  };
  const handleSubmitAddColorAndSize = async (entity) => {
    const resultadd = await addProductDetail(entity, accessToken);
    if (resultadd.isError) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: resultadd.mess,
        showConfirmButton: false,
        timer: 1500,
      });
      // alert(resultadd.mess);
      return false;
    } else {
      Swal.fire({
        position: "top",
        icon: "success",
        title: resultadd.mess,
        showConfirmButton: false,
        timer: 1500,
      });
      // alert(resultadd.mess);
      return true;
    }
  };

  const handleSubmitUpdateInforProduct = async (e) => {
    e.preventDefault();
    if (nameProduct && pictureProduct && priceProduct) {
      console.log(inforProduct);

      Swal.fire({
        title: "Are you sure?",
        text: "You want to update this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const resultUpdate = await UpdateProductDetail(
            inforProduct,
            accessToken
          );

          if (resultUpdate.isError) {
            Swal.fire({
              position: "top",
              icon: "error",
              title: resultUpdate.mess,
              showConfirmButton: false,
              timer: 1500,
            });
            // alert(resultUpdate.mess);
          } else {
            Swal.fire({
              position: "top",
              icon: "success",
              title: resultUpdate.mess,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    } else {
      console.log("Chua co thong tin");
    }
  };
  const handleToggleTableModal = (data, setdata) => {
    setdata(!data);
  };

  const handleClose = (id) => {
    props.handleCloseToggleModal(id);
    props.setRerender(props.rerender + 1);
  };
  return (
    <>
      <div className={cx("modal123")}>
        <div className={cx("content", "p-3")}>
          <button
            onClick={() => {
              handleClose(props.product.id_product);
            }}
            className={cx("btn", "btn-danger", "button-close")}
          >
            X
          </button>

          <form onSubmit={handleSubmitUpdateInforProduct}>
            <div className={cx("inforOrder")}>
              <div className={cx("mb-3")}>
                <div className={cx("mb-3")}>
                  <label
                    htmlFor="exampleFormControlInput2"
                    className={cx("form-label")}
                  >
                    Productname
                  </label>
                  <input
                    value={nameProduct}
                    onChange={(e) => {
                      handleOnChangeInpuInfor(e, setNameProduct);
                    }}
                    required
                    type="text"
                    className={cx("form-control")}
                    id={cx("exampleFormControlInput2")}
                  />
                </div>
                <div className={cx("mb-3")}>
                  <label
                    htmlFor="exampleFormControlInput3"
                    className={cx("form-label")}
                  >
                    Productpicture
                  </label>
                  <input
                    value={pictureProduct}
                    onChange={(e) => {
                      handleOnChangeInpuInfor(e, setPictureProduct);
                    }}
                    required
                    type="text"
                    className={cx("form-control")}
                    id={cx("exampleFormControlInput3")}
                  />
                </div>
                <div className={cx("mb-3")}>
                  <label
                    htmlFor="exampleFormControlInput4"
                    className={cx("form-label")}
                  >
                    Productprice
                  </label>
                  <input
                    value={priceProduct}
                    onChange={(e) => {
                      handleOnChangeInpuInfor(e, setPriceProduct);
                    }}
                    required
                    type="text"
                    className={cx("form-control")}
                    id={cx("exampleFormControlInput4")}
                  />
                </div>
                {openUpdateQuantity ? (
                  <div className={cx("btn", "btn-sm", "btn-outline-secondary")}>
                    <h6
                      onClick={() => {
                        handleToggleTableModal(
                          openUpdateQuantity,
                          setopenUpdateQuantity
                        );
                      }}
                    >
                      CloseModalUpdateQuantity
                    </h6>
                  </div>
                ) : (
                  <div className={cx("btn", "btn-sm", "btn-outline-secondary")}>
                    <h6
                      onClick={() => {
                        handleToggleTableModal(
                          openUpdateQuantity,
                          setopenUpdateQuantity
                        );
                      }}
                    >
                      Update Quantity
                    </h6>
                  </div>
                )}

                {openUpdateQuantity ? (
                  <div>
                    <div className={cx("row")}>
                      <div className={cx("mb-2", "col-4")}>
                        <div>Productsize</div>
                      </div>
                      <div className={cx("mb-2", "col-4")}>
                        <div>Productcolor</div>
                      </div>
                      <div className={cx("mb-2", "col-4")}>
                        <div>Productquantity</div>
                      </div>
                    </div>
                    {listColorDetailState
                      ? listColorDetailState.map((data, index) => {
                          //   console.log(index);
                          return (
                            <div
                              className={cx("row")}
                              key={
                                index +
                                data.id_product +
                                data.id_size +
                                data.color
                              }
                            >
                              <UpdateQuantity
                                data={data}
                                handleOnChangeInpuInfor={
                                  handleOnChangeInpuInfor
                                }
                                handleSubmitUpdateQuantityProduct={
                                  handleSubmitUpdateQuantityProduct
                                }
                              ></UpdateQuantity>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div>
                {openAddSizeAndColor ? (
                  <div className={cx("btn", "btn-sm", "btn-outline-secondary")}>
                    <h6
                      onClick={() => {
                        handleToggleTableModal(
                          openAddSizeAndColor,
                          setopenAddSizeAndColor
                        );
                      }}
                    >
                      Close Modal
                    </h6>
                  </div>
                ) : (
                  <div className={cx("btn", "btn-sm", "btn-outline-secondary")}>
                    <h6
                      onClick={() => {
                        handleToggleTableModal(
                          openAddSizeAndColor,
                          setopenAddSizeAndColor
                        );
                      }}
                    >
                      Add Color And Size
                    </h6>
                  </div>
                )}
                {openAddSizeAndColor ? (
                  <AddColorAndSize
                    id_product={id_product}
                    handleSubmitAddColorAndSize={handleSubmitAddColorAndSize}
                  ></AddColorAndSize>
                ) : (
                  ""
                )}
              </div>

              <div className={cx("d-flex", "justify-content-around", "mt-5")}>
                <button className={cx("btn", "btn-danger")} type="submit">
                  Update Infor
                </button>
              </div>
              <hr />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ModalUpdate;
