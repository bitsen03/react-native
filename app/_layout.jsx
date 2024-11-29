// app/_layout.js
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="about"
      screenOptions={{
        tabBarActiveTintColor: "#ff6347",
        headerStyle: {
          backgroundColor: "#1c1c1c",
          height: 60,
        },
        headerShadowVisible: false,
        headerTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#2c2c2c",
          borderTopWidth: 1,
          borderTopColor: "#444444",
          paddingBottom: 5,
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
        },
      }}
    ></Tabs>
  );
}
