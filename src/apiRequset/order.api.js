import axios from "axios";
// import { productsSlice } from "../page/Products/productsSlice";
export const addOrder = async (infor) => {
  try {
    const res = await axios.post(
      "http://localhost:3001/payment/addorder",
      infor
    );
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
// export const getProductByCaterogy = async (caterogy,setProducts) => {
//   try {
//     console.log(caterogy)
//     const res = await axios.get(
//       `http://localhost:3001/products/men/${caterogy}`
//     );
//     // console.log(res.data);
//     setProducts(res.data);
//     // dispatch(productsSlice.actions.setProductsList(res.data))
//   } catch (error) {
//     console.log(error);
//   }
// };
