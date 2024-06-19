import { memo } from "react";
import Footer from "../footer";
import Header from "../header";
import Chat from "components/Chat";

const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Chat /> {/* Add Chat component */}
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);
