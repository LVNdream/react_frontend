import axios from "axios";
// import { productsSlice } from "../page/Products/productsSlice";

export const addProductFavorite = async (inforProductFVR, accessToken) => {
  try {
    const res = await axios.post("http://localhost:3001/client/addfavorite", {
      inforProductFVR,
      accessToken,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const clientGetListProductFVRbyUser = async (id_user, accessToken) => {
  try {
    const res = await axios.post(`http://localhost:3001/client/getfavorite`, {
      id_user: id_user,
      accessToken: accessToken,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const clientDeleteFVRProduct = async (
  id_user,
  accessToken,
  id_product
) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/client/deletefavorite`,
      {
        id_user: id_user,
        accessToken: accessToken,
        id_product: id_product,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const clientDeleteAllFVRProduct = async (id_user, accessToken) => {
  try {
    // console.log("123123")
    const res = await axios.post(
      `http://localhost:3001/client/deleteallfavorite`,
      {
        id_user: id_user,
        accessToken: accessToken,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const clientDeleteOrder = async (inforDelete, accessToken) => {
  try {
    // console.log("123123")
    const res = await axios.post(`http://localhost:3001/client/deleteorder`, {
      inforDelete,
      accessToken: accessToken,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

