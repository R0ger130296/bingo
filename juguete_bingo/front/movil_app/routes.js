import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "./screens/home";
import Login from "./screens/login";
import Registro from "./screens/register";

const screens = {
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  },
  //   Registro: {
  //     screen: Registro
  //   }
};

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);
