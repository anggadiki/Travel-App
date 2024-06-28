import { ThemedView } from "@/components/ThemedView";
import CustomHeader from "@/components/header/CustomHeader";
import { Tabs } from "expo-router";
import React from "react";
import { Circle, Ellipse, Path, Svg } from "react-native-svg";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#24BAEC",
        headerShown: false,
        tabBarStyle: {
          shadowColor: "transparent",
          backgroundColor: "white",
          height: 70,
          position: "relative",
          borderTopWidth: 1,
        },
        tabBarItemStyle: {
          marginVertical: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
              <Path
                d="M2.5 9.65359L11.5033 2.45095C12.2548 1.84972 13.3227 1.84972 14.0742 2.45095L23.0775 9.65359"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M10.1936 3.53108L6.07805 6.87492C5.33083 7.48204 4.95722 7.7856 4.75748 8.20523C4.55775 8.62486 4.55775 9.10625 4.55775 10.069V13.769C4.55775 17.6491 4.55775 19.5892 5.76315 20.7946C6.96857 22 8.90862 22 12.7888 22C16.6689 22 18.609 22 19.8143 20.7946C21.0198 19.5892 21.0198 17.6491 21.0198 13.769V10.069C21.0198 9.10625 21.0198 8.62486 20.8201 8.20523C20.6203 7.7856 20.2467 7.48204 19.4995 6.87492L15.384 3.53108C14.1409 2.52107 13.5194 2.01607 12.7888 2.01607C12.0582 2.01607 11.4366 2.52107 10.1936 3.53108Z"
                stroke={color}
                strokeWidth="1.5"
              />
              <Path
                d="M10.4736 16.0841H15.1036"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="calender"
        options={{
          title: "Calender",
          tabBarIcon: ({ color }) => (
            <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
              <Path
                d="M18.5 4.75003H6.5C4.70507 4.75003 3.25 6.20511 3.25 8.00003V18C3.25 19.795 4.70507 21.25 6.5 21.25H18.5C20.2949 21.25 21.75 19.795 21.75 18V8.00003C21.75 6.20511 20.2949 4.75003 18.5 4.75003Z"
                stroke={color}
                stroke-width="1.5"
              />
              <Path
                d="M7.25 2.75003V6.25003"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <Path
                d="M4.25 9.25003H20.75"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <Path
                d="M18.25 2.75003V6.25003"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <Path
                d="M8.75 14C9.16421 14 9.5 13.6642 9.5 13.25C9.5 12.8358 9.16421 12.5 8.75 12.5C8.33579 12.5 8 12.8358 8 13.25C8 13.6642 8.33579 14 8.75 14Z"
                fill={color}
              />
              <Path
                d="M12.75 14C13.1642 14 13.5 13.6642 13.5 13.25C13.5 12.8358 13.1642 12.5 12.75 12.5C12.3358 12.5 12 12.8358 12 13.25C12 13.6642 12.3358 14 12.75 14Z"
                fill={color}
              />
              <Path
                d="M16.75 14C17.1642 14 17.5 13.6642 17.5 13.25C17.5 12.8358 17.1642 12.5 16.75 12.5C16.3358 12.5 16 12.8358 16 13.25C16 13.6642 16.3358 14 16.75 14Z"
                fill={color}
              />
              <Path
                d="M8.75 18C9.16421 18 9.5 17.6642 9.5 17.25C9.5 16.8358 9.16421 16.5 8.75 16.5C8.33579 16.5 8 16.8358 8 17.25C8 17.6642 8.33579 18 8.75 18Z"
                fill={color}
              />
              <Path
                d="M12.75 18C13.1642 18 13.5 17.6642 13.5 17.25C13.5 16.8358 13.1642 16.5 12.75 16.5C12.3358 16.5 12 16.8358 12 17.25C12 17.6642 12.3358 18 12.75 18Z"
                fill={color}
              />
              <Path
                d="M16.75 18C17.1642 18 17.5 17.6642 17.5 17.25C17.5 16.8358 17.1642 16.5 16.75 16.5C16.3358 16.5 16 16.8358 16 17.25C16 17.6642 16.3358 18 16.75 18Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "",
          tabBarIcon: () => (
            <ThemedView
              style={{
                backgroundColor: "#24BAEC",
                borderRadius: 50,
                padding: 12,
                marginTop: "20%",
              }}
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Circle
                  cx="10.9413"
                  cy="11.9414"
                  r="7.94134"
                  stroke="white" // Set the stroke color to white to contrast the blue background
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M20.0003 21.0001L17.0009 18.0007"
                  stroke="white" // Set the stroke color to white to contrast the blue background
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </ThemedView>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.5 3.75003C7.49594 3.75003 4.25 6.99597 4.25 11C4.25 12.7632 4.87849 14.3777 5.92447 15.6345C6.08798 15.831 6.14017 16.0972 6.06294 16.3409L5.3245 18.6707L8.32803 17.7245C8.49239 17.6727 8.66957 17.6791 8.82976 17.7426C9.65514 18.0698 10.5556 18.25 11.5 18.25H13.5C17.5041 18.25 20.75 15.0041 20.75 11C20.75 6.99597 17.5041 3.75003 13.5 3.75003H11.5ZM2.75 11C2.75 6.16754 6.66751 2.25003 11.5 2.25003H13.5C18.3325 2.25003 22.25 6.16754 22.25 11C22.25 15.8325 18.3325 19.75 13.5 19.75H11.5C10.459 19.75 9.45896 19.5679 8.53108 19.2332L5.31646 20.2459C4.35115 20.55 3.4435 19.6408 3.74928 18.676L4.2381 18.831L3.74928 18.676L4.51265 16.2676C3.40646 14.8023 2.75 12.977 2.75 11Z"
                fill={color}
              />
              <Path
                d="M9 12C9.55228 12 10 11.5523 10 11C10 10.4477 9.55228 10 9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12Z"
                fill={color}
              />
              <Path
                d="M12.5 12C13.0523 12 13.5 11.5523 13.5 11C13.5 10.4477 13.0523 10 12.5 10C11.9477 10 11.5 10.4477 11.5 11C11.5 11.5523 11.9477 12 12.5 12Z"
                fill={color}
              />
              <Path
                d="M16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12Z"
                fill={color}
              />
            </Svg>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "profile",
          headerShown: true,
          header: () => (
            <CustomHeader
              title="Profile"
              titleColor="black"
              rightIcon={
                <Svg width="24" height="24" viewBox="0 0 23 23" fill="none">
                  <Path
                    d="M3 21H21M13.7844 5.31171C13.7844 5.31171 13.7844 6.94634 15.419 8.58096C17.0537 10.2156 18.6883 10.2156 18.6883 10.2156M7.31963 17.9881L10.7523 17.4977C11.2475 17.4269 11.7064 17.1975 12.06 16.8438L20.3229 8.58096C21.2257 7.67818 21.2257 6.21449 20.3229 5.31171L18.6883 3.67708C17.7855 2.77431 16.3218 2.77431 15.419 3.67708L7.15616 11.94C6.80248 12.2936 6.57305 12.7525 6.50231 13.2477L6.01193 16.6804C5.90295 17.4432 6.5568 18.097 7.31963 17.9881Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </Svg>
              }
            />
          ),
          tabBarIcon: ({ color }) => (
            <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
              <Ellipse
                cx="12.5"
                cy="17.5"
                rx="7"
                ry="3.5"
                stroke={color}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <Circle
                cx="12.5"
                cy="7.00003"
                r="4"
                stroke={color}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </Svg>
          ),
        }}
      />
    </Tabs>
  );
}
