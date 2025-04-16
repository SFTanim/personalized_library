import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import BooksIWant from "../pages/BooksIWant";
import IHave from "../pages/IHave";
import IReaded from "../pages/IReaded";
import WishToRead from "../pages/WishToRead";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/iHave",
                element: <IHave/>
            },
            {
                path: "/booksIWant",
                element: <BooksIWant/>
            },
            {
                path: "/readed",
                element: <IReaded/>
            },
            {
                path: "/wishToRead",
                element: <WishToRead/>
            },
        ]
    },
]);

export default router