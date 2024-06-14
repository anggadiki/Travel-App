import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedText } from "@/components/ThemedText";

interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
  familyName: string;
  givenName: string;
}

const HomeScreen: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };

    loadUser();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <ThemedText type="title">Welcome</ThemedText>
      {user ? (
        <>
          <Image
            source={{ uri: user.photo }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
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
