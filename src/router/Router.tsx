import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import AddBooks from "../components/sharedComponents/AddBooks";
import MyBookList from "../pages/MyBookList";
import Community from "../pages/Community";


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
                path: "/addBook",
                element: <AddBooks />
            },
            {
                path: "/myBookLibrary",
                element: <MyBookList />
            },
            {
                path: "/community",
                element: <Community />
            }
        ]
    },
]);

export default router