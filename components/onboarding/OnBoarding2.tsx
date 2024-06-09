import { Image, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Rect, Svg } from "react-native-svg";
import { router } from "expo-router";

const OnboardingTwo = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/images/screen-2.png")}
        style={{
          width: "100%",
          height: "48%",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      />
      <View style={{ marginHorizontal: 33, marginTop: 40, gap: 20 }}>
        <ThemedText type="title" style={{ textAlign: "center" }}>
          It’s a big world out there go{" "}
          <ThemedText type="title" style={{ color: "#FF7029" }}>
            explore
          </ThemedText>
        </ThemedText>
        <ThemedText style={{ textAlign: "center", color: "#7D848D" }}>
          At Friends tours and travel, we customize reliable and trutworthy
          educational tours to destinations all over the world
        </ThemedText>
      </View>
      <View style={{ alignItems: "center", marginVertical: 40 }}>
        <Svg width="62" height="7" viewBox="0 0 62 7" fill="none">
          <Rect x="17" width="35" height="7" rx="3.5" fill="#24BAEC" />
          <Rect width="13" height="7" rx="3.5" fill="#CAEAFF" />
          <Rect x="56" width="6" height="7" rx="3" fill="#CAEAFF" />
        </Svg>
      </View>

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
          onPress={() => router.push("/(onboarding)/onboardingthree")}
        >
          <ThemedText style={{ color: "white", fontWeight: "600" }}>
            Next
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

export default OnboardingTwo;
