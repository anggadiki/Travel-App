import { Image, TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { Circle, Path, Svg } from "react-native-svg";

const DetailsScreen = () => {
  return (
    <ThemedView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image
        source={require("@/assets/images/bg-1.jpeg")}
        style={{ width: "100%", maxHeight: 480 }}
      />
      <ThemedView
        style={{
          backgroundColor: "white",
          width: "100%",
          flexBasis: 500,
          paddingHorizontal: 20,
          position: "relative",
          alignItems: "center",
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          top: -60,
        }}
      >
        <ThemedView
          style={{
            width: 36,
            height: 5,
            backgroundColor: "#7D848D",
            borderRadius: 16,
            marginTop: 16,
            opacity: 0.3,
          }}
        />
        <ThemedView
          style={{
            marginTop: 24,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ThemedView>
            <ThemedText
              style={{
                fontSize: 24,
                fontWeight: "bold",
                letterSpacing: 0.5,
              }}
            >
              Niladri Reservoir
            </ThemedText>
            <ThemedText
              style={{ fontSize: 15, color: "#7D848D", letterSpacing: 0.3 }}
            >
              Tekergat, Sunamgnj
            </ThemedText>
          </ThemedView>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={require("@/assets/images/avatar.png")}
          />
        </ThemedView>
        <ThemedView
          style={{
            marginTop: 24,
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <ThemedView
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <Circle
                cx="8"
                cy="7.33334"
                r="2"
                stroke="#7D848D"
                stroke-width="1.5"
              />
              <Path
                d="M14 7.25927C14 10.5321 10.25 14.6667 8 14.6667C5.75 14.6667 2 10.5321 2 7.25927C2 3.98647 4.68629 1.33334 8 1.33334C11.3137 1.33334 14 3.98647 14 7.25927Z"
                stroke="#7D848D"
                stroke-width="1.5"
              />
            </Svg>
            <ThemedText style={{ color: "#7D848D", fontSize: 15 }}>
              Tekergat
            </ThemedText>
          </ThemedView>
          <ThemedView
            style={{
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Svg width="16" height="16" viewBox="0 0 13 12" fill="none">
              <Path
                d="M5.59149 0.345492C5.74042 -0.115164 6.38888 -0.115164 6.53781 0.345491L7.62841 3.71885C7.69501 3.92486 7.88603 4.06434 8.10157 4.06434H11.6308C12.1128 4.06434 12.3132 4.68415 11.9233 4.96885L9.06803 7.0537C8.89366 7.18102 8.82069 7.4067 8.8873 7.61271L9.9779 10.9861C10.1268 11.4467 9.60222 11.8298 9.21232 11.5451L6.35708 9.46024C6.18271 9.33291 5.94659 9.33291 5.77222 9.46024L2.91698 11.5451C2.52708 11.8298 2.00247 11.4467 2.1514 10.9861L3.242 7.61271C3.30861 7.4067 3.23564 7.18102 3.06127 7.0537L0.206033 4.96885C-0.183869 4.68415 0.0165137 4.06434 0.49846 4.06434H4.02773C4.24326 4.06434 4.43428 3.92486 4.50089 3.71885L5.59149 0.345492Z"
                fill="#FFD336"
              />
            </Svg>
            <ThemedText style={{ color: "#1B1E28", fontSize: 15 }}>
              4.7
            </ThemedText>
            <ThemedText style={{ color: "#7D848D", fontSize: 15 }}>
              (2498)
            </ThemedText>
          </ThemedView>
          <ThemedText style={{ color: "#7D848D", fontSize: 15 }}>
            <ThemedText style={{ color: "#24BAEC", fontSize: 15 }}>
              $59
            </ThemedText>
            /Person
          </ThemedText>
        </ThemedView>
        <ThemedView
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 26,
            marginTop: 20,
          }}
        >
          <Image
            source={require("@/assets/images/bg-1.jpeg")}
            style={{ width: 42, height: 42, borderRadius: 12 }}
          />
          <Image
            source={require("@/assets/images/bg-2.jpeg")}
            style={{ width: 42, height: 42, borderRadius: 12 }}
          />
          <Image
            source={require("@/assets/images/bg-1.jpeg")}
            style={{ width: 42, height: 42, borderRadius: 12 }}
          />
          <Image
            source={require("@/assets/images/bg-1.jpeg")}
            style={{ width: 42, height: 42, borderRadius: 12 }}
          />
          <Image
            source={require("@/assets/images/bg-2.jpeg")}
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
            }}
          />
          <ThemedText
            style={{
              color: "white",
              fontSize: 14,
              position: "absolute",
              right: 70,
              top: 8,
            }}
          >
            +16
          </ThemedText>
        </ThemedView>
        <ThemedView style={{ marginTop: 20, width: "100%" }}>
          <ThemedText
            style={{
              color: "#1B1E28",
              fontSize: 20,
              fontWeight: "bold",
              lineHeight: 28,
            }}
          >
            About Destination
          </ThemedText>
          <ThemedText
            style={{
              color: "#7D848D",
              fontSize: 13,
              lineHeight: 22,
              paddingRight: 17,
              marginTop: 8,
              textAlign: "left",
            }}
          >
            You will get a complete travel package on the beaches. Packages in
            the form of airline tickets, recommended Hotel rooms,
            Transportation, Have you ever been on holiday to the Greek ETC...
            <ThemedText
              style={{
                color: "#FF7029",
                fontSize: 14,
                lineHeight: 22,
                fontWeight: "500",
              }}
            >
              Read More
            </ThemedText>
          </ThemedText>
        </ThemedView>
        <TouchableOpacity
          style={{
            marginTop: 15,
            width: "100%",
            backgroundColor: "#24BAEC",
            borderRadius: 16,
            alignItems: "center",
            paddingVertical: 18,
          }}
        >
          <ThemedText
            style={{ color: "white", fontSize: 16, fontWeight: "700" }}
          >
            Book Now
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default DetailsScreen;
