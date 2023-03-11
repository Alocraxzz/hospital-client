import { FC } from "react";

interface TableProps {
    children: React.ReactNode;
    props?: any;
}

export const Thead: FC<TableProps> = ({ children }) => {
    return (
        <thead className="bg-slate-800 border-b-2 border-slate-500">
            {children}
        </thead>
    );
};

export const Tbody: FC<TableProps> = ({ children }) => {
    return (
        <tbody className="divide-y divide-slate-500">
            {children}
        </tbody>
    );
};

export const Table: FC<TableProps | any> = ({ children, ...props}) => {
    return (
        <div {...props}>
            <div className="overflow-auto rounded-lg shadow">
                <table className="w-full">
                    {children}
                </table>
            </div>
        </div>
    );
};