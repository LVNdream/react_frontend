import Home from "../page/Home";
import LayoutCilent from "../components/layouts/layoutClient";
import Products from "../page/Products";
import ProductDetail from "../page/Products/productDetail/ProductDetail";
import Register from "../page/accountClient/Register";
import Cart from "../page/Cart/Cart";
import Payment from "../page/Payment/Payment";
import LayoutAdmin from "../components/layouts/layoutAdmin";
import AdminHome from "../page/admin/AdminHome";
import Login from "../page/accountClient/Login";






const publicRoutes = [
    { path: '/', component: Home,layout:LayoutCilent},
    { path: '/products/men', component: Products,layout:LayoutCilent},
    { path: '/products/men/:caterogy', component: Products,layout:LayoutCilent},
    { path: '/products/:type/:caterogy/:id', component: ProductDetail,layout:LayoutCilent},
    { path: '/client/register', component: Register,layout:LayoutCilent},
    { path: '/cart', component: Cart,layout:LayoutCilent},
    { path: '/payment', component: Payment,layout:LayoutCilent},
    { path: '/client/login', component: Login,layout:LayoutCilent},



    { path: '/admin', component: AdminHome,layout:LayoutAdmin},



    
    
    



];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
