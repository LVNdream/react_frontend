import React from "react";
import styles from "./Footer.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const cx = className.bind(styles);

  return (
    <footer className={cx("articleFooter", "container")}>
      <div className={cx("infor")}>
        <h4 className={cx("title")}>Về HOMESHOP</h4>
        <p className={cx("infor__ỉntroduce")}>
          Tủ quần áo vintage cho các chàng trai và cô gái
        </p>
        <img
          className={cx("infor__logo--footer")}
          src="https://theme.hstatic.net/1000296747/1000891809/14/footer_logobct_img.png?v=20"
          alt="loading"
        />
      </div>
      <div className={cx("location")}>
        <h4 className={cx("title")}>Địa chỉ liên hệ</h4>
        <ul className={cx("listfooter", "location__list")}>
          <li className={cx("listfooter__selectors")}>
            <strong>Địa chỉ: </strong> 10/20D, Nguyễn Trãi, P.Cái Khế, Q.Ninh
            Kiều, TP Cần Thơ
          </li>
          <li className={cx("listfooter__selectors")}>
            <strong>Điện thoại: </strong> 0817.637.376 - 0917.637.376
          </li>
          <li className={cx("listfooter__selectors")}>
            <strong>Email: </strong> nobitahome.vn@gmail.com
          </li>
        </ul>
      </div>
      <div className={cx("help")}>
        <h4 className={cx("title")}>Hỗ trợ khách hàng</h4>
        <ul className={cx("listfooter", "help__list")}>
          <li className={cx("listfooter__selectors")}>Tìm kiếm</li>
          <li className={cx("listfooter__selectors")}>Giới Thiệu</li>
        </ul>
      </div>
      <div className={cx("careclient")}>
        <h4 className={cx("title")}>Chăm sóc khách hàng</h4>
        <ul className={cx("listfooter", "careclient__list")}>
          <li className={cx("listfooter__selectors")}>
            <p className={cx("footer__numberphone")}>
              {/* <i className={cx("icons--number fa-solid fa-phone"></i> */}
              <FontAwesomeIcon
                className={cx("icons--number")}
                icon={faPhone}
              ></FontAwesomeIcon>
              <strong> 0917.637.376</strong>
            </p>
            <p className={cx("footer__email")}>
              {/* <i className={cx("icons--email fa-solid fa-envelope"></i> */}
              <FontAwesomeIcon
                className={cx("icons--number")}
                icon={faEnvelope}
              ></FontAwesomeIcon>
              nobitahome.vn@gmail.com
            </p>
          </li>
          <li className={cx("listfooter__selectors","d-flex","align-items-center")}>
            <strong>Follow Us</strong>
            <div className={cx("careclient__icons","ml-5")}>
              <div className={cx("iconFacebook")}>
                <a href="https://www.facebook.com/">
                  {/* <i className={cx("fa-brands fa-facebook-f"></i> */}
                  <FontAwesomeIcon
                    className={cx("icons--number")}
                    icon={faFacebookF}
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className={cx("iconInstagram")}>
                <a href="https://www.instagram.com/accounts/login/">
                  {/* <i className={cx("fa-brands fa-instagram"></i> */}
                  <FontAwesomeIcon
                    className={cx("icons--number")}
                    icon={faInstagram}
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
          </li>
        </ul>
        
      </div>
    </footer>
  );
}

export default Footer;
