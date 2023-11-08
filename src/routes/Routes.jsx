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
import PrivateRoute from "../providers/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <FoodCardDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <FoodRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoute>
            <ManageMyFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/food-requests/:id",
        element: (
          <PrivateRoute>
            <ManageSingleFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-food-request",
        element: (
          <PrivateRoute>
            <MyFoodRequest />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
