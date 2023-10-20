import React, { useEffect, useState } from "react";
import classnames from "classnames/bind";
import styles from "./addproduct.module.scss";
import {
  addProduct,
  getCaterogyProduct,
  getTypeProduct,
} from "../../apiRequset/admin.api";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selector";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const cx = classnames.bind(styles);

function AddProduct() {
  const inforUser = useSelector(userSelector);
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  const [dataColor, setDataColor] = useState([
    {
      sizeColor: [
        { id_size: "S", quantity_product: "" },
        { id_size: "M", quantity_product: "" },
        { id_size: "L", quantity_product: "" },
        { id_size: "XL", quantity_product: "" },
      ],
      color: "",
    },
  ]);

  const [type_product_data, Set_type_product_data] = useState([]);
  const [caterogy_product_data, Set_Caterogy_product_data] = useState([]);

  const [nameProduct, setNameProduct] = useState("");
  const [pictureProduct, setPictureProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [typeProduct, setTypeProduct] = useState("");
  const [caterogyProduct, setCaterogyProduct] = useState("");

  let inforProduct = {
    accessToken,
    nameProduct,
    pictureProduct,
    priceProduct,
    typeProduct,
    caterogyProduct,
    dataColor,
  };

  const handleOnChangeInpuInfor = (e, setInfor) => {
    setInfor(e.target.value);
  };

  const handleOnchangeInputColor = (e, i) => {
    let value = e.target.value;
    let cp = [...dataColor];
    cp[i].color = value;
    setDataColor(cp);
  };
  //
  const handleOnchangeInputQuantity = (e, i, i1) => {
    let value = e.target.value;
    let cp = [...dataColor];
    cp[i].sizeColor[i1].quantity_product = value;
    setDataColor(cp);
  };
  // const handleOnchangeInputId_size = (e, index) => {
  //   let value = e.target.value;
  //   let cp = [...dataColor];
  //   cp[index].id_size = value;
  //   setDataColor(cp);
  // };

  const handleOnchangeSelectTypeProduct = async (e) => {
    const caterogy_product = await getCaterogyProduct(
      e.target.value,
      accessToken
    );
    // console.log(caterogy_product)
    Set_Caterogy_product_data(caterogy_product);
    setTypeProduct(e.target.value);
  };

  //   const handleOnchangeInputColor = (e) => {};
  const handleAddColor = () => {
    const cp = [
      ...dataColor,
      {
        sizeColor: [
          { id_size: "S", quantity_product: "" },
          { id_size: "M", quantity_product: "" },
          { id_size: "L", quantity_product: "" },
          { id_size: "XL", quantity_product: "" },
        ],
        color: "",
      },
    ];
    setDataColor(cp);
  };
  const handleDeCreaseColor = () => {
    // console.log(123123);
    const cp = [...dataColor];
    if (cp.length > 1) {
      cp.pop();
      setDataColor(cp);
    }
  };

  async function get_and_set_typeproduct() {
    const type_product = await getTypeProduct(accessToken);
    // console.log(type_product);
    if (type_product) {
      Set_type_product_data(type_product);
      setTypeProduct(type_product[0].type_product);
      const initSelectCaterogy = async () => {
        const caterogy_product = await getCaterogyProduct(
          type_product[0].type_product,
          accessToken
        );
        Set_Caterogy_product_data(caterogy_product);
        setCaterogyProduct(caterogy_product[0].caterogy_product);
      };
      initSelectCaterogy();
    }
  }

  useEffect(() => {
    if (inforUser !== null && inforUser.authorization === 0) {
      get_and_set_typeproduct();
    } else if (inforUser) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "You're not Admin",
        showConfirmButton: false,
        timer: 1500,
      });
      // alert("You're not Admin");
    } else {
      navigate("/client/login");
    }
  }, []);

  const handleSubmitAddProduct = async (e) => {
    e.preventDefault();
    // console.log(inforProduct);

    let detailColor = [];
    inforProduct.dataColor.forEach((data, index) => {
      const detail = data.sizeColor.map((dataSize) => {
        return {
          id_size: dataSize.id_size,
          color: data.color,
          quantity_product: dataSize.quantity_product,
        };
      });
      detailColor.push(...detail);
    });

    detailColor = [...detailColor];
    let errorLoop;

    for (let index = 0; index < detailColor.length; index++) {
      const element = detailColor[index];
      for (let i = index + 1; i < detailColor.length; i++) {
        const elementAfter = detailColor[i];
        if (
          element.id_size === elementAfter.id_size &&
          element.color.toLowerCase() === elementAfter.color.toLowerCase()
        ) {
          errorLoop = true;
          break;
        } else {
          errorLoop = false;
        }
      }
      if (errorLoop) {
        break;
      }
    }

    if (errorLoop) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Loi trung san pham",
        showConfirmButton: false,
        timer: 1500,
      });
      // alert("Lap trinh nhu CC");
    } else {
      inforProduct = { ...inforProduct, dataColor: detailColor };
      const resultadd = await addProduct(inforProduct, accessToken);
      if (resultadd.error && resultadd.error === true) {
        Swal.fire({
          position: "top",
          icon: "error",
          title: resultadd.mess,
          showConfirmButton: false,
          timer: 1500,
        });
        // alert(resultadd.mess);
      } else {
        Swal.fire({
          position: "top",
          icon: "success",
          title: resultadd.mess,
          showConfirmButton: false,
          timer: 1500,
        });
        // alert(resultadd.mess);
      }

      setNameProduct("");
      setPictureProduct("");
      setPriceProduct("");
      setTypeProduct("");
      setCaterogyProduct("");
      setDataColor([
        {
          sizeColor: [
            { id_size: "S", quantity_product: "" },
            { id_size: "M", quantity_product: "" },
            { id_size: "L", quantity_product: "" },
            { id_size: "XL", quantity_product: "" },
          ],
          color: "",
        },
      ]);
      Set_type_product_data([]);
      Set_Caterogy_product_data([]);
      get_and_set_typeproduct();
    }
  };
  return (
    <>
      {inforUser !== null && inforUser.authorization === 0 ? (
        <div id={cx("aritcle__infor")} className={cx("container")}>
          <form onSubmit={handleSubmitAddProduct}>
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

                <div className={cx("mb-3")}>
                  <label
                    htmlFor="exampleFormControlInput5"
                    className={cx("form-label")}
                  >
                    Producttype
                  </label>
                  {type_product_data && type_product_data.length > 0 ? (
                    <select
                      className={cx("form-select")}
                      onChange={(e) => {
                        handleOnchangeSelectTypeProduct(e);
                      }}
                    >
                      {type_product_data.map((type_product, index) => {
                        return (
                          <option
                            key={index + type_product.type_product}
                            value={type_product.type_product}
                          >
                            {type_product.type_product}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <div>Error Type_Product</div>
                  )}
                </div>

                <div className={cx("mb-3")}>
                  <label
                    htmlFor="exampleFormControlInput6"
                    className={cx("form-label")}
                  >
                    ProductCaterogy
                  </label>

                  {caterogy_product_data && caterogy_product_data.length > 0 ? (
                    <select
                      className={cx("form-select")}
                      onChange={(e) => {
                        handleOnChangeInpuInfor(e, setCaterogyProduct);
                      }}
                    >
                      {caterogy_product_data.map((caterogy_product, index) => {
                        return (
                          <option
                            key={index + caterogy_product.caterogy_product}
                            value={caterogy_product.caterogy_product}
                          >
                            {caterogy_product.caterogy_product}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <div>Please, choice option</div>
                  )}
                </div>

                <div className={cx("listColor")}>
                  <div className={cx("p-2")}>
                    <div className={cx("d-flex", "justify-content-between")}>
                      <p>Deatail_product</p>
                      <div>
                        <div
                          onClick={handleAddColor}
                          className={cx("btn", "btn-primary", "btn-sm")}
                        >
                          +
                        </div>
                        <div
                          onClick={handleDeCreaseColor}
                          className={cx("btn", "btn-primary", "btn-sm", "ms-2")}
                        >
                          -
                        </div>
                      </div>
                    </div>

                    {dataColor
                      ? dataColor.map((data, i) => {
                          // console.log(data.id_size);
                          return (
                            <div key={i} className={cx("row")}>
                              <div className={cx("row")}>
                                <div className="col-4">Size</div>
                                <div className="col-4">Color</div>

                                <div className="col-4">Quantity</div>
                              </div>
                              {data.sizeColor
                                ? data.sizeColor.map((detail, i1) => {
                                    return (
                                      <div key={i1} className={cx("row")}>
                                        <div className={cx("mb-3", "col-4")}>
                                          <select
                                            className={cx("form-select")}
                                            value={detail.id_size}
                                            disabled
                                          >
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                          </select>
                                        </div>
                                        <div className={cx("mb-3", "col-4")}>
                                          <input
                                            value={data.color}
                                            onChange={(e) => {
                                              handleOnchangeInputColor(e, i);
                                            }}
                                            required
                                            type="text"
                                            className={cx("form-control")}
                                          />
                                        </div>
                                        <div className={cx("mb-3", "col-4")}>
                                          <input
                                            value={detail.quantity_product}
                                            onChange={(e) => {
                                              handleOnchangeInputQuantity(
                                                e,
                                                i,
                                                i1
                                              );
                                            }}
                                            required
                                            type="text"
                                            className={cx("form-control")}
                                          />
                                        </div>
                                      </div>
                                    );
                                  })
                                : "Error Size"}
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>

              <div className={cx("d-flex", "justify-content-around", "mt-5")}>
                <button className={cx("btn", "btn-danger")} type="submit">
                  Add product
                </button>
              </div>
              <hr />
            </div>
          </form>
        </div>
      ) : (
        <div>Bạn phải đăng nhập với tư cách admin</div>
      )}
    </>
  );
}

export default AddProduct;
