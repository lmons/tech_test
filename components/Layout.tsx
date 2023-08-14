import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
        <div className="bg-red-50">

        <Navbar />
        {children}
        </div>
        </>
    );
};
export default Layout;