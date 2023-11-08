import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import FoodRequest from "../components/FoodRequest/FoodRequest";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Root from "../layout/Root";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import FoodCardDetails from "../pages/AvailableFood/FoodCardDetails";
import Home from "../pages/Home/Home";
import ManageMyFood from "../pages/ManageMyFood/ManageMyFood";
import UpdateFood from "../pages/ManageMyFood/UpdateFood";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import ManageSingleFood from "../pages/ManageMyFood/ManageSingleFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/available-foods",
        element: <AvailableFood />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/food/:id",
        element: <FoodCardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/food/:id",
        element: <FoodRequest />,
      },
      {
        path: "/add-food",
        element: <AddFood />,
      },
      {
        path: "/manage-my-foods",
        element: <ManageMyFood />,
      },
      {
        path: "/manage-my-foods/:id",
        element:<UpdateFood/>,
      },
      {
        path: "/food-requests/:id",
        element: <ManageSingleFood/>
      },
      {
        path: "/my-food-request",
        element: <MyFoodRequest />,
      },
    ],
  },
]);

export default router;
