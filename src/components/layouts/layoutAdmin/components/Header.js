import styles from "./Header.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DropdownAdmin from "./DropdownAdmin";

const cx = className.bind(styles);




function Header() {

  
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

          <div className={cx("float-end")}>
            <DropdownAdmin></DropdownAdmin>
            {/* <div className={cx("dropdown")}>
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
                  <Link
                    className={cx("dropdown-item")}
                    to={"/admin/showorders"}
                  >
                    Cập nhật hóa đơn
                  </Link>
                </li>
                <li>
                  <Link
                    className={cx("dropdown-item")}
                    to={"/admin/updateproduct"}
                  >
                    Cập nhật thông tin sản phẩm
                  </Link>
                </li>
                <li>
                  <Link
                    className={cx("dropdown-item")}
                    to={"/admin/addproduct"}
                  >
                    Thêm sản phẩm
                  </Link>
                </li>
                <li>
                  <hr className={cx("dropdown-divider")} />
                </li>
                <li>
                  <button
                    type="submit"
                    className={cx("btn", "btn-light", "form-control")}
                  >
                    Đăng xuất
                  </button>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
