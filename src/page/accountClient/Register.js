import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./register.module.scss";
import { registerUser } from "../../apiRequset/account.api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const cx = classNames.bind(styles);

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChangeInput = (e, setInput) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };
  const inforRegister = {
    lastname_user: lastname,
    firstname_user: firstname,
    phone_user: phone,
    gender_user: gender,
    dateofbirth_user: dateofbirth,
    email_user: email,
    password_user: password,
  };
  // console.log(inforRegister);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      lastname &&
      firstname &&
      phone &&
      gender &&
      dateofbirth &&
      email &&
      password
    ) {
      console.log(inforRegister);
      const resultRegister = await registerUser(inforRegister);

      Swal.fire({
        position: "top",
        icon: "success",
        title: resultRegister,
        showConfirmButton: false,
        timer: 1500,
      });
      // alert(resultRegister);
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Vui lòng điền đủ thông tin để đăng kí",
        showConfirmButton: false,
        timer: 1500,
      });
      // alert("Vui lòng điền đủ thông tin để đăng kí");
    }
  };
  return (
    <>
      {/* <link rel="stylesheet" href="/css/accountRegister.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.min.css"
        integrity="sha512-f0tzWhCwVFS3WeYaofoLWkTP62ObhewQ1EZn65oSYDZUg1+CyywGKkWzm8BxaJj5HGKI72PnMH9jYyIFz+GH7g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" /> */}

      <div className={cx("article__formsignup")}>
        <h3 className={cx("title__signup")}>Tạo tài khoản</h3>
        <p className={cx("policy")}>
          Nếu bạn đã có tài khoản, vui lòng đăng nhập!
          <Link to={"/client/login"}> Đăng nhập</Link>
        </p>

        <form
          onSubmit={handleSubmit}
          className={cx("needs-validation", "mt-4")}
          id="signupForm"
        >
          <div className={cx("list-group")}>
            <div className={cx("form-floating", "mb-4")}>
              <input
                onChange={(e) => {
                  handleOnChangeInput(e, setLastname);
                }}
                value={lastname}
                type="text"
                className={cx(
                  "form-control",
                  "size--input-signup",
                  "list-group-item",
                  "list-group-item-action"
                )}
                id="floatingInputHo"
                name="ho"
                required
              />
              <label className={cx("label--text")} htmlFor="floatingInputHo">
                Họ
              </label>
              <div className={cx("valid-feedback")}>
                Bạn đã nhập họ, vui lòng xem lại thông tin trước khi submit!
              </div>
              <div className={cx("invalid-feedback")}>
                Bạn vui lòng nhập họ!
              </div>
            </div>
            <div className={cx("form-floating", "mb-4")}>
              <input
                value={firstname}
                onChange={(e) => {
                  handleOnChangeInput(e, setFirstname);
                }}
                type="text"
                className={cx(
                  "form-control",
                  "size--input-signup",
                  "list-group-item",
                  "list-group-item-action"
                )}
                id="floatingInputTen"
                name="ten"
                required
              />
              <label className={cx("label--text")} htmlFor="floatingInputTen">
                Tên
              </label>
              <div className={cx("valid-feedback")}>
                Bạn đã nhập tên, vui lòng xem lại thông tin trước khi submit!
              </div>
              <div className={cx("invalid-feedback")}>
                Bạn vui lòng nhập tên!
              </div>
            </div>
            <div className={cx("form-floating", "mb-4")}>
              <input
                value={phone}
                onChange={(e) => {
                  handleOnChangeInput(e, setPhone);
                }}
                type="text"
                className={cx(
                  "form-control",
                  "size--input-signup",
                  "list-group-item",
                  "list-group-item-action"
                )}
                id="floatingInputPhone"
                name="sodienthoai"
                required
              />
              <label className={cx("label--text")} htmlFor="floatingInputPhone">
                Số điện thoại
              </label>
              <div className={cx("valid-feedback")}>
                Bạn đã nhập số điện thoại, vui lòng xem lại thông tin trước khi
                submit!
              </div>
              <div className={cx("invalid-feedback")}>
                Bạn vui lòng nhập số điện thoại!
              </div>
            </div>
            <div className={cx("mb-4", "d-flex")}>
              <div className={cx("")}>
                <input
                  onChange={(e) => {
                    handleOnChangeInput(e, setGender);
                  }}
                  className={cx("form-check-input")}
                  type="radio"
                  name="gioitinh"
                  id="gender1"
                  value="Nam"
                  required
                />
                <label className={cx("form-check-label")} htmlFor="gender1">
                  Nam
                </label>
              </div>
              <div className={cx("")}>
                <input
                  onChange={(e) => {
                    handleOnChangeInput(e, setGender);
                  }}
                  className={cx("form-check-input", "form-check-input-female")}
                  type="radio"
                  name="gioitinh"
                  id="gender2"
                  value="Nu"
                  required
                />
                <label className={cx("form-check-label")} htmlFor="gender2">
                  Nữ
                </label>
              </div>
              <div className={cx("invalid-feedback")}>
                Bạn vui lòng chọn giới tính!
              </div>
            </div>
            <div className={cx("form-floating", "mb-4")}>
              <input
                onChange={(e) => {
                  handleOnChangeInput(e, setDateofbirth);
                }}
                value={dateofbirth}
                type="date"
                className={cx(
                  "form-control",
                  "size--input-signup",
                  "list-group-item",
                  "list-group-item-action"
                )}
                id="inputDOB"
                name="ngaysinh"
                required
              />
              <label className={cx("label--text")} htmlFor="inputDOB">
                Ngày sinh: dd/mm/yyyy
              </label>
              <div className={cx("valid-feedback")}>
                Bạn đã nhập ngày sinh, vui lòng xem lại thông tin trước khi
                submit!
              </div>
              <div className={cx("invalid-feedback")}>
                Bạn vui lòng nhập ngày sinh!
              </div>
            </div>
            <div className={cx("form-floating", "mb-4")}>
              <input
                value={email}
                onChange={(e) => {
                  handleOnChangeInput(e, setEmail);
                }}
                type="email"
                className={cx(
                  "form-control",
                  "size--input-signup",
                  "list-group-item",
                  "list-group-item-action"
                )}
                id="floatingInputEmail"
                name="email"
                required
              />
              <label className={cx("label--text")} htmlFor="floatingInputEmail">
                Email
              </label>
              <div className={cx("valid-feedback")}>
                Bạn đã nhập Email, vui lòng xem lại thông tin trước khi submit!
              </div>
              <div className={cx("invalid-feedback")}>
                Bạn vui lòng nhập Email!
              </div>
            </div>
            <div className={cx("form-floating", "mb-4")}>
              <input
                value={password}
                onChange={(e) => {
                  handleOnChangeInput(e, setPassword);
                }}
                type="password"
                className={cx(
                  "form-control",
                  "size--input-signup",
                  "list-group-item",
                  "list-group-item-action"
                )}
                id="floatingInputMatkhau"
                name="matkhau"
                required
              />
              <label
                className={cx("label--text")}
                htmlFor="floatingInputMatkhau"
              >
                Mật khẩu
              </label>
              <div className={cx("valid-feedback")}>
                Bạn đã nhập mật khẩu, vui lòng xem lại thông tin trước khi
                submit!
              </div>
              <div className={cx("invalid-feedback")}>
                Bạn vui lòng nhập mật khẩu!
              </div>
            </div>
          </div>
          <div className={cx("articleBtnRegister")}>
            <button
              type="submit"
              className={cx("btn", "btn-danger", "btn-signup")}
            >
              Đăng kí
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
