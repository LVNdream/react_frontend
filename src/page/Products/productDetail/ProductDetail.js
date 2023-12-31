import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./productDetail.module.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../Cart/cartSlice";
import { getProductDetail } from "../../../apiRequset/product.api";
import Swal from "sweetalert2";
import ContentComment from "./ContentComment";
import { userSelector } from "../../../redux/selector";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function ProductDetail(props) {
  // console.log(props.router.params);

  const dispatch = useDispatch();

  const [inforDetail, setInforDetail] = useState();
  const [inputQuantity, setInputQuantity] = useState(1);
  const [rerender, setRerender] = useState(0);

  const inforUser = useSelector(userSelector);

  // ham dung de thay doi so luong khi nhap vao

  const changeInputQuantity = (data, operator = false) => {
    // console.log(data);
    if (operator === true) {
      if (inputQuantity <= 1 && data === -1) {
        // alert(" Quantity have to larger 0");
        Swal.fire({
          position: "top",
          icon: "warning",
          title: "Quantity have to larger 0",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (data === 1 && inputQuantity >= quantity) {
        Swal.fire({
          position: "top",
          icon: "warning",
          title: " Quantity not enough for you",
          showConfirmButton: false,
          timer: 1500,
        });
        // alert(" Quantity not enough for you");
      } else {
        setInputQuantity(inputQuantity + data);
      }
    } else {
      if (data < 0) {
        // alert(" Quantity have to larger 0");
        Swal.fire({
          position: "top",
          icon: "warning",
          title: "Quantity have to larger 0",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (data > quantity) {
        Swal.fire({
          position: "top",
          icon: "warning",
          title: " Quantity not enough for you or please choose size and color",
          showConfirmButton: false,
          timer: 1500,
        });
        // alert(" Quantity not enough for you or please choose size and color");
      } else {
        setInputQuantity(data);
      }
    }
  };

  // ham de lay du lieu ve

  useEffect(() => {
    let id_user = "null"
    if(inforUser){
      id_user = inforUser?.id_user
    }
    getProductDetail(
      props.router.params.type,
      props.router.params.caterogy,
      props.router.params.id,
      setInforDetail,
      id_user
    );
  }, [
    props.router.params.type,
    props.router.params.caterogy,
    props.router.params.id,
    rerender,
    inforUser,
  ]);

  const handleRerender = () => {
    setRerender(rerender + 1);
  };
  // console.log(inforDetail);
  // console.log(inforUser);

  // xet so luong khi chon san pham

  const [quantity, setQuantity] = useState(
    inforDetail ? inforDetail.listColorDetail[0].quantity_product : ""
  );
  const [size, setSize] = useState("");
  const [colorrr, setColor] = useState(
    inforDetail ? inforDetail.listColorDetail[0].color : ""
  );

  // ham cho biet so luong cua san pham khi thay doi color va size

  const handleOnChangeColor = (e) => {
    // setQuantity(quantity);
    // console.log(e.target.value);
    setColor(e.target.value);
    const itemColor = inforDetail.listColorDetail.filter((productColor) => {
      return (
        productColor.color === e.target.value && productColor.id_size === size
      );
    });
    if (itemColor.length === 0) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Mời bạn chọn kích thước để xem số lượng",
        showConfirmButton: false,
        timer: 1500,
      });

      // alert("Mời bạn chọn kích thước để xem số lượng");
    } else {
      setQuantity(itemColor[0].quantity_product);
      setInputQuantity(1);
    }
  };
  const handleOnChangeSize = (e) => {
    // setQuantity(quantity);
    setSize(e.target.value);
    const itemColor = inforDetail.listColorDetail.filter((productColor) => {
      return (
        productColor.color === colorrr &&
        productColor.id_size === e.target.value
      );
    });

    if (itemColor.length === 0) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Mời bạn chọn màu để xem số lượng",
        showConfirmButton: false,
        timer: 1500,
      });
      // alert("Mời bạn chọn màu để xem số lượng");
    } else {
      setQuantity(itemColor[0].quantity_product);
      setInputQuantity(1);
    }
  };

  const cx = classNames.bind(styles);
  return (
    <>
      {inforDetail ? (
        <div className={cx("container")}>
          <div className={cx("tilte-main")}>
            <p className={cx("title-content")}>
              Trang chủ -&#62; NOBITAHOME -&#62;{" "}
              {inforDetail.type_product +
                " / " +
                inforDetail.caterogy_product +
                " / " +
                inforDetail.name_product}
            </p>
          </div>
          <div className={cx("row")}>
            <div className={cx("col-lg-6")}>
              <div className={cx("article-picture-product")}>
                <img
                  className={cx("picture-product")}
                  id={cx("picture")}
                  src={inforDetail.picture_product}
                  alt="Loading"
                  title={inforDetail.name_product}
                />
              </div>
              <div className={cx("row")}>
                <div>
                  <p className={cx("note-size")}>
                    - Vui lòng tham khảo “bảng quy đổi kích cỡ” và so sánh với
                    số đo áo hoặc quần của bạn để chọn được size phù hợp nhất.
                  </p>
                </div>
                <div>
                  <p className={cx("note-commit")}>
                    - Hình ảnh được chụp 100% từ sản phẩm thật, dưới ánh sáng tự
                    nhiên và không qua chỉnh sửa để đảm bảo màu sắc trung thực
                    nhất có thể (không tránh khỏi sai lệch từ 10-20% do thiết bị
                    hiển thị).
                  </p>
                </div>
              </div>
            </div>
            <div className={cx("col-lg-6")}>
              <h5 className={cx("product-name")} id={cx("name")}>
                {inforDetail.name_product}
              </h5>
              <p className={cx("product-code")} id={cx("masp")}>
                <b>Mã sản phẩm:</b>
                {inforDetail.id_product}
              </p>
              <div className={cx("d-flex article-price")}>
                <div className={cx("product-discount")}>
                  <p className={cx("discount-content")}>0%</p>
                </div>
                <div className={cx("product-price")}>
                  <p className={cx("price-content")} id={cx("price")}>
                    {inforDetail.price_product}đ
                  </p>
                </div>
              </div>

              <div className={cx("d-flex", "article-color")}>
                <p className={cx("title-color")}>Màu sắc:</p>
                <div className={cx("d-flex", "article-color-option")}>
                  {inforDetail.listColor.map((itemColor, index) => {
                    return (
                      <div key={index}>
                        <input
                          onChange={(e) => {
                            handleOnChangeColor(e);
                          }}
                          type="radio"
                          name="itemColor"
                          value={itemColor.color}
                        />
                        <label>{itemColor.color}</label>
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={cx("d-flex", "article-size")}>
                <div>
                  <p className={cx("title-size")}>Kich thước:</p>
                </div>
                <div className={cx("d-flex", "article-size-option", "mt-2")}>
                  {inforDetail.listSize.map((itemSize, index) => {
                    return (
                      <div key={index}>
                        <input
                          onChange={(e) => {
                            handleOnChangeSize(e);
                          }}
                          type="radio"
                          id={cx("size1")}
                          name="itemSize"
                          value={itemSize.id_size}
                        />
                        <label htmlFor="size1">{itemSize.id_size}</label>
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>

              <hr />

              <div className={cx("d-flex", "article-shopping")}>
                <div className={cx("article--iconFavorite")}>
                  <i className={cx("fa-solid fa-heart iconFavorite")}></i>
                  <FontAwesomeIcon
                    className={cx("iconFavorite", {
                      isFavorite: inforDetail.isFavorite,
                    })}
                    icon={faHeart}
                  ></FontAwesomeIcon>
                </div>
                <div className={cx("productInCart--quantity", "d-flex")}>
                  <button
                    className={cx("btnquantityDown")}
                    id={cx("downquantity")}
                    name="down"
                    onClick={() => {
                      changeInputQuantity(-1, true);
                    }}
                  >
                    -
                  </button>
                  <input
                    className={cx("input--quantity")}
                    id={cx("inputquntity")}
                    type="text"
                    name="quantity"
                    value={inputQuantity}
                    max={quantity}
                    onChange={(event) => {
                      changeInputQuantity(Number(event.target.value));
                    }}
                  />
                  <button
                    className={cx("btnquantityUp")}
                    id={cx("upquantity")}
                    name="up"
                    onClick={() => {
                      changeInputQuantity(1, true);
                    }}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    id={cx("btn-addToCart")}
                    type="button"
                    className={cx("btn", "button-cart", "btn-lg")}
                    onClick={() => {
                      if (
                        colorrr === "" ||
                        size === "" ||
                        inputQuantity === ""
                      ) {
                        Swal.fire({
                          position: "top",
                          icon: "warning",
                          title:
                            "Mời ban chọn size, color, quantity để thêm vào giỏ hàng",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                        // alert(
                        //   "Mời ban chọn size, color, quantity để thêm vào giỏ hàng"
                        // );
                      } else if (inputQuantity <= 0) {
                        Swal.fire({
                          position: "top",
                          icon: "warning",
                          title: "Quantity phải lớn hơn 0  ",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                        // alert("Quantity phải lớn hơn 0  ");
                      } else {
                        dispatch(
                          cartSlice.actions.addToCart({
                            id_product: inforDetail.id_product,
                            picture_product: inforDetail.picture_product,
                            name_product: inforDetail.name_product,
                            price_product: inforDetail.price_product,
                            type_product: inforDetail.type_product,
                            caterogy_product: inforDetail.caterogy_product,
                            quantity: inputQuantity,
                            size: size,
                            color: colorrr,
                            quantity_product: quantity,
                          })
                        );
                        // setColor(inforDetail.listColorDetail[0].color)
                        // setSize(inforDetail.listColorDetail[0].size)
                        setInputQuantity(1);
                        Swal.fire({
                          position: "top",
                          icon: "success",
                          title: "Bạn đã thêm sản phẩm vào giỏ hàng thành công",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                        // alert("Bạn đã thêm sản phẩm vào giỏ hàng thành công");
                      }
                    }}
                  >
                    Thêm vào giỏ hàng
                    {/* <i
                      className={cx(
                        "fa-solid fa-cart-shopping icon-cartShopping"
                      )}
                    ></i> */}
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className={cx("icon-cartShopping")}
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>

              <div>
                <p className={cx("title-advertisment")}>
                  Số lượng:
                  {quantity ? (
                    quantity
                  ) : (
                    <span className={cx("advideChooseSize")}>
                      (Vui lòng chọn sie và màu để xem số lượng)
                    </span>
                  )}
                </p>
              </div>
              <hr />

              <div className={cx("article-infor-product")}>
                <p className={cx("title-infor-szie")}>Thông tin sản phẩm:</p>
                <div className={cx("article-infor-product-size")}>
                  <img
                    className={cx("infor-product-size")}
                    src="https://file.hstatic.net/1000296747/file/8032_3530ce6306c04951b8e5376bcd0f448b_1024x1024.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div
              className={cx(
                "d-flex",
                "justify-content-between",
                "article-notification"
              )}
            >
              <p>Đánh giá sản phẩm</p>

              {/* <div className={cx("alert", "alert-danger")} role="alert">
                <p>Để đánh giá sản phẩm vui lòng bạn hãy đăng nhập</p>
              </div> */}
            </div>

            <div className={cx("mb-3", "aritcle-infor-comment")}>
              {inforDetail.commentDetail && inforDetail.commentDetail.length > 0
                ? inforDetail.commentDetail.map((comment, index) => {
                    return (
                      <ContentComment
                        key={index}
                        comment={comment}
                        inforUser={inforUser}
                        handleRerender={handleRerender}
                      ></ContentComment>
                    );
                  })
                : ""}
            </div>

            {/* <div>
              <form
                action="/fashion/menfashion/product/{{ctproduct.masp}}"
                encType="multipart/form-data"
                method="post"
              >
                <div className={cx("d-flex", "article_input-infor")}>
                  <div>
                    <div id={cx("article-upfile")}>
                      <label htmlFor="upFile">
                        <i className={cx("fa-solid fa-camera-retro")}></i>
                      </label>
                      <input
                        id={cx("upFile")}
                        name="file"
                        className={cx("input-image")}
                        type="file"
                        accept="video/*,image/*"
                        multiple="mutiple"
                      />
                    </div>
                    <div id={cx("comment")}>
                      <label htmlFor="comment">
                        <b>Nhận xét</b>
                      </label>
                      <input
                        id={cx("comment")}
                        name="content"
                        type="text"
                        className={cx("input-comment")}
                        placeholder="Viết nhận xét..."
                        required
                      />
                    </div>
                    <input
                      id={cx("comment")}
                      name="masp"
                      type="text"
                      className={cx("input-comment")}
                      value="{{ctproduct.masp}}"
                      readOnly={true}
                      hidden
                    />
                  </div>
                  <button className={cx("btn-post")} type="submit">
                    Đăng
                  </button>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      ) : (
        <div>
          <p>Thong tin san pham chua co</p>
        </div>
      )}
    </>
  );
}

export default withRouter(ProductDetail);
