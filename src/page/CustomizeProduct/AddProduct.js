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
const cx = classnames.bind(styles);

function AddProduct() {
  const inforUser = useSelector(userSelector);
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  const [dataColor, setDataColor] = useState([
    { id_size: "S", color: "", quantity_product: "" },
  ]);

  const [type_product_data, Set_type_product_data] = useState([]);
  const [caterogy_product_data, Set_Caterogy_product_data] = useState([]);

  const [nameProduct, setNameProduct] = useState("");
  const [pictureProduct, setPictureProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [typeProduct, setTypeProduct] = useState("");
  const [caterogyProduct, setCaterogyProduct] = useState("");

  const inforProduct = {
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

  const handleOnchangeInputColor = (e, index) => {
    let value = e.target.value;
    let cp = [...dataColor];
    cp[index].color = value;
    setDataColor(cp);
  };
  //
  const handleOnchangeInputQuantity = (e, index) => {
    let value = e.target.value;
    let cp = [...dataColor];
    cp[index].quantity_product = value;
    setDataColor(cp);
  };
  const handleOnchangeInputId_size = (e, index) => {
    let value = e.target.value;
    let cp = [...dataColor];
    cp[index].id_size = value;
    setDataColor(cp);
  };

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
    setDataColor([
      ...dataColor,
      { id_size: "S", color: "", quantity_product: "" },
    ]);
  };

  async function get_and_set_typeproduct() {
    const type_product = await getTypeProduct(accessToken);
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

  useEffect(() => {
    if (inforUser !== null && inforUser.authorization === 0) {
      // async function get_and_set_typeproduct() {
      //   const type_product = await getTypeProduct(accessToken);
      //   Set_type_product_data(type_product);
      //   setTypeProduct(type_product[0].type_product);
      //   const initSelectCaterogy = async () => {
      //     const caterogy_product = await getCaterogyProduct(
      //       type_product[0].type_product,
      //       accessToken
      //     );
      //     Set_Caterogy_product_data(caterogy_product);
      //     setCaterogyProduct(caterogy_product[0].caterogy_product);
      //   };
      //   initSelectCaterogy();
      // }
      get_and_set_typeproduct();
    } else {
      navigate("/client/login");
    }
  }, []);

  /* useEffect(() => {
    async function get_and_set_typeproduct() {
      const type_product = await getTypeProduct();
      Set_type_product_data(type_product);
      setTypeProduct(type_product[0].type_product);
      const initSelectCaterogy = async () => {
        const caterogy_product = await getCaterogyProduct(
          type_product[0].type_product
        );
        Set_Caterogy_product_data(caterogy_product);
        setCaterogyProduct(caterogy_product[0].caterogy_product);
      };
      initSelectCaterogy();
    }
    get_and_set_typeproduct();
  }, []); */

  const handleSubmitAddProduct = async (e) => {
    e.preventDefault();
    console.log(inforProduct);

    const resultadd = await addProduct(inforProduct, accessToken);

    if (resultadd.error && resultadd.error === true) {
      alert(resultadd.mess);
    } else {
      alert(resultadd.mess);
    }
    // console.log(resultadd);

    //
    //
    //
    //

    setNameProduct("");
    setPictureProduct("");
    setPriceProduct("");
    setTypeProduct("");
    setCaterogyProduct("");
    setDataColor([{ id_size: "S", color: "", quantity_product: "" }]);
    Set_type_product_data([]);
    Set_Caterogy_product_data([]);

    get_and_set_typeproduct();
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
                      <div
                        onClick={handleAddColor}
                        className={cx("btn", "btn-primary", "btn-sm")}
                      >
                        +
                      </div>
                    </div>

                    {dataColor
                      ? dataColor.map((data, index) => {
                          console.log(data);
                          return (
                            <div key={index} className={cx("row")}>
                              <div className={cx("mb-3", "col-4")}>
                                <label
                                  htmlFor={`exampleFormControlInput2411${index}`}
                                  className={cx("form-label")}
                                >
                                  ProductSize
                                </label>

                                <select
                                  className={cx("form-select")}
                                  onChange={(e) => {
                                    handleOnchangeInputId_size(e, index);
                                  }}
                                  value={data.id_size}
                                >
                                  <option value="S">S</option>
                                  <option value="M">M</option>
                                  <option value="L">L</option>
                                  <option value="XL">XL</option>
                                </select>
                              </div>

                              <div className={cx("mb-3", "col-4")}>
                                <label
                                  htmlFor={`exampleFormControlInput24${index}`}
                                  className={cx("form-label")}
                                >
                                  Productcolor
                                </label>
                                <input
                                  value={data.color}
                                  onChange={(e) => {
                                    handleOnchangeInputColor(e, index);
                                  }}
                                  required
                                  type="text"
                                  className={cx("form-control")}
                                  id={cx(`exampleFormControlInput24${index}`)}
                                />
                              </div>

                              <div className={cx("mb-3", "col-4")}>
                                <label
                                  htmlFor={`exampleFormControlInput2410${index}`}
                                  className={cx("form-label")}
                                >
                                  Productquantity
                                </label>
                                <input
                                  value={data.quantity_product}
                                  onChange={(e) => {
                                    handleOnchangeInputQuantity(e, index);
                                  }}
                                  required
                                  type="text"
                                  className={cx("form-control")}
                                  id={cx(`exampleFormControlInput2410${index}`)}
                                />
                              </div>
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
