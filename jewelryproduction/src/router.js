import ProfilePage from "pages/users/profilePage";
import HomePage from "./pages/users/homePage";
import MasterLayout from "./pages/users/theme/masterLayout";
import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import MenPages from "pages/users/mensPage";
import JewelryPages from "pages/users/jewelryPages";
import ProducDetail from "pages/users/productPage/ProducDetail";
import BraceletMen from "pages/users/braceletMen";
import RingMen from "pages/users/ringmenPage";
import NecklaceMen from "pages/users/necklaceMen";
import Ringwomenpage from "pages/users/ringwomenpage";
import Necklacewomen from "pages/users/necklacewomen";
import BraceletWomen from "pages/users/braceletWomen";
import WomenPages from "pages/users/womenPages";
import Necklace from "pages/users/necklace";
import Bracelet from "pages/users/bracelet";
import Ring from "pages/users/ring";
import ProductManagement from "pages/admin/ProductManagement";
import ProductList from "pages/admin/ProducList";
import ViewCart from "pages/users/cartPage/viewCart";
import Checkout from "pages/users/checkOutPage/CheckOut";
import AdminProductPage from "pages/admin/ProductPage";
import AdminDashboard from "pages/admin/Dashboard";
const renderUserRouter=()=>{
    const userRouters=[
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />,
        },
        {
            path: ROUTERS.USER.MenPages,
            component:<MenPages/>,
        },
        {
            path: ROUTERS.USER.JEWELRY,
            component:<JewelryPages/>,
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component:<ProducDetail/>,
        },
        {
            path: ROUTERS.USER.BRACELETMENPAGE,
            component:<BraceletMen/>,
        },
        {
            path: ROUTERS.USER.RICHMEN,
            component:<RingMen/>,
        },
        {
            path: ROUTERS.USER.NECKLACEMEN,
            component:<NecklaceMen/>,
        },
        {
            path: ROUTERS.USER.RICHWOMEN,
            component:<Ringwomenpage/>,
        },
        {
            path: ROUTERS.USER.NECKLACEWOMEN,
            component:<Necklacewomen/>,
        },
        {
            path: ROUTERS.USER.BRACELETWOMENPAGE,
            component:<BraceletWomen/>,
        },
        {
            path: ROUTERS.USER.WomenPages,
            component:<WomenPages/>,
        },
        {
            path: ROUTERS.USER.RINGPAGES,
            component:<Ring/>,
        },
        {
            path: ROUTERS.USER.BRACELETPAGES,
            component:<Bracelet/>,
        },
        {
            path: ROUTERS.USER.NECKLACEPAGES,
            component:<Necklace/>,
        },
        {
            path: ROUTERS.USER.CART,
            component: <ViewCart />,
        },
        {
            path: ROUTERS.USER.CHECKOUT,
            component: <Checkout />,
        },
        {
            path: ROUTERS.USER.ProductList,
            component: <ProductList />,
        },
        {
            path: ROUTERS.USER.ProductManagement,
            component: <ProductManagement />,
        },
        {
            path: ROUTERS.USER.AdminProductPage,
            component: <AdminProductPage />,
        },
        {
            path: ROUTERS.USER.AdminDashboard,
            component: <AdminDashboard />,
        },
        

    ];
    return(
        <MasterLayout>
        <Routes>
            {userRouters.map((item, key )=>(
                    <Route key={key} path={item.path} element={item.component} />
                ))}
        </Routes>
        </MasterLayout>
    );
};
const RouterCustom = () => {
    return renderUserRouter();
};
export default RouterCustom;