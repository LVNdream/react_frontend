import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./modalupdate.module.scss";

function AddColorAndSize(props) {
  const cx = classnames.bind(styles);
  const { id_product } = props;
  // console.log(id_product);

  const [dataColor, setDataColor] = useState([
    {
      sizeColor: [
        { id_product, id_size: "S", quantity_product: "" },
        { id_product, id_size: "M", quantity_product: "" },
        { id_product, id_size: "L", quantity_product: "" },
        { id_product, id_size: "XL", quantity_product: "" },
      ],
      color: "",
    },
  ]);

  const handleOnchangeInputColor = (e, i) => {
    let value = e.target.value;
    let cp = [...dataColor];
    cp[i].color = value;
    setDataColor(cp);
  };
  const handleClickAddColorAndSize = async () => {
    // Xử lí add chi tiết color
    let detailColor = [];
    dataColor.forEach((data, index) => {
      const detail = data.sizeColor.map((dataSize) => {
        return {
          id_product: dataSize.id_product,
          id_size: dataSize.id_size,
          color: data.color,
          quantity_product: dataSize.quantity_product,
        };
      });
      detailColor.push(...detail);
    });

    detailColor = [...detailColor];
    const result = await props.handleSubmitAddColorAndSize(detailColor);
    if (result) {
      setDataColor([
        {
          sizeColor: [
            { id_product, id_size: "S", quantity_product: "" },
            { id_product, id_size: "M", quantity_product: "" },
            { id_product, id_size: "L", quantity_product: "" },
            { id_product, id_size: "XL", quantity_product: "" },
          ],
          color: "",
        },
      ]);
    }
  };
  const handleOnchangeInputQuantityAdd = (e, i, i1) => {
    let value = e.target.value;
    let cp = [...dataColor];
    cp[i].sizeColor[i1].quantity_product = value;
    setDataColor(cp);
  };

  const handleAddColor = () => {
    const cp = [
      ...dataColor,
      {
        sizeColor: [
          { id_product, id_size: "S", quantity_product: "" },
          { id_product, id_size: "M", quantity_product: "" },
          { id_product, id_size: "L", quantity_product: "" },
          { id_product, id_size: "XL", quantity_product: "" },
        ],
        color: "",
      },
    ];
    setDataColor(cp);
  };
  const handleDeCreaseColor = () => {
    // console.log(123123);
    const cp = [...dataColor];
    if (cp.length > 1) {
      cp.pop();
      setDataColor(cp);
    }
  };
  return (
    <>
      <div>
        <div
          onClick={handleAddColor}
          className={cx("btn", "btn-primary", "btn-sm")}
        >
          +
        </div>

        <div
          onClick={handleDeCreaseColor}
          className={cx("btn", "btn-primary", "btn-sm", "ms-2")}
        >
          -
        </div>

        {dataColor
          ? dataColor.map((data, i) => {
              // console.log(data.id_size);
              return (
                <div key={i} className={cx("row")}>
                  <div className={cx("row")}>
                    <div className="col-4">Size</div>
                    <div className="col-4">Color</div>

                    <div className="col-4">Quantity</div>
                  </div>
                  {data.sizeColor
                    ? data.sizeColor.map((detail, i1) => {
                        return (
                          <div key={i1} className={cx("row")}>
                            <div className={cx("mb-3", "col-4")}>
                              <select
                                className={cx("form-select")}
                                value={detail.id_size}
                                disabled
                              >
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                              </select>
                            </div>
                            <div className={cx("mb-3", "col-4")}>
                              <input
                                value={data.color}
                                onChange={(e) => {
                                  handleOnchangeInputColor(e, i);
                                }}
                                required
                                type="text"
                                className={cx("form-control")}
                              />
                            </div>
                            <div className={cx("mb-3", "col-4")}>
                              <input
                                value={detail.quantity_product}
                                onChange={(e) => {
                                  handleOnchangeInputQuantityAdd(e, i, i1);
                                }}
                                required
                                type="text"
                                className={cx("form-control")}
                              />
                            </div>
                          </div>
                        );
                      })
                    : "Error Size"}
                </div>
              );
            })
          : ""}
      </div>
      <div
        onClick={handleClickAddColorAndSize}
        className={cx("btn", "btn-primary", "btn-sm")}
      >
        Add
      </div>
    </>
  );
}

export default AddColorAndSize;
