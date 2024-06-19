import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/users/homePage';
import MasterLayout from './pages/users/theme/masterLayout';
import { ROUTERS } from './utils/router';
import MensPage from './pages/users/mensPage';
import JewelryPages from './pages/users/jewelryPages';
import ProducDetail from './pages/users/productPage/ProducDetail';
import BraceletMen from './pages/users/braceletMen';
import RingMen from './pages/users/ringmenPage';
import NecklaceMen from './pages/users/necklaceMen';
import ViewCart from './pages/users/cartPage/viewCart';
import Checkout from './pages/users/checkOutPage/CheckOut';
import Profile from './pages/users/profilePage/Profile';
import CreateProduct from './pages/manager/CreateProduct/CreateProduct';
import ManagerLayout from './pages/manager/ManagerLayout/ManagerLayout';
import GoldPriceTracker from 'pages/users/goldPriceTracker/GoldPriceTracker';

function renderUserRouter() {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />,
        },
        {
            path: ROUTERS.USER.MENS,
            component: <MensPage />,
        },
        {
            path: ROUTERS.USER.JEWELRY,
            component: <JewelryPages />,
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <ProducDetail />,
        },
        {
            path: ROUTERS.USER.BRACELETMENPAGE,
            component: <BraceletMen />,
        },
        {
            path: ROUTERS.USER.RICHMEN,
            component: <RingMen />,
        },
        {
            path: ROUTERS.USER.NECKLACEMEN,
            component: <NecklaceMen />,
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
            path: ROUTERS.USER.PROFILE,
            component: <Profile />,
        },
        {
            path: ROUTERS.USER.GOLDPRICE,
            component: <GoldPriceTracker />,
        },
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
}

function renderManagerRouter() {
    const managerRouters = [
        {
            path: ROUTERS.MANAGER.CREATEPRODUCT,
            component: <CreateProduct />,
        }
        // Add more manager routes here if needed
    ];

    return (
        <ManagerLayout>
            <Routes>
                {managerRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </ManagerLayout>
    );
}

const RouterCustom = () => {
    return (
        <Routes>
            <Route path="/*" element={renderUserRouter()} />
            <Route path="/manager/*" element={renderManagerRouter()} />
        </Routes>
    );
};

export default RouterCustom;
