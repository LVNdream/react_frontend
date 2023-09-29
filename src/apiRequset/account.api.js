import axios from "axios";
import { userSlice } from "../page/accountClient/userSlice";
import Cookies from "js-cookie";
// import { productsSlice } from "../page/Products/productsSlice";
export const registerUser = async (entity) => {
  try {
    const res = await axios.post(`http://localhost:3001/auth/register`, entity);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (entity, dispatch) => {
  try {
    let isloginSuccess = false;
    const res = await axios.post(`http://localhost:3001/auth/login`, entity);
    if (res.data.isSuccess) {
      var now = new Date();
      var time = now.getTime();
      var expireTime = time + 1000 * 24 * 3600 * 2;
      now.setTime(expireTime);
      document.cookie = `accessToken="${
        res.data.accessToken
      }";expires=" + ${now.toUTCString()} + ";path=/`;
      document.cookie = `refreshToken="${
        res.data.refreshToken
      }";expires=" + ${now.toUTCString()} + ";path=/`;
      // console.log(res.data.user_temp);
      dispatch(userSlice.actions.addUser(res.data.user_temp));
      alert("Login Success!!!");
      isloginSuccess = true;
      return isloginSuccess;
    } else {
      alert(res.data);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const logoutUser = async (accessToken, dispatch) => {
  try {
    const entity = {
      accessToken: accessToken,
    };
    // console.log(entity);
    const res = await axios.post(`http://localhost:3001/auth/logout`, entity);
    if (res.data.isError && res.data.isError === true) {
      alert(res.data.mess);
    } else {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      dispatch(userSlice.actions.clearUser());
      alert(res.data);
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const checkAdmin = (inforUser, navigate) => {
  let isAdmin = false;
  if (inforUser !== null && inforUser.authorization === 0) {
    return (isAdmin = true);
  } else {
    alert("Bạn phải đăng nhập với tư cách là Admin để vào trang!");
    navigate("/client/login");
    return (isAdmin = false);
  }
};
// export const getProductDetail = async (type,caterogy,id,setInforDetail) => {
//     try {
//       console.log(caterogy)
//       const res = await axios
//       .get(
//         `http://localhost:3001/products/${type}/${caterogy}/${id}`
//       )
//       // console.log(res.data);
//       setInforDetail(res.data);
//       // dispatch(productsSlice.actions.setProductsList(res.data))
//     } catch (error) {
//       console.log(error);
//     }
//   };
