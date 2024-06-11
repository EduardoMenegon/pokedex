import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";

export default () => {

  return (
    <Tabs
      // tabBarOptions={{
      //   activeTintColor: "#60a5fa", 
      //   inactiveTintColor: "gray", 
      //   labelStyle: { fontSize: 12 }, 
      //   tabBarStyle: { backgroundColor: "black" }, 
      // }}
      screenOptions={{
        headerShown: false,
        freezeOnBlur: true,
        lazy: true,
      }}
    >
      <Tabs.Screen
        name="pokedex"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="star" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
