// src/screens/HomeScreen.tsx
import React from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useUser } from "@/contexts/userContexts";

const HomeScreen: React.FC = () => {
  const { user } = useUser();
  if (user) {
    console.log("data user:", user);
  } else {
    console.log("data tidak di temukan");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ThemedText>Welcome</ThemedText>

      {user ? (
        <>
          <ThemedText>{user.name}</ThemedText>
          <ThemedText>{user.email}</ThemedText>
        </>
      ) : (
        <ThemedText>Loading...</ThemedText>
      )}
    </View>
  );
};

export default HomeScreen;
