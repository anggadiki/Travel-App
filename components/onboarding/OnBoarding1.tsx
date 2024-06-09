import { Image, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";
import { Rect, Svg } from "react-native-svg";

const OnBoardingOne = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          width: "100%",
          height: "48%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/screen-1.png")}
          style={{
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        />
      </View>
      <View style={{ marginHorizontal: 33, marginTop: 40, gap: 20 }}>
        <ThemedText type="title" style={{ textAlign: "center" }}>
          Life is short and the world is{" "}
          <ThemedText type="title" style={{ color: "#FF7029" }}>
            wide
          </ThemedText>
        </ThemedText>
        <ThemedText style={{ textAlign: "center", color: "#7D848D" }}>
          At Friends tours and travel, we customize reliable and trutworthy
          educational tours to destinations all over the world
        </ThemedText>
      </View>

      <Svg
        width="62"
        height="7"
        viewBox="0 0 62 7"
        fill="none"
        style={{ marginVertical: 40 }}
      >
        <Rect y="0.000854492" width="35" height="7" rx="3.5" fill="#24BAEC" />
        <Rect
          x="39"
          y="0.000854492"
          width="13"
          height="7"
          rx="3.5"
          fill="#CAEAFF"
        />
        <Rect
          x="56"
          y="0.000854492"
          width="6"
          height="7"
          rx="3"
          fill="#CAEAFF"
        />
      </Svg>

      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#24BAEC",
            padding: 10,
            alignItems: "center",
            marginHorizontal: 20,
            borderRadius: 16,
            paddingVertical: 18,
          }}
          onPress={() => router.push("/(onboarding)/onboardingtwo")}
        >
          <ThemedText style={{ color: "white", fontWeight: "600" }}>
            Get Started
          </ThemedText>
        </TouchableOpacity>
      </View>
      <ThemedText
        style={{
          position: "absolute",
          top: 56,
          right: 20,
          fontSize: 18,
          color: "#CAEAFF",
        }}
        onPress={() => router.push("/(tabs)")}
      >
        Skip
      </ThemedText>
    </View>
  );
};

export default OnBoardingOne;
