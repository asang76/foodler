import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="restaurants"
        options={{ title: "Restaurants", headerShown: false }}
      />
      <Tabs.Screen name="discovery" options={{ title: "Discovery" }} />
      <Tabs.Screen
        name="stores"
        options={{ title: "Stores", headerShown: false }}
      />
      <Tabs.Screen name="Profile" options={{ headerShown: false }} />
      <Tabs.Screen name="search" options={{ title: "search" }} />
    </Tabs>
  );
};

export default _layout;
