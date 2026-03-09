import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface GoogleAuthButtonProps {
  onSuccess?: (credential: string) => void;
  onError?: () => void;
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({
  onSuccess,
  onError,
}) => {
  const handleGoogleAuth = () => {
    // Google authentication logic here
    console.log("Google auth button clicked");
  };

  return (
    <TouchableOpacity style={styles.googleButtonm}>
      <Ionicons name="logo-google" size={20} color="#fff" />
      <Text style={styles.googleButtonText}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  googleButtonm: {
    width: "100%",
    backgroundColor: "#4285F4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 4,
  },
  googleButtonText: {
    color: "#d1d1d1",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default GoogleAuthButton;
