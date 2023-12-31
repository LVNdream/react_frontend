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
import ProductDeleted from "../page/CustomizeProduct/ProductDeleted";
import FavoriteProduct from "../page/FavoriteProduct/FavoriteProduct";
import EvalauatePage from "../page/evaluate/EvalauatePage";
import ThongKeDonHang from "../page/thongke/ThongKeDonHang";
import ThongKeDoanhThu from "../page/thongke/ThongKeDoanhThu";
import ThongKeSanPham from "../page/thongke/ThongKeSanPham";

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
  { path: "/payment/:status", component: Payment, layout: LayoutCilent },
  { path: "/client/login", component: Login, layout: LayoutCilent },

  // admin
  { path: "/admin", component: AdminHome, layout: LayoutCilent },
  { path: "/admin/addproduct", component: AddProduct, layout: LayoutCilent },
  { path: "/admin/thongkedonhang", component: ThongKeDonHang, layout: LayoutCilent },
  { path: "/admin/thongkedoanhthu", component: ThongKeDoanhThu, layout: LayoutCilent },
  { path: "/admin/thongkesanpham", component: ThongKeSanPham, layout: LayoutCilent },



  {
    path: "/admin/updateproduct",
    component: UpdateProduct,
    layout: LayoutCilent,
  },
  {
    path: "/admin/productdeleted",
    component: ProductDeleted,
    layout: LayoutCilent,
  },

  //
  //client
  {
    path: "/client/favoriteproduct",
    component: FavoriteProduct,
    layout: LayoutCilent,
  },
  { path: "/client/checkorder", component: CheckOrder, layout: LayoutCilent },
  {
    path: "/client/usedproduct",
    component: EvalauatePage,
    layout: LayoutCilent,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
