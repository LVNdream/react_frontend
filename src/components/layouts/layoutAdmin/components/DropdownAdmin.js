import React from "react";

import styles from "./Header.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function DropdownAdmin() {
  const cx = className.bind(styles);
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
            icon={faUserSecret}
          ></FontAwesomeIcon>
        </button>
        <ul
          className={cx("dropdown-menu", "dropdown-menu-dark")}
          aria-labelledby={"dropdownMenuButton2"}
        >
          <li>
            <Link className={cx("dropdown-item")} to={"/admin"}>
              Cập nhật hóa đơn
            </Link>
          </li>
          <li>
            <Link className={cx("dropdown-item")} to={"/admin/updateproduct"}>
              Cập nhật thông tin sản phẩm
            </Link>
          </li>
          <li>
            <Link className={cx("dropdown-item")} to={"/admin/addproduct"}>
              Thêm sản phẩm
            </Link>
          </li>
          <li>
            <hr className={cx("dropdown-divider")} />
          </li>
          <li>
            <div className={cx("btn", "btn-light", "form-control")}>
              Đăng xuất
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropdownAdmin;