import React from "react";
import classNames from "classnames/bind";
import styles from "./register.module.scss";

function Register() {
  const cx = classNames.bind(styles);
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
          <a href="/account/login"> Đăng nhập</a>
        </p>

        <div className={cx("alert", "alert-danger", "mt-3")}>Error</div>

        <div className={cx("alert", "alert-success")}>Susscess</div>

        <form className={cx("needs-validation")} id="signupForm"        >
          <div className={cx("list-group")}>
            <div className={cx("form-floating", "mb-4")}>
              <input
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
                type="text"
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
