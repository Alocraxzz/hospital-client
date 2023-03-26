import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import React from "react";
import { Fade } from "../animations/Fade";

export const Layout = () => {
    return (
        <div className="h-full pb-5 bg-slate-900 text-slate-300 font-sans">
            <div className="container mx-auto">
                <Fade>
                    <Navbar />
                </Fade>
                <div className="px-5 my-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}