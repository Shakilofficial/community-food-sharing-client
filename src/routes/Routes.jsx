import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../components/Error/Error";
import Home from "../pages/Home/Home";
import AvailableFood from "../pages/AvailableFood/AvailableFood";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import AddFood from "../pages/AddFood/AddFood";
import ManageMyFood from "../pages/ManageMyFood/ManageMyFood";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import FoodCardDetails from "../pages/AvailableFood/FoodCardDetails";

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
        loader:({params})=> fetch(`http://localhost:5000/foods/${params.id}`)
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
        path: "/my-food-request",
        element: <MyFoodRequest />,
      },
    ],
  },
]);

export default router;
