import React from "react";
import { useTranslation } from "react-i18next";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Pokedex from "./pokedex";
import Ranking from "./ranking";
import Settings from "./settings";

const TopTabs = createMaterialTopTabNavigator();

export default () => {
  const { t } = useTranslation();

  return (
    <TopTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#f8fafc",
        tabBarInactiveTintColor: "#94a3b8",
        tabBarStyle: {
          backgroundColor: "#dc2626",
          paddingTop: 15,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#f8fafc",
        },
        tabBarLabelStyle: {
          fontSize: 12
        },
      })}
    >
      <TopTabs.Screen name="Pokedex" component={Pokedex} />
      <TopTabs.Screen name="Settings" component={Settings} />
    </TopTabs.Navigator>
  );
};
