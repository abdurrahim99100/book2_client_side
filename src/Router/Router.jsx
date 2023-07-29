import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <h3>Error page</h3>,
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);