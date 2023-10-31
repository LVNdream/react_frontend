import axios from "axios";
// import { productsSlice } from "../page/Products/productsSlice";

// hàm để thêm hóa đơn vào trong database
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

// / hàm để trả về tất cả các hóa đơn cho khách hàng
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

// hàm để trả về tất cả các hóa đơn cho admin
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

// hàm để trả về các hóa đơn cho khách hàng, đó là các hóa đơn đã giao thành công
export const clientGetAllOrderSuccess = async (email, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/order/clientgetordersuccess`,
      {
        email_user: email,
        accessToken: accessToken,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
