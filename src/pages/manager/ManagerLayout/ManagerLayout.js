import React, { memo } from 'react';
import ManagerFooter from '../footer/ManagerFooter';
import ManagerHeader from '../header/ManagerHeader';

const ManagerLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <ManagerHeader />
            <main>{children}</main>
            <ManagerFooter />
        </div>
    );
};

export default memo(ManagerLayout);
