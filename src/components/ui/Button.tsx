import React, { FC } from "react";

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({ children, type}) => {
    return (
        <button type={type ?? "button"} className="self-start bg-slate-700 hover:bg-slate-600 font-bold py-2 px-4 rounded">
            {children}
        </button>
    );
};