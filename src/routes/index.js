import Home from "../page/Home";
import LayoutCilent from "../components/layouts/layoutClient";
import Products from "../page/Products";
import ProductDetail from "../page/Products/productDetail/ProductDetail";
import Register from "../page/accountClient/Register";
import Cart from "../page/Cart/Cart";
import Payment from "../page/Payment/Payment";






const publicRoutes = [
    { path: '/', component: Home,layout:LayoutCilent},
    { path: '/products/men', component: Products,layout:LayoutCilent},
    { path: '/products/men/:caterogy', component: Products,layout:LayoutCilent},
    { path: '/products/men/detail/:id', component: ProductDetail,layout:LayoutCilent},
    { path: '/cilent/register', component: Register,layout:LayoutCilent},
    { path: '/cart', component: Cart,layout:LayoutCilent},
    { path: '/payment', component: Payment,layout:LayoutCilent},


    
    
    



];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
