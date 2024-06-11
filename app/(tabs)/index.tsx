import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ThemedText>Welcome</ThemedText>
    </View>
  );
}
