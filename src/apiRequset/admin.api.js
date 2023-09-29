import axios from "axios";
// import { productsSlice } from "../page/Products/productsSlice";
export const getTypeProduct = async (accessToken) => {
  try {
    const res = await axios.post("http://localhost:3001/admin/gettypeproduct", {
      accessToken,
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getCaterogyProduct = async (type_product, accessToken) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/admin/getcaterogyproduct",
      { type_product, accessToken }
    );
    //   console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (inforProduct) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/admin/addproduct",
      inforProduct
    );

    return res.data;

    //   console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
