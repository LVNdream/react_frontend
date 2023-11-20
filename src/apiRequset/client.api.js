import axios from "axios";
// import { productsSlice } from "../page/Products/productsSlice";

// hàm để thêm sản phẩm vào yêu thích
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

// hàm trả về sản phẩm yêu thích theo yêu cầu người dùng
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
// hàm để xóa khỏi sản phẩm khỏi yêu thích
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

// hàm để xóa tất cả các sản phẩm yêu thích
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

// hàm để cho khách hàng hủy hóa đơn
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

// hàm để upload hình ảnh lên comments
export const clientUploadImgCmt = async (data) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/upload/image`,
      data,
      {}
    );
    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// ham de cap nhat cai comment cua client
export const clientUpdateComment = async (entity, accessToken) => {
  try {
    // console.log("123123")
    const res = await axios.post(
      `http://localhost:3001/client/updatecomments`,
      {
        entity,
        accessToken: accessToken,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};


// ham de xoa CMT 
export const clientDeleteComment = async (entity, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/client/deletecomments`,
      {
        entity,
        accessToken: accessToken,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

