import Home from "../page/Home";
import LayoutCilent from "../components/layouts/layoutClient";
import Products from "../page/Products";
import ProductDetail from "../page/Products/productDetail/ProductDetail";
import Register from "../page/accountClient/Register";
import Cart from "../page/Cart/Cart";
import Payment from "../page/Payment/Payment";
// import LayoutAdmin from "../components/layouts/layoutAdmin";
import AdminHome from "../page/admin/AdminHome";
import Login from "../page/accountClient/Login";
import CheckOrder from "../page/MyOrder/CheckOrder";
import AddProduct from "../page/CustomizeProduct/AddProduct";
import UpdateProduct from "../page/CustomizeProduct/UpdateProduct";

const publicRoutes = [
  { path: "/", component: Home, layout: LayoutCilent },
  { path: "/products/men", component: Products, layout: LayoutCilent },
  {
    path: "/products/men/:caterogy",
    component: Products,
    layout: LayoutCilent,
  },
  {
    path: "/products/:type/:caterogy/:id",
    component: ProductDetail,
    layout: LayoutCilent,
  },
  { path: "/client/register", component: Register, layout: LayoutCilent },
  { path: "/cart", component: Cart, layout: LayoutCilent },
  { path: "/payment", component: Payment, layout: LayoutCilent },
  { path: "/client/login", component: Login, layout: LayoutCilent },

  // admin
  { path: "/admin", component: AdminHome, layout: LayoutCilent },
  { path: "/admin/addproduct", component: AddProduct, layout: LayoutCilent },
  { path: "/admin/updateproduct", component: UpdateProduct, layout: LayoutCilent },


// 
// 
  { path: "/client/checkorder", component: CheckOrder, layout: LayoutCilent },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
