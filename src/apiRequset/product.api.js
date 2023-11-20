import axios from "axios";
// import { productsSlice } from "../page/Products/productsSlice";

// hàm trả về tất cả các sản phẩm để lấy thông tin yêu thích từ người dùng
export const getAllProduct = async (inforUser, setProducts) => {
  try {
    const res = await axios.get(`http://localhost:3001/products/men/`, {
      params: {
        id_user: inforUser?.id_user,
      },
    });
    // console.log(res.data);
    setProducts(res.data);
  } catch (error) {
    console.log(error);
  }
};

// hàm trả về tất cả các sản phẩm khi chưa đang nhập
export const getAllProduct_Nologin = async (setProducts) => {
  try {
    const res = await axios.get(`http://localhost:3001/products/men/`);
    // console.log(res.data);
    setProducts(res.data);
  } catch (error) {
    console.log(error);
  }
};

// hàm dùng để liệt kê các sản phẩm theo danh mục của người dùng tìm kiếm
export const getProductByCaterogy = async (caterogy, setProducts) => {
  try {
    console.log(caterogy);
    const res = await axios.get(
      `http://localhost:3001/products/men/${caterogy}`
    );
    // console.log(res.data);
    setProducts(res.data);
    // dispatch(productsSlice.actions.setProductsList(res.data))
  } catch (error) {
    console.log(error);
  }
};

// hàm để lấy chi tiết của một sản phẩm
export const getProductDetail = async (
  type,
  caterogy,
  id,
  setInforDetail,
  iduser
) => {
  try {

    const res = await axios.get(
      `http://localhost:3001/products/${type}/${caterogy}/${id}/${iduser}`,
    );
    // console.log(res.data);
    setInforDetail(res.data);
    // dispatch(productsSlice.actions.setProductsList(res.data))
  } catch (error) {
    console.log(error);
  }
};
