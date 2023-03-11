import { Outlet } from "react-router-dom";
import { Navbar } from "./Navigation";

export const Layout = () => {
    return (
        <>
            <div className="h-screen bg-slate-900 text-slate-300 font-sans">
                <div className="container px-3 mx-auto box-border">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </>
    );
}