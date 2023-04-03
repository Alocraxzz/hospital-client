import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./features/rtk-query/store";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>,
);