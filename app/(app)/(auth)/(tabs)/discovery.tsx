import useUserStore from "@/hooks/use-userstore";
import React from "react";
import { Button, Text, View } from "react-native";

const Discovery = () => {
  const { setIsGuest } = useUserStore();
  return (
    <View>
      <Text>my Textr page</Text>
      <Button title="Continue as Guest" onPress={() => setIsGuest(false)} />
    </View>
  );
};

export default Discovery;
