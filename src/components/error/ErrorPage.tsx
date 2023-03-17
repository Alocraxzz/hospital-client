import React, { useEffect } from "react";
import { useRouteError } from "react-router-dom";

interface ErrorPageProps { }

export default function ErrorPage(props: ErrorPageProps): JSX.Element {
    const error: any = useRouteError();

    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div id="error-page" className="h-screen flex items-center bg-slate-900 text-slate-300 font-sans">
            <div className="mx-auto text-center">
                <h1 className="text-6xl my-4">Oops!</h1>
                <p className="text-xl my-4">Sorry, an unexpected error has occurred.</p>
                <p>{error.data}.</p>
                <p>Status: {error.status}.</p>
            </div>
        </div>
    );
} 