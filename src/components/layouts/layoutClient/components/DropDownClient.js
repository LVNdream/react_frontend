import React from "react";

import styles from "./Header.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie';

const cx = className.bind(styles);
function DropDownClient(props) {
  const dispatch = useDispatch();
  
  const accessToken = Cookies.get('accessToken')

  const handleClicklogout = () => {
    props.handleLogout(accessToken,dispatch);
  };

  return (
    <>
      <div className={cx("dropdown")}>
        <button
          className={cx("btn", "btn-light", "dropdown-toggle")}
          type="button"
          id={cx("dropdownMenuButton2")}
          data-bs-toggle={"dropdown"}
          aria-expanded={false}
        >
          <FontAwesomeIcon
            className={cx("iconUser--color")}
            icon={faUser}
          ></FontAwesomeIcon>
        </button>
        <ul
          className={cx("dropdown-menu", "dropdown-menu-dark")}
          aria-labelledby={"dropdownMenuButton2"}
        >
          <li>
            <Link className={cx("dropdown-item")} to={""}>
              Kiểm tra đơn hàng
            </Link>
          </li>
          <li>
            <Link className={cx("dropdown-item")} to={""}>
              Xem sản phẩm yêu thích
            </Link>
          </li>
          <li>
            <Link className={cx("dropdown-item")} to={""}>
              Lịch sử mua hàng
            </Link>
          </li>
          <li>
            <hr className={cx("dropdown-divider")} />
          </li>
          <li>
            <div
              onClick={handleClicklogout}
              className={cx("btn", "btn-light", "form-control")}
            >
              Đăng xuất
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropDownClient;
