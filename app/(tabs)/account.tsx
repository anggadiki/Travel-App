import React from "react";
import { View, TouchableOpacity } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

const LogoutScreen: React.FC = () => {
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      await AsyncStorage.removeItem("user");
      console.log("Berhasil log out");
      router.push("/(auth)/signin"); // Redirect to sign-in screen
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
      }}
    >
      <TouchableOpacity
        onPress={signOut}
        style={{
          width: "100%",
          backgroundColor: "red",
          padding: 15,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemedText
          style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
        >
          Log Out
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default LogoutScreen;
