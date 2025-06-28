import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/Cart";

import ScrollToTop from "./components/ScrollToTop";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ScrollToTop>
                <Home />
            </ScrollToTop>
        )
    },
    {
        path: '/sobre-nos',
        element: (
            <ScrollToTop>
                <About />
            </ScrollToTop>
        )
    },
    {
        path: '/produtos',
        element: (
            <ScrollToTop>
                <Products />
            </ScrollToTop>
        )
    },
    {
        path: '/produtos/:id',
        element: (
            <ScrollToTop>
                <ProductDetails />
            </ScrollToTop>
        )
    },
    {
        path: '/carrinho',
        element: (
            <ScrollToTop>
                <ShoppingCart />
            </ScrollToTop>
        )
    }
])

export default router