import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { router } from "expo-router";
import { Path, Svg } from "react-native-svg";

interface CustomHeaderProps {
  title?: string;
  titleColor?: string;
  rightIcon?: React.ReactNode;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title = "Details",
  titleColor = "white",
  rightIcon,
}) => {
  return (
    <ThemedView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "auto",
        paddingTop: 40,
        paddingHorizontal: 20,
        position: "absolute",
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity
        style={{
          width: 44,
          height: 44,
          borderRadius: 50,
          backgroundColor: "rgba(27, 30, 40, 0.3)",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => router.canGoBack() && router.back()}
      >
        <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>

      <ThemedText
        style={{ fontSize: 18, fontWeight: "700", color: titleColor }}
      >
        {title}
      </ThemedText>

      <TouchableOpacity
        style={{
          width: 44,
          height: 44,
          borderRadius: 50,
          backgroundColor: "rgba(27, 30, 40, 0.3)",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {rightIcon || (
          <Svg width="24" height="24" viewBox="0 0 18 18" fill="none">
            <Path
              d="M3.0001 4C3.0001 2.34315 4.34325 1 6.0001 1H12.0001C13.657 1 15.0001 2.34315 15.0001 4V14.3358C15.0001 15.2267 13.923 15.6729 13.293 15.0429L10.4143 12.1642C9.63327 11.3832 8.36693 11.3832 7.58589 12.1642L4.70721 15.0429C4.07724 15.6729 3.0001 15.2267 3.0001 14.3358V4Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </Svg>
        )}
      </TouchableOpacity>
    </ThemedView>
  );
};

export default CustomHeader;
