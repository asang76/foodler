import useUserStore from "@/hooks/use-userStore";
import React from "react";
import { Button, Text, View } from "react-native";

const page = () => {
  const { setIsGuest } = useUserStore();
  return (
    <View>
      <Text>my Textr page</Text>
      <Button title="Continue as Guest" onPress={() => setIsGuest(false)} />
    </View>
  );
};

export default page;
