import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./payment.module.scss";
import PayProduct from "./components/PayProduct";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, totalMoney, userSelector } from "../../redux/selector";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import { cartSlice } from "../Cart/cartSlice";
import { addOrder, createUrlVnPay } from "../../apiRequset/order.api";
import Swal from "sweetalert2";

function Payment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inforUser = useSelector(userSelector);

  let params = useParams();

  const cx = classNames.bind(styles);

  // const totalItemInCart = useSelector(totalItem);
  const totalMoneyInCart = useSelector(totalMoney);
  const itemInCart = useSelector(cartSelector);

  const [fullname, setFullname] = useState(
    inforUser?.firstname_user + " " + inforUser?.lastname_user
  );
  const [email, setEmail] = useState(inforUser?.email_user);
  const [phone, setPhone] = useState(inforUser?.phone_user);
  const [recive, setRecive] = useState("");
  const [adress, setAdress] = useState("");
  const [payMethod, setPayMethod] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (inforUser === null) {
      navigate("/client/login");
    } else {
      console.log(params.status);

      if (params.status === "success" && JSON.parse(localStorage.getItem("inforOrder"))) {
        const inforOrder = JSON.parse(localStorage.getItem("inforOrder"));

        async function AddOrder() {
          if (inforOrder) {
            console.log(inforOrder);
            console.log("them hoa don");
            const response = await addOrder(inforOrder);
            Swal.fire({
              position: "top",
              icon: "success",
              title: response,
              showConfirmButton: false,
              timer: 1500,
            });
            setFullname("");
            setEmail("");
            setPhone("");
            setRecive("");
            setAdress("");
            setPayMethod("");
            setNote("");
            dispatch(cartSlice.actions.clearCart());
            localStorage.removeItem("inforOrder");
            console.log(JSON.parse(localStorage.getItem("inforOrder")));
          } else {
            Swal.fire({
              position: "top",
              icon: "error",
              title:
                "Chưa có sản phẩm trong giỏ hàng hoặc bạn điền thiếu thông tin",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
        AddOrder();
      } else {
        console.log("k them hoa don");
      }
    }
  }, [inforUser, navigate, params]);

  // hàm check Email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // ham de kiem tra hop le form

  const handleValidate = (name, inforValid, infnorInvalid) => {
    if (name) {
      return (
        <div
          className={cx({
            valid: name,
          })}
        >
          {inforValid} <FontAwesomeIcon icon={faCheck} />
        </div>
      );
    } else {
      return (
        <div
          className={cx({
            invalid: !name,
          })}
        >
          {infnorInvalid}
        </div>
      );
    }
  };

  // if (fullname) {
  //   console.log("123");
  // } else {
  //   console.log("456");
  // }

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (
      fullname &&
      email &&
      validateEmail(email) &&
      phone &&
      recive &&
      (adress || recive === "Nhận tại cửa hàng") &&
      payMethod &&
      itemInCart.length > 0
    ) {
      const inforOrder = {
        fullname,
        email,
        phone,
        recive,
        adress,
        paymethod_order: payMethod,
        note_order: note,
        total_money_order:
          totalMoneyInCart && totalMoneyInCart > 30000
            ? totalMoneyInCart
            : totalMoneyInCart + 30000,
        itemInCart,
        status: "Chờ xác nhận",
      };
      if (payMethod === "Chuyển khoản vnpay") {
        console.log("chuyen khoan vn pay");
        localStorage.setItem("inforOrder", JSON.stringify(inforOrder));
        const response = await createUrlVnPay(inforOrder);
        console.log(response);
        window.location.href = response;
      } else {
        console.log("tien mat");

        const response = await addOrder(inforOrder);

        Swal.fire({
          position: "top",
          icon: "success",
          title: response,
          showConfirmButton: false,
          timer: 1500,
        });

        setFullname("");
        setEmail("");
        setPhone("");
        setRecive("");
        setAdress("");
        setPayMethod("");
        setNote("");
        dispatch(cartSlice.actions.clearCart());
      }

      //  const response = await addOrder(inforOrder);

      // Swal.fire({
      //   position: "top",
      //   icon: "success",
      //   title: response,
      //   showConfirmButton: false,
      //   timer: 1500,
      // });

      // setFullname("");
      // setEmail("");
      // setPhone("");
      // setRecive("");
      // setAdress("");
      // setPayMethod("");
      // setNote("");
      // dispatch(cartSlice.actions.clearCart());
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Chưa có sản phẩm trong giỏ hàng hoặc bạn điền thiếu thông tin",
        showConfirmButton: false,
        timer: 1500,
      });

      // alert("Chưa có sản phẩm trong giỏ hàng hoặc bạn điền thiếu thông tin: ");
    }
  };

  // ham de dung validate form

  return (
    <div>
      <main className={cx("container", "mt-4")}>
        <div className={cx("row")}>
          {/* layout bên trái  */}
          <div className={cx("col-7", "article--layout1")}>
            <div className={cx("pay--infor")}>
              <div
                className={cx(
                  "d-flex",
                  "justify-content",
                  "between tilte--pay"
                )}
              >
                <Link className={cx("link--to--cart")} to="/cart">
                  Giỏ hàng
                </Link>
                <i
                  className={cx("fa-solid", "fa-chevron-right", "icon--next")}
                ></i>
              </div>
              <h5 className={cx("mb-4")}>Thông tin giao hàng</h5>
              <form
                onSubmit={handleSubmitOrder}
                className={cx("")}
                noValidate
                id="payForm"
              >
                <div className={cx("form-floating", "mb-3")}>
                  <input
                    onChange={(e) => {
                      setFullname(e.target.value);
                      // console.log(fullname)
                    }}
                    type="text"
                    className={cx("form-control", "input--infor", {
                      valid: fullname,
                      invalid: !fullname,
                    })}
                    id="floatinghovaten"
                    name="hovaten"
                    placeholder="Họ và tên"
                    value={fullname}
                  />
                  <label htmlFor="floatinghovaten">Họ và tên</label>
                  {handleValidate(
                    fullname,
                    "Mời bạn kiểm tra họ tên trước khi đặt hàng",
                    "Mời bạn nhập họ và tên"
                  )}
                </div>
                <div className={cx("d-flex", "mb-3", "email_and_phone--gap")}>
                  <div className={cx("form-floating")}>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                        // console.log(fullname)
                      }}
                      type="email"
                      className={cx(
                        "form-control",
                        "input--infor",
                        "input-email",
                        {
                          valid: validateEmail(email) && email,
                          invalid: !validateEmail(email) || !email,
                        }
                      )}
                      id="floatingEmail"
                      name="email"
                      placeholder="Email"
                      value={email}
                    />
                    <label htmlFor="floatingEmail">Email</label>

                    {handleValidate(
                      email && validateEmail(email),
                      "Mời bạn kiểm tra Email trước khi đặt hàng",
                      !validateEmail(email) || !email
                        ? "Mời bạn nhâp đúng dạng Email"
                        : "Mời bạn nhập Email"
                    )}
                  </div>

                  <div className={cx("form-floating")}>
                    <input
                      onChange={(e) => {
                        setPhone(e.target.value);
                        // console.log(fullname)
                      }}
                      type="tel"
                      className={cx("form-control", "input--infor", {
                        valid: phone,
                        invalid: !phone,
                      })}
                      id="floatingPhone"
                      name="sodienthoai"
                      placeholder="Số điện thoại"
                      value={phone}
                    />
                    <label htmlFor="floatingPhone">Số điện thoại</label>

                    {handleValidate(
                      phone,
                      "Mời bạn kiểm tra số điện thoại trước khi đặt hàng",
                      "Mời bạn nhập số điện thoại"
                    )}
                  </div>
                </div>

                <div className={cx({ valid: recive, invalid: !recive })}>
                  <div
                    className={cx("article__buy--in--wed", "mb-3")}
                    id="article__buy--in--wed"
                  >
                    <div className={cx("buy--in--wed")}>
                      <input
                        className={cx("ship--type")}
                        type="radio"
                        name="recive"
                        id="ship--locate1"
                        value="Giao tận nơi"
                        onChange={(e) => {
                          setRecive(e.target.value);

                          // console.log(fullname)
                        }}
                      />
                      <label
                        className={cx("label--shipType")}
                        htmlFor="ship--locate1"
                      >
                        Giao tận nơi
                      </label>
                    </div>

                    {recive === "Giao tận nơi" ? (
                      <div
                        className={cx("article__customer--address")}
                        id="article__customer--address"
                      >
                        <div className={cx("form-floating", "mb-3")}>
                          <input
                            onChange={(e) => {
                              setAdress(e.target.value);
                              // console.log(fullname)
                            }}
                            type="text"
                            className={cx(
                              "form-control",
                              "input--infor",
                              "clearable",
                              {
                                valid: adress,
                                invalid: !adress,
                              }
                            )}
                            id="floatingAddress"
                            name="diachichitiet"
                            placeholder="Địa chỉ nhà"
                            value={adress}
                          />
                          <label htmlFor="floatingAddress">
                            Địa chỉ chi tiết
                          </label>

                          {handleValidate(
                            adress,
                            "Mời bạn kiểm tra địa chỉ trước khi đặt hàng",
                            "Mời bạn nhập địa chỉ"
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className={cx("article__buy--in--shop")}
                    id="article__buy--in--shop"
                  >
                    <div className={cx("buy--in--shop")}>
                      <input
                        onChange={(e) => {
                          setRecive(e.target.value);

                          // console.log(fullname)
                        }}
                        className={cx("ship--type")}
                        type="radio"
                        name="recive"
                        id="ship--locate2"
                        value="Nhận tại cửa hàng"
                      />
                      <label
                        className={cx("label--shipType")}
                        htmlFor="ship--locate2"
                      >
                        Nhận tại cửa hàng
                      </label>
                    </div>
                    <div
                      className={cx("article__shop--address")}
                      id="article__shop--address"
                    >
                      <h6>
                        Bạn vui lòng lại shop để lấy hàng, mặt hàng đang được
                        đóng gói giành cho bạn!
                      </h6>
                    </div>
                  </div>
                  {handleValidate(
                    recive,
                    "Mời bạn kiểm tra cách nhận hàng trước khi đặt hàng",
                    "Mời chọn cách nhận hàng"
                  )}
                </div>

                <div className={cx("article--customer-note", "mb-4")}>
                  <p className={cx("fw-bold")}>
                    <label htmlFor="customer--note">Ghi chú đơn hàng:</label>
                  </p>
                  <textarea
                    onChange={(e) => {
                      setNote(e.target.value);
                      // console.log(fullname)
                    }}
                    id="customer--note"
                    name="ghichu"
                    rows="5"
                    cols="72"
                    value={note}
                  ></textarea>
                </div>

                <h5 className={cx("tiltle__pay--method", "mt-3")}>
                  Phương thức thanh toán
                </h5>
                <div
                  className={cx(
                    { invalid: !payMethod, valid: payMethod },
                    "mb-3"
                  )}
                >
                  <div className={cx("mb-3")} id="article--payByCard">
                    <div className={cx("pay--by--card")}>
                      <input
                        onChange={(e) => {
                          setPayMethod(e.target.value);

                          // console.log(fullname)
                        }}
                        className={cx("pay--type")}
                        type="radio"
                        name="thanhtoan"
                        id="pay--method1"
                        value="Chuyển khoản vnpay"
                      />
                      <svg
                        className={cx("icon--credit-card")}
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                      >
                        <path
                          d="M2.9975 8.25C4.20063 8.25 5.17688 9.22625 5.17688 10.4294L5.1755 10.8377H16.038C17.5285 10.8377 18.2504 11.2585 19.3724 12.6802L19.5745 12.9415L21.7882 16.0146H41.6102C42.9302 16.0146 44 17.105 44 18.4511V34.2843C44 35.6304 42.9302 36.7207 41.6102 36.7207H15.3312C14.0112 36.7207 12.9429 35.6304 12.9429 34.2843L12.9415 27.0641H11.044C9.9055 27.0641 8.82063 26.5457 7.81275 25.6987C7.5845 25.5062 7.37138 25.3069 7.17338 25.1034L6.82963 24.7308L6.74713 24.6345H5.13012C4.92387 25.6245 4.04663 26.367 2.9975 26.367H2.17938C0.97625 26.367 0 25.3907 0 24.1876V10.4294C0 9.22625 0.97625 8.25 2.17938 8.25H2.9975V8.25ZM41.5195 17.3085H16.7296L20.8203 21.032C21.9024 22.0165 21.2809 23.3228 19.8935 23.9951C18.689 24.5795 17.2109 24.5974 16.0352 23.8686L15.8043 23.7133L14.234 22.2846V34.2196C14.234 34.8851 14.7661 35.4269 15.422 35.4269H41.5195C42.1754 35.4269 42.7061 34.8851 42.7061 34.2182V18.5158C42.7061 17.8503 42.1754 17.3085 41.5195 17.3085V17.3085ZM5.1755 23.3406H7.38375L7.62025 23.661L7.75913 23.8287L7.85537 23.9387C8.08912 24.2 8.35312 24.464 8.64325 24.7088C9.361 25.311 10.098 25.6891 10.8075 25.7593L11.0412 25.7702H12.9401V22.1568H12.0794C10.6494 22.1568 9.63462 21.6645 9.02825 20.8106L8.9045 20.6223C8.57587 20.0791 8.44525 19.5319 8.41775 18.9929L8.41225 18.7619H9.70475C9.70475 19.1606 9.78313 19.5745 10.0128 19.9526C10.329 20.4779 10.8859 20.8051 11.8167 20.856L12.078 20.8629H14.5943L16.621 22.7109C17.3539 23.2444 18.4456 23.2595 19.3297 22.8305C20.0172 22.4964 20.1657 22.1842 19.9499 21.989L15.5224 17.9602L15.5279 16.379V16.0146L20.2661 16.0174L18.6024 13.7101C17.5931 12.386 17.1875 12.1192 16.038 12.1192H5.1755V23.3406V23.3406ZM2.9975 9.34037H2.17938C1.62388 9.34037 1.166 9.75562 1.09863 10.2932L1.09037 10.4307V24.1863C1.09037 24.7418 1.50562 25.201 2.04325 25.2684L2.18075 25.2766H2.9975C3.553 25.2766 4.01088 24.8614 4.07825 24.3237L4.0865 24.1863V10.4294C4.0865 9.87388 3.67125 9.416 3.13363 9.34863L2.99612 9.34037H2.9975Z"
                          fill="#242424"
                        />
                        <path
                          d="M28.4707 32.838C32.0444 32.838 34.9415 29.9409 34.9415 26.3672C34.9415 22.7935 32.0444 19.8965 28.4707 19.8965C24.8971 19.8965 22 22.7935 22 26.3672C22 29.9409 24.8971 32.838 28.4707 32.838Z"
                          fill="#0D5CB6"
                        />
                        <path
                          d="M29.6916 26.1566L27.5686 25.6451C27.2524 25.5695 27.0324 25.3234 27.0324 25.0484C27.0324 24.7046 27.3624 24.4269 27.7694 24.4269H29.0963C29.3919 24.4269 29.6738 24.5052 29.9089 24.6496C30.0175 24.7142 30.1701 24.6936 30.2636 24.6139L30.6734 24.2674C30.7999 24.1615 30.7793 23.9882 30.6376 23.8961C30.1976 23.6115 29.6614 23.4561 29.0963 23.4561H29.0454V22.7274C29.0454 22.5954 28.9175 22.4854 28.7566 22.4854H28.1819C28.0238 22.4854 27.8945 22.594 27.8945 22.7274V23.4561H27.768C26.668 23.4561 25.7853 24.2536 25.8898 25.1996C25.964 25.872 26.5745 26.4165 27.3445 26.6021L29.3726 27.0902C29.6875 27.1659 29.9089 27.412 29.9089 27.687C29.9089 28.0307 29.5775 28.3085 29.1719 28.3085H27.845C27.5494 28.3085 27.2675 28.2315 27.031 28.0871C26.9238 28.0211 26.7725 28.0431 26.6776 28.1215L26.2679 28.468C26.1414 28.5739 26.162 28.7471 26.3023 28.8392C26.7436 29.1252 27.2799 29.2792 27.845 29.2792H27.8945V30.008C27.8945 30.1414 28.0238 30.25 28.1833 30.25H28.758C28.9161 30.25 29.0454 30.1414 29.0454 30.008V29.2792H29.0935C29.9144 29.2792 30.6885 28.8667 30.9525 28.2122C31.3183 27.313 30.6913 26.3986 29.6903 26.1566H29.6916Z"
                          fill="white"
                        />
                      </svg>
                      <label
                        className={cx("label--payType")}
                        htmlFor="pay--method2"
                      >
                        Chuyển khoản vnpay
                      </label>
                    </div>
                    <div
                      className={cx("infor--bank-card")}
                      id="infor--bank-card"
                    >
                      <ul>
                        <li className={cx("mb-3")}>
                          Thông tin tài khoản: STK: 01110001xxxxx. Chủ TK: Lê
                          Việt Nhựt. Ngân hàng Vietcombank PGD Ninh Kiều,TP. Cần
                          Thơ.
                        </li>
                        <li>
                          Quý khách thêm ghi vào chú nội dung chuyển tiền: "Số
                          điện thoại đặt hàng" hoặc "Mã số đơn hàng"
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={cx("mb-3")} id="article--payByMoney">
                    <div className={cx("pay--by--money")}>
                      <input
                        onChange={(e) => {
                          setPayMethod(e.target.value);

                          // console.log(fullname)
                        }}
                        className={cx("pay--type")}
                        type="radio"
                        name="thanhtoan"
                        id="pay--method2"
                        value="Thanh toán khi nhận hàng"
                      />
                      <svg
                        className={cx("icon--pay-money")}
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M4 0.5H36C37.933 0.5 39.5 2.067 39.5 4V36C39.5 37.933 37.933 39.5 36 39.5H4C2.067 39.5 0.5 37.933 0.5 36V4C0.5 2.067 2.067 0.5 4 0.5Z"
                          fill="white"
                          stroke="#D9D9D9"
                        />
                        <path
                          d="M10.197 9C9.55078 9 9.01738 9.53275 9.01738 10.1791V28.5044C9.01738 29.1507 9.55078 29.6835 10.197 29.6835H28.5213C29.1675 29.6835 29.7009 29.1507 29.7009 28.5044V10.1791C29.7009 9.53275 29.1675 9 28.5213 9H10.197Z"
                          fill="#E4A862"
                        />
                        <path
                          d="M12.9869 22.0051L26.0131 22.0051C26.1393 22.0051 26.2416 22.1074 26.2416 22.2335L26.2416 29.5263C26.2416 29.6525 26.1393 29.7548 26.0131 29.7548L12.9869 29.7548C12.8607 29.7548 12.7584 29.6525 12.7584 29.5263L12.7584 22.2336C12.7584 22.1073 12.8607 22.0051 12.9869 22.0051Z"
                          fill="#1C92D3"
                        />
                        <path
                          d="M25.1506 27.818C24.7456 27.9388 24.4257 28.2587 24.3048 28.6638C24.2886 28.7181 24.2397 28.7561 24.1829 28.7561L14.8171 28.7561C14.7603 28.7561 14.7114 28.7181 14.6952 28.6638C14.5744 28.2588 14.2545 27.9388 13.8494 27.818C13.795 27.8018 13.7571 27.7528 13.757 27.6961L13.757 24.0638C13.757 24.007 13.795 23.9581 13.8494 23.9419C14.2545 23.8211 14.5743 23.5012 14.6952 23.0961C14.7114 23.0417 14.7603 23.0038 14.817 23.0038L24.183 23.0038C24.2397 23.0038 24.2887 23.0417 24.3049 23.0961C24.4257 23.5011 24.7456 23.821 25.1506 23.9418C25.205 23.958 25.2429 24.007 25.2429 24.0637L25.2429 27.6961C25.2429 27.7528 25.205 27.8018 25.1506 27.818Z"
                          fill="#40C0F2"
                        />
                        <path
                          d="M19.5 23.9613C18.5859 23.9613 17.8449 24.7023 17.8449 25.6164C17.8449 26.5305 18.5859 27.2716 19.5 27.2716C20.4141 27.2716 21.1552 26.5305 21.1552 25.6164C21.1552 24.7023 20.4141 23.9613 19.5 23.9613Z"
                          fill="#1C92D3"
                        />
                        <path
                          d="M15.7832 9V13.9837C15.7832 14.0784 15.8211 14.1693 15.8883 14.236L16.9554 15.3058C17.0946 15.4456 17.3209 15.4456 17.4601 15.3058L18.2775 14.4884L19.0924 15.3058C19.2315 15.4456 19.4578 15.4456 19.597 15.3058L20.4118 14.4884L21.2293 15.3058C21.3685 15.4456 21.5948 15.4456 21.7339 15.3058L22.8011 14.236C22.8682 14.1693 22.9061 14.0784 22.9062 13.9837V9H15.7832Z"
                          fill="#FFDFB9"
                        />
                        <path
                          d="M27.961 25.0229L23.9707 25.0229C23.5109 25.0229 23.1381 25.2002 23.1381 25.66C23.0505 26.4724 24.7342 27.4343 25.9892 27.4343C26.5976 27.4343 27.2887 27.4343 27.6697 27.4341C27.8561 27.4341 28.0347 27.508 28.1682 27.6415L28.175 27.6483C28.3951 27.8685 28.4398 28.3395 28.2839 28.6089L26.6909 29.7455H26.0364L25.0182 29.7455L20.2182 29.7455C20.743 30.4027 23.2621 31.7334 23.4627 31.9887C23.6858 32.2726 24.0156 32.3752 24.375 32.4092L27.6651 32.7974C28.1394 32.8422 28.6158 32.74 29.0302 32.5049C29.9583 31.9784 31.6677 31.1148 32.4477 30.8716L35.1295 30.8716L35.1295 26.2286L33.8382 26.2286C33.5955 26.2286 33.3568 26.1673 33.1442 26.0503L31.3417 25.1559C30.7728 24.8776 30.1358 24.7687 29.5067 24.8422L27.961 25.0229Z"
                          fill="#FCD7C3"
                        />
                        <path
                          d="M29.5067 24.8423L27.961 25.0229L23.9708 25.0229C23.5109 25.0229 23.1382 25.2002 23.1382 25.66C23.1059 25.9586 23.3131 26.2774 23.6504 26.5613C24.1443 26.977 24.7761 27.1929 25.4217 27.1929L27.961 27.1929L29.5067 27.0122C30.1358 26.9387 30.7727 27.0476 31.3417 27.3259L33.1442 28.2203C33.3568 28.3373 33.5955 28.3987 33.8382 28.3987L35.1295 28.3987L35.1295 26.2287L33.8382 26.2287C33.5955 26.2287 33.3568 26.1673 33.1442 26.0503L31.3417 25.1559C30.7727 24.8776 30.1357 24.7688 29.5067 24.8423Z"
                          fill="#FFCDAC"
                        />
                        <path
                          d="M36.2489 25.8624L36.2489 31.2362C36.2489 31.4354 36.0874 31.5968 35.8883 31.5968L34.9426 31.5968C34.7434 31.5968 34.582 31.4354 34.582 31.2362L34.582 25.8623C34.582 25.6632 34.7434 25.5017 34.9426 25.5017L35.8883 25.5018C36.0874 25.5017 36.2489 25.6632 36.2489 25.8624Z"
                          fill="#464C50"
                        />
                        <path
                          d="M34.582 25.8624L34.582 27.685L36.2489 27.685L36.2489 25.8624C36.2489 25.6632 36.0875 25.5018 35.8883 25.5018L34.9427 25.5018C34.7435 25.5018 34.582 25.6632 34.582 25.8624Z"
                          fill="#33393A"
                        />
                      </svg>
                      <label
                        className={cx("label--payType")}
                        htmlFor="pay--method1"
                      >
                        Thanh toán khi nhận được hàng/mua tại shop
                      </label>
                    </div>
                  </div>

                  {handleValidate(
                    payMethod,
                    "Mời bạn kiểm tra cách thanh toán trước khi đặt hàng",
                    "Mời chọn cách thanh toán"
                  )}
                </div>

                <button
                  className={cx("btn", "btn-danger", "btn-comleteOddered")}
                >
                  Hoàn tất đơn hàng
                </button>
              </form>
            </div>
          </div>

          <div className={cx("col-5", "article--review-ordered")}>
            {itemInCart.map((item, index) => {
              return (
                <PayProduct
                  key={item.id_product + index}
                  item={item}
                ></PayProduct>
              );
            })}

            <hr />
            <div
              className={cx(
                "d-flex",
                "justify-content-between",
                "article--temporary-money"
              )}
            >
              <p className={cx("title--bill")}>Tạm tính</p>
              <p className={cx("color--money")}>{totalMoneyInCart}</p>
            </div>
            <div
              className={cx(
                "d-flex",
                "justify-content-between",
                "article--ship-charge"
              )}
            >
              <p className={cx("title--bill")}>Phí vận chuyển</p>
              <p className={cx("color--money")}>
                {totalMoneyInCart > 300000 ? 0 : 30000}
              </p>
            </div>
            <hr />
            <div className={cx("d-flex", "justify-content-between")}>
              <p className={cx("title--bill")}>Tổng tiền</p>
              <p className={cx("color--money")}>
                {totalMoneyInCart && totalMoneyInCart > 30000
                  ? totalMoneyInCart
                  : totalMoneyInCart + 30000}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Payment;
