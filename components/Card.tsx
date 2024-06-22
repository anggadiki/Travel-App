import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Path, Svg } from "react-native-svg";
import { ThemedText } from "./ThemedText";
import { EvilIcons } from "@expo/vector-icons";
import { router } from "expo-router";
interface CardProps {
  imageSource: any; // You can use more specific type if known (e.g., ImageSourcePropType)
  title: string;
  rating?: number;
}

const Card: React.FC<CardProps> = ({ imageSource, title, rating = 5 }) => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{ padding: 14, backgroundColor: "#FFFFFF", borderRadius: 24 }}
      >
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => router.push("details")}
        >
          <Image source={imageSource} style={styles.image} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingHorizontal: 10,
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg width="13" height="12" viewBox="0 0 13 12" fill="none">
              <Path
                d="M5.59149 0.345492C5.74042 -0.115164 6.38888 -0.115164 6.53781 0.345491L7.62841 3.71885C7.69501 3.92486 7.88603 4.06434 8.10157 4.06434H11.6308C12.1128 4.06434 12.3132 4.68415 11.9233 4.96885L9.06803 7.0537C8.89366 7.18102 8.82069 7.4067 8.8873 7.61271L9.9779 10.9861C10.1268 11.4467 9.60222 11.8298 9.21232 11.5451L6.35708 9.46024C6.18271 9.33291 5.94659 9.33291 5.77222 9.46024L2.91698 11.5451C2.52708 11.8298 2.00247 11.4467 2.1514 10.9861L3.242 7.61271C3.30861 7.4067 3.23564 7.18102 3.06127 7.0537L0.206033 4.96885C-0.183869 4.68415 0.0165137 4.06434 0.49846 4.06434H4.02773C4.24326 4.06434 4.43428 3.92486 4.50089 3.71885L5.59149 0.345492Z"
                fill="#FFD336"
              />
            </Svg>
            <ThemedText>{rating}</ThemedText>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            padding: 10,
            alignItems: "center",
          }}
        >
          <EvilIcons name="location" size={18} color="#7D848D" />
          <ThemedText style={{ fontSize: 15, color: "#7D848D" }}>
            Tekergat, Sunamgnj
          </ThemedText>
        </View>
        <View
          style={{
            width: 34,
            height: 34,
            position: "absolute",
            top: 24,
            right: 24,
            backgroundColor: "#1B1E28",

            borderRadius: 50,
            opacity: 0.4,
          }}
        ></View>
        <Svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{ position: "absolute", top: 32, right: 32 }}
        >
          <Path
            d="M3.0001 4C3.0001 2.34315 4.34325 1 6.0001 1H12.0001C13.657 1 15.0001 2.34315 15.0001 4V14.3358C15.0001 15.2267 13.923 15.6729 13.293 15.0429L10.4143 12.1642C9.63327 11.3832 8.36693 11.3832 7.58589 12.1642L4.70721 15.0429C4.07724 15.6729 3.0001 15.2267 3.0001 14.3358V4Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 24,
    padding: 14,
  },
  imageContainer: {
    width: 240,
    height: 286,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    position: "relative",
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Card;
