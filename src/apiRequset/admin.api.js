import axios from "axios";
import Swal from "sweetalert2";
// import { productsSlice } from "../page/Products/productsSlice";
export const getTypeProduct = async (accessToken) => {
  try {
    const res = await axios.post("http://localhost:3001/admin/gettypeproduct", {
      accessToken,
    });
    if (res.data.isErrorLoginAd) {


      Swal.fire({
        position: "top",
        icon: "error",
        title: "You're not authenticated not admin",
        showConfirmButton: false,
        timer: 1500,
      });
      // alert("You're not authenticated not admin");
      return;
    }
    if (res.data.isErrorLogin) {
      // alert("You're not authenticated");
      Swal.fire({
        position: "top",
        icon: "error",
        title: "You're not authenticated",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
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
    if (res.data.isErrorLoginAd) {
      alert("You're not authenticated not admin");
      return;
    }
    if (res.data.isErrorLogin) {

      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: "You're not authenticated",
        showConfirmButton: false,
        timer: 1500
      })
      // alert("You're not authenticated");
      return;
    }
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

export const updateQuantity = async (inforUpdate, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/updateproductquantity`,
      { inforUpdate, accessToken }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProductDetail = async (inforProduct, accessToken) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/admin/addproduct/productdetail",
      { inforProduct, accessToken }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateProductDetail = async (inforProduct, accessToken) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/admin/updateproduct/productdetail",
      { inforProduct, accessToken }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProductDeleted = async (inforProduct, accessToken) => {
  try {
    const res = await axios.post("http://localhost:3001/admin/deletedroduct", {
      inforProduct,
      accessToken,
    });

    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDeleted = async (accessToken) => {
  try {
    const res = await axios.post(`http://localhost:3001/admin/getdeletedroduct`, {
      accessToken,
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateOrderStatus = async (inforUpdate, accessToken) => {
  try {
    const res = await axios.post("http://localhost:3001/admin/updatestatus", {
      inforUpdate,
      accessToken,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
