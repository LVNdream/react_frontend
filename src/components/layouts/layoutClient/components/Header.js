import React, { useState } from "react";
import styles from "./Header.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filtersSlice } from "./filtersSlice";
import {
  totalItem,
  totalMoney,
  userSelector,
} from "../../../../redux/selector";
import DropdownAdmin from "../../layoutAdmin/components/DropdownAdmin";
import DropDownClient from "./DropDownClient";
import { loginUser, logoutUser } from "../../../../apiRequset/account.api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const cx = className.bind(styles);

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const [openSearch, setOpenSearch] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // useEffect(()=>{
  //   setOpenForm(false);
  //   setOpenSearch(false);
  //   setOpenCart(false);
  // },[])

  const handleToggle = (status, setStatus) => {
    setStatus(!status);
  };

  const handleSearchTextChange = (e) => {
    // console.log({ value: e.target.value });
    setSearchText(e.target.value);
    // dispatch(searchFilterChange(e.target.value));
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };

  const handleLogout = async (accessToken, dispatch) => {
    const resLogOut = await logoutUser(accessToken, dispatch);
    navigate("/client/login");
    // console.log(resLogOut);
  };

  const totalItemInCart = useSelector(totalItem);
  // console.log(totalItemInCart);

  const totalMoneyInCart = useSelector(totalMoney);
  // console.log(totalMoneyInCart);
  const inforUser = useSelector(userSelector);

  // xu li login

  const handleOnChagneInput = (e, setInput) => {
    setInput(e.target.value);
  };

  const inforLogin = {
    email_user: email,
    password_user: password,
  };
  // console.log(inforLogin)

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      const resultLogin = await loginUser(inforLogin, dispatch);
      if (resultLogin === true) {
        setEmail("");
        setPassword("");
        setOpenForm(false);
        navigate("/");
      }
    } else {

      Swal.fire({
        position: 'top',
        icon: 'error',
        title: "Enter enough infor, please",
        showConfirmButton: false,
        timer: 1500
      })
      // alert("Enter enough infor, please");
    }
  };
  return (
    <>
      {/* <h1 id={cx('nhut')} >adsa</h1> */}
      <header className={cx("container", "")}>
        <div className={cx("titleFS")}>
          <p className={cx("titleFS_IF")}>
            Miễn phí vận chuyển cho đơn hàng trên <strong>300k</strong>
          </p>
        </div>
        <div className={cx("mainheader")}>
          <div className={cx("nameshop")}>
            <h1 className={cx("titleNS")}>HOMESHOP</h1>
          </div>

          <ul className={cx("nav__options")}>
            <li></li>
            <li className={cx("option-of__nav")}>
              <Link to={"/"} className={cx("list_link")}>
                Trang chủ
              </Link>
            </li>
            <li className={cx("option-of__nav", "option-of__nav--deep")}>
              <Link to={"/products/men"} className={cx("list_link")}>
                Thời trang nam
                {/* <i className={cx("down fa-solid fa-angle-down"></i> */}
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </Link>
              <ul className={cx("list--fashion")}>
                <li className={cx("list--fashion__selectors")}>
                  <Link
                    className={cx("list--fashion__link")}
                    to={"/products/men/aothun"}
                  >
                    <p>Áo thun</p>
                  </Link>
                  {/* <p className={cx("list--fashion__link")}>Áo thun</p> */}
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <Link
                    className={cx("list--fashion__link")}
                    to={"/products/men/aosomi"}
                  >
                    <p>Áo sơ mi</p>
                  </Link>

                  {/* <p className={cx("list--fashion__link")}>Áo sơ mi</p> */}
                </li>
                <li className={cx("list--fashion__selectors")}>
                  {/* <p className={cx("list--fashion__link")}>
                    Áo khoác, áo nỉ, áo len
                  </p> */}
                  <Link
                    className={cx("list--fashion__link")}
                    to={"/products/men/aokhoac"}
                  >
                    <p>Áo khoác, áo nỉ, áo len</p>
                  </Link>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Quần dài</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Quần short</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Giảm giá</p>
                </li>
              </ul>
            </li>
            <li className={cx("option-of__nav", "option-of__nav--deep")}>
              <Link className={cx("list_link")}>
                Thời trang nữ
                {/* <i className={cx("down fa-solid fa-angle-down")}></i> */}
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </Link>
              <ul className={cx("list--fashion")}>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Áo thun</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Áo sơ mi</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Áo 2 dây</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>
                    Áo khoác, áo nỉ, áo len
                  </p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Quần short</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Quần dài</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Chân váy</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Đầm</p>
                </li>
              </ul>
            </li>
            <li className={cx("option-of__nav")}>
              <Link className={cx("list_link")}>Phụ kiện</Link>
            </li>
            <li className={cx("option-of__nav ", "option-of__nav--deep  ")}>
              <Link className={cx("list_link")}>
                Thông tin
                <i className={cx("down fa-solid fa-angle-down")}></i>
              </Link>
              <ul className={cx("list--fashion")}>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Liên hệ</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>Kiểm tra đơn hàng</p>
                </li>
                <li className={cx("list--fashion__selectors")}>
                  <p className={cx("list--fashion__link")}>
                    Chính sách đổi hàng
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <div className={cx("nav__icons")}>
            {/* tim kiem san pham */}
            <div className={cx("icon__selector", "icon__search")}>
              <div
                className={cx("search")}
                id={cx("search")}
                onClick={() => {
                  handleToggle(openSearch, setOpenSearch);
                  setOpenForm(false);
                  setOpenCart(false);
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </div>
              {openSearch === true ? (
                <div className={cx("formsearch")} id={cx("formsearch")}>
                  <h3>Tìm kiếm</h3>
                  <hr />
                  <div className={cx("formsearch__input")}>
                    <form >
                      <input
                        type="text"
                        id={cx("inputsearch5")}
                        name="tensp"
                        className={cx("form-control")}
                        value={searchText}
                        onChange={handleSearchTextChange}
                        placeholder="Nhập sản phẩm cần tìm... "
                      />
                      <div className={cx("search-in-input")}>
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                        ></FontAwesomeIcon>
                      </div>
                    </form>
                  </div>
                  <div
                    id={cx("cancle--search")}
                    onClick={() => {
                      handleToggle(openSearch, setOpenSearch);
                      setSearchText("");
                      dispatch(filtersSlice.actions.searchFilterChange(""));
                    }}
                  >
                    <p className={cx("text--cancle--search")}>x</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* form dang nhap */}
            {inforUser?.authorization === 0 ? (
              <DropdownAdmin handleLogout={handleLogout}></DropdownAdmin>
            ) : (
              <div>
                {inforUser?.id_user ? (
                  <DropDownClient handleLogout={handleLogout}></DropDownClient>
                ) : (
                  <div className={cx("icon__selector", "icos__user")}>
                    <div
                      className={cx("account")}
                      id={cx("account")}
                      onClick={() => {
                        handleToggle(openForm, setOpenForm);
                        setOpenSearch(false);
                        setOpenCart(false);
                      }}
                    >
                      {/* <i className={cx("fa-solid fa-user")}></i> */}
                      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </div>
                    {openForm === true ? (
                      <div
                        className={cx("formacc", "container")}
                        id={cx("formacc")}
                      >
                        <h5 className={cx("acc__title")}>
                          ĐĂNG NHẬP TÀI KHOẢN
                        </h5>
                        <p className={cx("acc__require")}>
                          Nhập email và mật khẩu của bạn:
                        </p>
                        <hr />
                        <form
                          onSubmit={handleSubmitLogin}
                          className={cx("needs-validation")}
                        >
                          <div className={cx("form-floating", "mb-3")}>
                            <input
                              value={email}
                              onChange={(e) => {
                                handleOnChagneInput(e, setEmail);
                              }}
                              type="email"
                              className={cx("form-control", "size--input")}
                              id={cx("floatingInput")}
                              name="email"
                              placeholder="name@example.com"
                              required
                            />
                            <label
                              className={cx("label--text")}
                              htmlFor="floatingInput"
                            >
                              Email
                            </label>
                          </div>
                          <div className={cx("form-floating")}>
                            <input
                              type="password"
                              onChange={(e) => {
                                handleOnChagneInput(e, setPassword);
                              }}
                              value={password}
                              className={cx("form-control", "size--input")}
                              id={cx("floatingPassword")}
                              name="matkhau"
                              placeholder="Password"
                              required
                            />
                            <label
                              className={cx("label--text")}
                              htmlFor="floatingPassword"
                            >
                              Password
                            </label>
                          </div>
                          <button
                            type="submit"
                            className={cx("btn btn-danger", "btn-account")}
                          >
                            Đăng nhập
                          </button>
                        </form>
                        <p className={cx("rules")}>
                          This site is protected by reCAPTCHA and the
                          <span>Google Privacy Policy</span>
                          and
                          <span>Terms of Service</span>
                          apply.
                        </p>
                        <p className={cx("signup")}>
                          Khách hàng mới?
                          <Link
                            to={"/client/register"}
                            className={cx("link--signup")}
                          >
                            Tạo tài khoản
                          </Link>
                        </p>
                        <p className={cx("forgetpass")}>
                          Quên mật khẩu
                          <span className={cx("link--forgetpass")}>
                            Khôi phục mật khẩu
                          </span>
                        </p>
                        <div
                          id={cx("cancle--acc")}
                          onClick={() => {
                            handleToggle(openForm, setOpenForm);
                          }}
                        >
                          <p className={cx("text--cancle--acc")}>x</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            )}

            {/* press to watch cart */}
            <div className={cx("icon__selector", "icon__cart")}>
              <div
                className={cx("cart-items")}
                id={cx("cart-item")}
                onClick={() => {
                  handleToggle(openCart, setOpenCart);
                  setOpenSearch(false);
                  setOpenForm(false);
                }}
              >
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>

                <p className={cx("number-items")}>{totalItemInCart}</p>
              </div>
              {openCart === true ? (
                <div
                  className={cx("watch-cart", "container")}
                  id={cx("watch-cart")}
                >
                  <h5>GIỎ HÀNG</h5>
                  <hr />
                  <div className={cx("customerCart")}>
                    {totalItemInCart < 0 ? (
                      <p className={cx("noItemInCart")}>
                        Hiện chưa có sản phẩm
                      </p>
                    ) : (
                      <p className={cx("noItemInCart")}>
                        Hiện đã có {totalItemInCart} trong giỏ hàng
                      </p>
                    )}
                  </div>
                  <div
                    className={cx(
                      "d-flex",
                      "justify-content-between",
                      "align-items-center",
                      "money"
                    )}
                  >
                    <h5>TỔNG TIỀN:</h5>
                    <p className={cx("cost")}>
                      {totalItemInCart > 0 ? totalMoneyInCart : "0"}
                    </p>
                  </div>
                  <div
                    className={cx(
                      "d-flex",
                      "justify-content-between",
                      "align-items-center"
                    )}
                  >
                    <p>
                      <Link
                        to={"/cart"}
                        className={cx("btn", "btn-cart", "btn-danger")}
                      >
                        XEM GIỎ HÀNG
                      </Link>
                    </p>
                    <Link
                      to={"/payment/faild"}
                      className={cx("btn", "btn-cart", "btn-danger")}
                      id={cx("btn--pay")}
                    >
                      THANH TOÁN
                    </Link>
                  </div>
                  <div
                    id={cx("cancle--cart")}
                    onClick={() => {
                      handleToggle(openCart, setOpenCart);
                    }}
                  >
                    <p className={cx("text--cancle--cart")}>x</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
