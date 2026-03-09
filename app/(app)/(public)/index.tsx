import AppleAuthButton from "@/components/auth/appleAuthButton";
import GoogleAuthButton from "@/components/auth/googleAuthButton";
import SmoothInfiniteScroll from "@/components/smoothInfiniteScroll";
import { Fonts } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  const openBrowser = () => {
    Linking.openURL("https://www.foodler.com/privacy");
  };

  return (
    <View style={styles.container}>
      <View style={styles.infiniteContainer}>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set1" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="up" iconSet="set2" />
        </View>
        <View>
          <SmoothInfiniteScroll scrollDirection="down" iconSet="set3" />
        </View>
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={{
            position: "absolute",
            height: 200,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={require("@/assets/images/wolt-logo.png")}
          style={styles.logo}
        />
        <Animated.Text entering={FadeInDown} style={{ ...styles.tagline }}>
          alomost everthing is ready,
        </Animated.Text>
        {/* {login Buttons} */}
        <View style={styles.buttonContainer}>
          <Animated.View entering={FadeInDown.delay(100)}>
            <AppleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200)}>
            <GoogleAuthButton />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(300)}>
            <Link href={"/(app)/(public)/otherOptions"} asChild>
              <TouchableOpacity style={styles.otherButton}>
                <Text style={styles.otherButtonText}> Other Options</Text>
              </TouchableOpacity>
            </Link>
          </Animated.View>
        </View>
        <Animated.View
          style={styles.privacyContainer}
          entering={FadeInDown.delay(400)}
        >
          <Text style={styles.privacyText}>
            By continuing,{" "}
            <Text style={styles.privacyLink} onPress={openBrowser}>
              Foodler privacy Statement
            </Text>{" "}
            to learn about personal data processing at Foodler
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infiniteContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "relative",
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 48,
    resizeMode: "contain",
  },
  tagline: {
    fontSize: 30,
    fontFamily: Fonts.brandBold2,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    gap: 12,
    width: "100%",
    paddingHorizontal: 10,
  },
  otherButton: {
    width: "100%",
    backgroundColor: "#bdbdbd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 4,
  },
  otherButtonText: {
    color: "#4b4b4b",
    fontSize: 18,
    fontWeight: "600",
  },
  privacyContainer: {
    textAlign: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  privacyText: { textAlign: "center", color: "#666", fontSize: 14 },
  privacyLink: {
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});
