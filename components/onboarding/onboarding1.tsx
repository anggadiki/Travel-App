import { Image, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { router } from "expo-router";

const OnBoardingOne = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          width: "100%",
          height: 435,
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
      <Image
        source={require("../../assets/images/loading.png")}
        style={{ marginVertical: 40 }}
      />
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
          onPress={() => router.push("/(tabs)")}
        >
          <ThemedText style={{ color: "white", fontWeight: "600" }}>
            Get Started
          </ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingOne;
