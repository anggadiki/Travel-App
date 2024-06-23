// components/ButtonAuthGoogle.tsx
import React, { useState } from "react";
import { TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { authGoogle } from "@/services/authGoogle";
import { router } from "expo-router";

const ButtonAuthGoogle = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    setIsLoading(true);

    try {
      const user = await authGoogle();
      setIsLoading(false);
      // Di sini Anda dapat melakukan navigasi atau pembaruan state lainnya setelah login berhasil
      router.push("/(tabs)");
      // Contoh: navigasi ke halaman berikutnya menggunakan router
    } catch (error) {
      setIsLoading(false);
      console.error("Error during Google Sign-In:", error);
      Alert.alert("Error", "Failed to sign in with Google.");
    }
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#24BAEC",
        padding: 10,
        alignItems: "center",
        borderRadius: 16,
        paddingVertical: 18,
        width: "100%",
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
      }}
      onPress={handlePress}
    >
      {isLoading ? (
        <ActivityIndicator color="white" size="small" />
      ) : (
        <>
          <AntDesign name="google" size={24} color="white" />
          <ThemedText style={{ color: "white", fontWeight: "600" }}>
            Sign in with Google
          </ThemedText>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ButtonAuthGoogle;
