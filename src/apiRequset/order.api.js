import axios from "axios";
// import { productsSlice } from "../page/Products/productsSlice";
export const addOrder = async (infor) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/payment/addorder",
      infor
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const clientGetAllOrder = async (email, accessToken) => {
  try {
    const res = await axios.post(`http://localhost:3001/order/clientgetorder`, {
      email_user: email,
      accessToken: accessToken,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrder = async (accessToken) => {
  try {
    const res = await axios.post(`http://localhost:3001/admin/getorder`, {
      accessToken: accessToken,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
