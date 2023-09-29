import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { loginUser } from "../../apiRequset/account.api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        navigate("/");
      }
    } else {
      alert("Enter enough infor, please");
    }
  };
  return (
    <div className={cx("m-auto", "articleLogin")}>
      <h3 className={cx("title__login")}>Đăng nhập</h3>

      <form onSubmit={handleSubmitLogin} className={cx("needs-validation")}>
        <div className={cx("list-group")}>
          <div className={cx("form-floating", "mb-4")}>
            <input
              value={email}
              onChange={(e) => {
                handleOnChagneInput(e, setEmail);
              }}
              type="email"
              className={cx(
                "form-control",
                "size--input-login",
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
          </div>
          <div className={cx("form-floating", "mb-4")}>
            <input
              value={password}
              onChange={(e) => {
                handleOnChagneInput(e, setPassword);
              }}
              type="password"
              className={cx(
                "form-control",
                "size--input-login",
                "list-group-item",
                "list-group-item-action"
              )}
              id="floatingInputMatkhau"
              name="matkhau"
              required
            />
            <label className={cx("label--text")} htmlFor="floatingInputMatkhau">
              Mật khẩu
            </label>
          </div>
        </div>
        <p className={cx("policy")}>
          This site is protected by reCAPTCHA and the
          <a href="https://policies.google.com/privacy" rel="noopener">
            Google Privacy Policy
          </a>
          and
          <a href="https://policies.google.com/terms" rel="noopener">
            Terms of Service
          </a>
          apply.
        </p>
        <p className={cx("policy")}>
          Nếu bạn chưa có tài khoản, vui lòng tạo tài khoản!
          <a href="/account/register">Tạo tài khoản</a>
        </p>
        <div className={cx("articleBtnLogin")}>
          <button
            type="submit"
            className={cx("mt-2", "btn", "btn-danger", "btn-login")}
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
