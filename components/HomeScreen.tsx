import React, { useCallback, useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemedText } from "@/components/ThemedText";
import { Path, Svg } from "react-native-svg";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import Card from "./Card";
import { ThemedView } from "./ThemedView";

interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
  familyName: string;
  givenName: string;
}

interface CardItem {
  id: string;
  title: string;
  image: any; // You can use more specific type if known (e.g., ImageSourcePropType)
  rating?: number;
}

const data: CardItem[] = [
  {
    id: "1",
    title: "Niladri Reservoir",
    image: require("@/assets/images/bg-1.jpeg"),
    rating: 4.7,
  },
  {
    id: "2",
    title: "Darma Reservoir",
    image: require("@/assets/images/bg-2.jpeg"),
    rating: 4.8,
  },
  // tambahkan data lainnya sesuai kebutuhan
];

const HomeScreen: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [fontsLoaded, fontError] = useFonts({
    "Sf-Ui-Display": require("@/assets/fonts/Sf-Ui-Display.otf"),
  });

  useEffect(() => {
    const loadUser = async () => {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };

    loadUser();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item }: { item: CardItem }) => (
    <Card imageSource={item.image} title={item.title} rating={item.rating} />
  );

  return (
    <ThemedView
      style={{
        flex: 1,
        paddingTop: 56,
        gap: 5,
      }}
      onLayout={onLayoutRootView}
    >
      {user ? (
        <>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                backgroundColor: "#F7F7F9",
                padding: 4,
                borderRadius: 100,
              }}
            >
              <Image
                source={{ uri: user.photo }}
                style={{ width: 37, height: 37, borderRadius: 50 }}
              />
              <ThemedText
                style={{ fontFamily: "Sf-Ui-Display", fontWeight: "700" }}
              >
                {user.name}
              </ThemedText>
            </View>
            <View
              style={{
                backgroundColor: "#F7F7F9",
                padding: 10,
                borderRadius: 100,
              }}
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M5.31325 12.9153L4.56803 12.8307L4.56803 12.8307L5.31325 12.9153ZM5.76043 8.97519L6.50565 9.05977L5.76043 8.97519ZM4.44776 14.8721L3.87665 14.386H3.87665L4.44776 14.8721ZM19.4319 12.8307C19.3852 12.4191 19.0137 12.1233 18.6021 12.17C18.1905 12.2168 17.8948 12.5883 17.9415 12.9998L19.4319 12.8307ZM19.5522 14.8721L18.9811 15.3583L19.5522 14.8721ZM9.73002 4.37366L9.97297 5.08322C10.2763 4.97938 10.48 4.69424 10.48 4.37366H9.73002ZM13.1539 3.28059C13.4237 3.59487 13.8972 3.6309 14.2115 3.36107C14.5258 3.09125 14.5618 2.61774 14.292 2.30347L13.1539 3.28059ZM15.7023 20.2632C15.8476 19.8753 15.651 19.4431 15.2632 19.2977C14.8753 19.1523 14.443 19.3489 14.2977 19.7368L15.7023 20.2632ZM9.70227 19.7368C9.5569 19.3489 9.12463 19.1523 8.73677 19.2977C8.3489 19.4431 8.15231 19.8753 8.29767 20.2632L9.70227 19.7368ZM17.7772 17.25H6.22278V18.75H17.7772V17.25ZM6.05846 12.9998L6.50565 9.05977L5.01522 8.89061L4.56803 12.8307L6.05846 12.9998ZM5.01886 15.3583C5.59618 14.6801 5.96025 13.8652 6.05846 12.9998L4.56803 12.8307C4.50516 13.3846 4.27064 13.9231 3.87665 14.386L5.01886 15.3583ZM17.9415 12.9998C18.0397 13.8652 18.4038 14.6801 18.9811 15.3583L20.1233 14.386C19.7293 13.9231 19.4948 13.3846 19.4319 12.8307L17.9415 12.9998ZM6.22278 17.25C5.56774 17.25 5.1044 16.926 4.89053 16.5492C4.68406 16.1854 4.68711 15.748 5.01886 15.3583L3.87665 14.386C3.11138 15.285 3.08774 16.4116 3.58595 17.2895C4.07676 18.1544 5.04944 18.75 6.22278 18.75V17.25ZM17.7772 18.75C18.9505 18.75 19.9232 18.1544 20.414 17.2895C20.9122 16.4116 20.8886 15.285 20.1233 14.386L18.9811 15.3583C19.3128 15.748 19.3159 16.1854 19.1094 16.5492C18.8955 16.926 18.4322 17.25 17.7772 17.25V18.75ZM10.48 4.37366V4.26995H8.98002V4.37366H10.48ZM6.50565 9.05977C6.70867 7.27101 8.05584 5.73962 9.97297 5.08322L9.48708 3.6641C7.11941 4.47476 5.29446 6.43026 5.01522 8.89061L6.50565 9.05977ZM12 1.25C10.3321 1.25 8.98002 2.60208 8.98002 4.26995H10.48C10.48 3.4305 11.1605 2.75 12 2.75V1.25ZM12 2.75C12.4613 2.75 12.874 2.95459 13.1539 3.28059L14.292 2.30347C13.7393 1.65971 12.9171 1.25 12 1.25V2.75ZM14.2977 19.7368C13.975 20.5979 13.0846 21.25 12 21.25V22.75C13.6854 22.75 15.1516 21.7325 15.7023 20.2632L14.2977 19.7368ZM12 21.25C10.9154 21.25 10.025 20.5979 9.70227 19.7368L8.29767 20.2632C8.84832 21.7325 10.3145 22.75 12 22.75V21.25Z"
                  fill="#1B1E28"
                />
                <Path
                  d="M21 7C21 8.65685 19.6568 10 18 10C16.3431 10 15 8.65685 15 7C15 5.34315 16.3431 4 18 4C19.6568 4 21 5.34315 21 7Z"
                  fill="#FF7029"
                  stroke="white"
                  stroke-linecap="round"
                />
              </Svg>
            </View>
          </View>
        </>
      ) : (
        <ThemedText>Loading...</ThemedText>
      )}
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          marginRight: 100,
        }}
      >
        <ThemedText
          type="title"
          style={{
            fontWeight: "normal",
            fontFamily: "Sf-Ui-Display",
            paddingTop: 10,
            lineHeight: 50,
          }}
        >
          Explore the
          <ThemedText
            type="title"
            style={{ fontWeight: "bold", lineHeight: 50 }}
          >
            {" "}
            Beautiful
          </ThemedText>{" "}
          <ThemedText
            type="title"
            style={{ fontWeight: "bold", color: "#FF7029", lineHeight: 50 }}
          >
            world!
          </ThemedText>{" "}
        </ThemedText>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 32,
        }}
      >
        <ThemedText
          style={{
            fontSize: 20,
            fontFamily: "Sf-Ui-Display",
            fontWeight: "700",
          }}
        >
          Best Destination
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 14,
            fontFamily: "Sf-Ui-Display",
            color: "#FF7029",
          }}
        >
          View all
        </ThemedText>
      </View>
      <View style={{ marginTop: 16 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ThemedView>
  );
};

export default HomeScreen;
