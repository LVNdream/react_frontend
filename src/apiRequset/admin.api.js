import axios from "axios";
import Swal from "sweetalert2";
// import { productsSlice } from "../page/Products/productsSlice";

// hàm này dùng để tra về các kiểu sản phẩm là men hay women
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

// hàm này để trả về danh muc sản phẩm của thời trang nam hay nữ
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
        position: "top-end",
        icon: "error",
        title: "You're not authenticated",
        showConfirmButton: false,
        timer: 1500,
      });
      // alert("You're not authenticated");
      return;
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// hàm này để thêm sản phẩm mới vào database
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

// hàm này để cập nhật số lượng các sản phẩm
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

// hàm này để thêm chi tiết của sản phẩm
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

// hàm này để thêm sản phẩm vào bảng đã xóa
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

// hàm trả về các sản phẩm đã xóa
export const getProductDeleted = async (accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/getdeletedroduct`,
      {
        accessToken,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// hàm này dùng để cập nhật trạng thái các sản phẩm đã xóa
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

// hàm trả về các hóa đơn dducjocjl lọc trong giai đoạn ngày
export const getOrderFilterByDate = async (filter, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/getorderfilterbydate`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// filter date////

// hàm lọc theo ngày và có chứa email
export const getOrderFilterByDate_Email = async (filter, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/getorderfilterbydate/email`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// hàm lọc the ngày và có chứa trạng thái đơn hàng
export const getOrderFilterByDate_TypeOrder = async (filter, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/getorderfilterbydate/typeorder`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// hàm tọc theo ngày và có chứa trạng thái và email
export const getOrderFilterByDate_TypeOrder_Email = async (
  filter,
  accessToken
) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/getorderfilterbydate/typeorderandemail`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// filter by year

// hàm lọc hóa đơn theo năm
export const getOrderFilterByDate_Year = async (filter, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/getorderfilterbydate/year`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// hàm lọc hóa đơn theo năm có chứa emaiil
//
export const getOrderFilterByDate_Year_Email = async (filter, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/getorderfilterbydate/yearemail`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// hàm lọc hóa đơn theo năm có chứa trạng thái
export const getOrderFilterByDate_Year_TypeOrder = async (
  filter,
  accessToken
) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/getorderfilterbydate/yeartypeorder`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// hàm lọc hóa đơn có chưa email và trang thái
export const getOrderFilterByDate_Year_TypeOrder_Email = async (
  filter,
  accessToken
) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/getorderfilterbydate/yeartypeorderandemail`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// thống kê doanh thu theo ngày Date

export const revenueByDate = async (filter, accessToken) => {
  try {
    const res = await axios.post(`http://localhost:3001/admin/revenue/date`, {
      accessToken,
      filter,
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// revenue theo năm
export const revenueByYear = async (filter, accessToken) => {
  try {
    const res = await axios.post(`http://localhost:3001/admin/revenue/year`, {
      accessToken,
      filter,
    });
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// thong ke cac san pham da ban
export const sanphamdaban = async (filter, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/productedtotal/date`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

//thống kê sản phẩm đã bán thoe từng loại
export const sanphamdabanchitiet = async (filter, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/productedtotal/dabanchitiet`,
      {
        accessToken,
        filter,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// ham de khoi phuc lai san pham
export const restoreProduct = async (entity, accessToken) => {
  try {
    const res = await axios.post(
      `http://localhost:3001/admin/restoreroduct`,
      {
        accessToken,
        entity,
      }
    );
    // console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
