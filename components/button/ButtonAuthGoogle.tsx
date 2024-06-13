import React, { useState } from "react";
import { TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { authGoogle } from "@/services/authGoogle";
import { useUser } from "@/contexts/userContexts";

const ButtonAuthGoogle = () => {
  const { setUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    setIsLoading(true);

    try {
      await authGoogle(setUser);
      setIsLoading(false);
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
