import { createBrowserRouter } from "react-router";
import { LoginPage } from "../../pages/login";
import { RegistrationPage } from "../../pages/registration";
import { MainPage } from "../../pages/main";
import { ProfilePage } from "../../pages/profile/ui/ProfilePage";
import { PrivateRoute } from "./ui/PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/registration",
    element: <RegistrationPage/>,
  },
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/profile",
    element: <PrivateRoute component={ProfilePage}/>,
  }
]);