import React from "react";
import { View } from "react-native";
import Home from "./screens/Home";
import DashboardTabRoutes from "./screens/Dashboard/Routes";
import { createStackNavigator } from "react-navigation";
import CustomHeader from "./components/CustomHeader";
import HeaderStyles from "./headerStyles";

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "Home",
        header: props => <CustomHeader {...props} />
      }
    },
    Dashboard: {
      screen: DashboardTabRoutes,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      ...HeaderStyles,
      animationEnabled: true
    }
  }
);

export default Routes;
