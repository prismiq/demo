import { createBrowserRouter } from "react-router-dom";
import Catalog from "../../features/catalog/catalog";
import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/AboutPage";
import App from "../layout/App";
import ProductDetails from "../../features/catalog/ProductDetails";
import ServerError from "../errors/ServerError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'catalog/', element: <Catalog/>},
            {path: 'catalog/:id', element: <ProductDetails/>},
            {path: 'about', element: <AboutPage/>},
            {path: 'server-error', element: <ServerError/>}
        ]
    }
])