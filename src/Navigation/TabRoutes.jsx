import React from "react";
import HomeStack from "./HomeStack";
import Icon from "react-native-vector-icons/Ionicons"; // Để sử dụng icon
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/FontAwesome";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LayoutCart, LayoutSetting, LayoutWishList } from "../layout";
import UserStack from "./UserStack";
import CategoryStack from "./CategoryStack";
import SettingStack from "./SettingStack";
import { Category, Category2, HeartAdd, Home2 ,Heart} from "iconsax-react-native";
const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      // initialRouteName={pathRouter.HOME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
        // tabBarShowLabel: false,
        tabBarItemStyle: {
          padding: 1,
          marginBottom: 12,
        },
        tabBarStyle: {
          padding: 10,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Home2 size="25" color={focused ? "red" : "gray"} />
              // <Icon2 name="home" size={25} color={focused ? "red" : "gray"} />
            );
          },
        }}
      />
      <Tab.Screen
        name={"Category"}
        component={CategoryStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Category2 size="25" color={focused ? "red" : "gray"} />
              // <Icon name="grid-outline" size={25} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wishlist "
        component={LayoutWishList}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Heart size="25" color={focused ? "red" : "gray"}/>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SettingStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon3 name="user-o" color={focused ? "red" : "gray"} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
