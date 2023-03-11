import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
    return (
        <div className="h-full bg-slate-900 text-slate-300 font-sans">
            <div className="container mx-auto">
                <Navbar />
                <div className="px-5 my-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}