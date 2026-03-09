import AppleAuthButton from "@/components/auth/appleAuthButton";
import GoogleAuthButton from "@/components/auth/googleAuthButton";
import { Colors, Fonts } from "@/constants/theme";
import useUserStore from "@/hooks/use-userStore";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
const otherOptions = () => {
  const router = useRouter();
  const { setIsGuest } = useUserStore();
  const continueAsGuest = () => {
    setIsGuest(true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => router.dismiss()}
      >
        <Ionicons name="close" size={24} color={Colors.dark} />
      </TouchableOpacity>
      <Text style={styles.title}>Log in Or create New Foodler account</Text>
      <View style={styles.buttonContainer}>
        <Animated.View entering={FadeInDown.delay(100)}>
          <AppleAuthButton />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(200)}>
          <GoogleAuthButton />
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(400)}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={continueAsGuest}
          >
            <Text style={styles.continueButtonText}> Continue as Guest</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
  closeButton: {
    backgroundColor: Colors.light,
    borderRadius: 10,
    alignSelf: "flex-end",
    padding: 12,
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.brandBlack,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    gap: 12,
    width: "100%",
    paddingHorizontal: 10,
  },
  continueButton: {
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 4,
  },
  continueButtonText: {
    color: "#313ef5",
    fontSize: 18,
    fontWeight: "600",
  },
});
export default otherOptions;
