import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./modalupdate.module.scss";


function UpdateQuantity(props) {
  const cx = classnames.bind(styles);
  const { id_size, color, quantity_product, id_product } = props.data;
  const [quantityUpdate, setQuantityupdate] = useState(quantity_product);

  const entityUpdate = {
    id_product,
    id_size,
    color,
    quantity_product: quantityUpdate,
  };
  const handleClickUpdateQuantityPD = async () => {
    props.handleSubmitUpdateQuantityProduct(entityUpdate);
  };

  return (
    <div className={cx("row")}>
      <div className={cx("row", "col-11")}>
        <div className={cx("mb-2", "col-4")}>
          <select className={cx("form-select")} disabled value={id_size}>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className={cx("mb-2", "col-4")}>
          <input
            disabled
            value={color}
            required
            type="text"
            className={cx("form-control")}
          />
        </div>

        <div className={cx("mb-2", "col-4")}>
          <input
            value={quantityUpdate}
            onChange={(e) => {
              props.handleOnChangeInpuInfor(e, setQuantityupdate);
            }}
            required
            type="text"
            className={cx("form-control")}
          />
        </div>
      </div>

      <div className={cx("mb-2", "col-1", "aticleBtnUpDate")}>
        <div
          onClick={handleClickUpdateQuantityPD}
          className={cx("btn", "btn-sm", "btn-warning")}
        >
          Update
        </div>
      </div>
    </div>
  );
}

export default UpdateQuantity;
