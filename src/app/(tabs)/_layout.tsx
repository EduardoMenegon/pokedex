import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Pokedex from "./pokedex";
import Ranking from "./ranking";
import Settings from "./settings";

const TopTabs = createMaterialTopTabNavigator();

export default () => {
  return (
    <TopTabs.Navigator
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#f8fafc',
      tabBarInactiveTintColor: '#94a3b8',
      tabBarStyle: {
        backgroundColor: '#dc2626',
        paddingTop: 15, 
      },
      tabBarIndicatorStyle: {
        backgroundColor: '#f8fafc',
      },
    })}
    >
      <TopTabs.Screen name="Pokedex" component={Pokedex} />
      <TopTabs.Screen name="Ranking" component={Ranking} />
      <TopTabs.Screen name="Settings" component={Settings} />
    </TopTabs.Navigator>
  );
};
