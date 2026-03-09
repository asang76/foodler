import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      />
      <Stack.Screen
        name="otherOptions"
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
          presentation: "formSheet",
          headerShadowVisible: false,
          title: "",
          sheetAllowedDetents: [0.6],
          sheetCornerRadius: 20,
        }}
      />
    </Stack>
  );
};

export default Layout;
