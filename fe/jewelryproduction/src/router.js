import ProfilePage from "pages/users/profilePage";
import HomePage from "./pages/users/homePage";
import MasterLayout from "./pages/users/theme/masterLayout";
import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import MensPage from "pages/users/mensPage";
import JewelryPages from "pages/users/jewelryPages";

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
            path: ROUTERS.USER.MENS,
            component:<MensPage/>,
        },
        {
            path: ROUTERS.USER.JEWELRY,
            component:<JewelryPages/>,
        }
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

const RouterCustom=()=>{
    return renderUserRouter();
};
export default RouterCustom;