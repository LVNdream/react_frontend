import axios from "axios";
// import { productsSlice } from "../page/Products/productsSlice";
export const getAllProduct = async (setProducts) => {
  try {
    const res = await axios.get(`http://localhost:3001/products/men/`);
    // console.log(res.data);
    setProducts(res.data);
    
  } catch (error) {
    console.log(error);
  }
};
export const getProductByCaterogy = async (caterogy,setProducts) => {
  try {
    console.log(caterogy)
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
export const getProductDetail = async (type,caterogy,id,setInforDetail) => {
    try {
      console.log(caterogy)
      const res = await axios
      .get(
        `http://localhost:3001/products/${type}/${caterogy}/${id}`
      )
      // console.log(res.data);
      setInforDetail(res.data);
      // dispatch(productsSlice.actions.setProductsList(res.data))
    } catch (error) {
      console.log(error);
    }
  };
  
