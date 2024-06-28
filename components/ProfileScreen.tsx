import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "./ThemedView";
import { Circle, Ellipse, Path, Svg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
  familyName: string;
  givenName: string;
}

const ProfileScreen: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
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
    <ThemedView
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
      }}
    >
      {user ? (
        <>
          <ThemedView
            style={{
              marginTop: 100,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: user.photo }}
              style={{ width: 96, height: 96, borderRadius: 50 }}
            />
            <ThemedText
              style={{ fontSize: 24, fontWeight: "medium", marginTop: 8 }}
            >
              {user.name}
            </ThemedText>
            <ThemedText style={{ marginTop: 4, color: "#7D848D" }}>
              {user.email}
            </ThemedText>
          </ThemedView>
        </>
      ) : null}
      <ThemedView
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          borderRadius: 16,
          marginVertical: 20,
        }}
      >
        <ThemedView
          style={{
            gap: 10,
            alignItems: "center",
            borderRightWidth: 2,
            borderColor: "#F7F7F9",
            padding: 14,
          }}
        >
          <ThemedText style={{ fontWeight: "bold" }}>Reward Points</ThemedText>
          <ThemedText style={{ color: "#FF7029", fontWeight: "bold" }}>
            360
          </ThemedText>
        </ThemedView>
        <ThemedView style={{ gap: 10, alignItems: "center", padding: 14 }}>
          <ThemedText style={{ fontWeight: "bold" }}>Travel Trips</ThemedText>
          <ThemedText style={{ color: "#FF7029", fontWeight: "bold" }}>
            990
          </ThemedText>
        </ThemedView>
        <ThemedView
          style={{
            gap: 10,
            alignItems: "center",
            padding: 14,
            borderLeftWidth: 2,
            borderColor: "#F7F7F9",
          }}
        >
          <ThemedText style={{ fontWeight: "bold" }}>Bucket List</ThemedText>
          <ThemedText style={{ color: "#FF7029", fontWeight: "bold" }}>
            69
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={{ width: "100%", marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            padding: 16,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#F7F7F9",
          }}
        >
          <ThemedView
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Ellipse
                cx="12"
                cy="17.5"
                rx="7"
                ry="3.5"
                stroke="#7D848D"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <Circle
                cx="12"
                cy="7"
                r="4"
                stroke="#7D848D"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </Svg>
            <ThemedText
              style={{ fontWeight: "bold", letterSpacing: 0.5, lineHeight: 20 }}
            >
              Profile
            </ThemedText>
          </ThemedView>
          <AntDesign name="right" size={20} color="#7D848D" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 16,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#F7F7F9",
          }}
        >
          <ThemedView
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                d="M6.00024 7C6.00024 5.34315 7.34339 4 9.00024 4H15.9526C17.6095 4 18.9526 5.34315 18.9526 7V18.5858C18.9526 19.4767 17.8755 19.9229 17.2455 19.2929L13.8906 15.938C13.1096 15.157 11.8433 15.157 11.0622 15.938L7.70735 19.2929C7.07739 19.9229 6.00024 19.4767 6.00024 18.5858V7Z"
                stroke="#7D848D"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </Svg>
            <ThemedText
              style={{ fontWeight: "bold", letterSpacing: 0.5, lineHeight: 20 }}
            >
              Bookmarked
            </ThemedText>
          </ThemedView>
          <AntDesign name="right" size={20} color="#7D848D" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 16,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#F7F7F9",
          }}
        >
          <ThemedView
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.06678 13.57L7.22778 11.125L8.57778 10.672C8.82278 10.59 9.09178 10.628 9.30378 10.775L10.4758 11.584L13.2948 10.343L10.3498 6.61199L12.7478 6.10199L16.6208 9.13499L20.7508 7.48899C21.7618 7.08599 22.8778 7.75999 22.9908 8.84199V8.84199C23.0668 9.55999 22.6638 10.244 21.9978 10.526L14.5948 13.66C14.4048 13.74 14.2028 13.784 13.9968 13.789L9.74278 13.895C9.47778 13.904 9.22578 13.782 9.06678 13.57Z"
                stroke="#7D848D"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M20.035 7.79999C18.59 4.96099 15.648 3.01199 12.245 3.01199C7.415 3.01199 3.5 6.92899 3.5 11.762C3.5 16.594 7.415 20.512 12.245 20.512C17.075 20.512 20.99 16.595 20.99 11.762C20.99 11.501 20.973 11.245 20.951 10.99"
                stroke="#7D848D"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M3.5199 12.349C1.6559 13.716 0.646902 15.233 1.0969 16.293C1.7349 17.873 5.3349 17.908 9.1379 16.371"
                stroke="#7D848D"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
            <ThemedText
              style={{ fontWeight: "bold", letterSpacing: 0.5, lineHeight: 20 }}
            >
              Previous Trips
            </ThemedText>
          </ThemedView>
          <AntDesign name="right" size={20} color="#7D848D" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 16,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#F7F7F9",
          }}
        >
          <ThemedView
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                d="M20.7439 15.7206L20.1043 15.3289V15.3289L20.7439 15.7206ZM19.7894 17.2794L20.429 17.6711V17.6711L19.7894 17.2794ZM3.25609 8.27942L2.61648 7.88775H2.61648L3.25609 8.27942ZM4.21064 6.72057L4.85025 7.11223L4.21064 6.72057ZM6.81852 6.06172L7.1771 5.403L7.1771 5.403L6.81852 6.06172ZM3.95487 10.7383L3.59629 11.397H3.59629L3.95487 10.7383ZM17.1815 17.9383L16.8229 18.597L16.8229 18.597L17.1815 17.9383ZM20.0451 13.2617L19.6866 13.9204V13.9205L20.0451 13.2617ZM4.21064 17.2794L3.57103 17.6711L3.57103 17.6711L4.21064 17.2794ZM3.25609 15.7206L3.8957 15.3289L3.8957 15.3289L3.25609 15.7206ZM19.7894 6.72058L20.429 6.32892L19.7894 6.72058ZM20.7439 8.27943L20.1043 8.67109V8.67109L20.7439 8.27943ZM20.0451 10.7383L20.4037 11.397L20.0451 10.7383ZM17.1815 6.06174L17.5401 6.72046V6.72046L17.1815 6.06174ZM3.95487 13.2617L4.31345 13.9205H4.31345L3.95487 13.2617ZM6.81851 17.9383L6.45994 17.2795L6.45993 17.2795L6.81851 17.9383ZM17.08 6.11698L16.7214 5.45825L17.08 6.11698ZM6.92 6.11697L6.56142 6.77569L6.56142 6.77569L6.92 6.11697ZM17.08 17.883L17.4386 17.2243L17.4386 17.2243L17.08 17.883ZM6.92 17.883L7.27858 18.5418L7.27858 18.5418L6.92 17.883ZM11.0455 3.75H12.9545V2.25H11.0455V3.75ZM12.9545 20.25H11.0455V21.75H12.9545V20.25ZM11.0455 20.25C10.3631 20.25 9.88635 19.7389 9.88635 19.2H8.38635C8.38635 20.6493 9.61906 21.75 11.0455 21.75V20.25ZM14.1136 19.2C14.1136 19.7389 13.6369 20.25 12.9545 20.25V21.75C14.3809 21.75 15.6136 20.6493 15.6136 19.2H14.1136ZM12.9545 3.75C13.6369 3.75 14.1136 4.26107 14.1136 4.8H15.6136C15.6136 3.35071 14.3809 2.25 12.9545 2.25V3.75ZM11.0455 2.25C9.61906 2.25 8.38635 3.35071 8.38635 4.8H9.88635C9.88635 4.26107 10.3631 3.75 11.0455 3.75V2.25ZM20.1043 15.3289L19.1498 16.8878L20.429 17.6711L21.3835 16.1122L20.1043 15.3289ZM3.8957 8.67108L4.85025 7.11223L3.57103 6.32891L2.61648 7.88775L3.8957 8.67108ZM4.85025 7.11223C5.15889 6.6082 5.88055 6.40506 6.45993 6.72045L7.1771 5.403C5.93027 4.72428 4.31676 5.11109 3.57103 6.32891L4.85025 7.11223ZM4.31345 10.0795C3.75746 9.77688 3.6043 9.14696 3.8957 8.67108L2.61648 7.88775C1.85352 9.13373 2.32606 10.7055 3.59629 11.397L4.31345 10.0795ZM19.1498 16.8878C18.8411 17.3918 18.1195 17.5949 17.5401 17.2795L16.8229 18.597C18.0697 19.2757 19.6832 18.8889 20.429 17.6711L19.1498 16.8878ZM21.3835 16.1122C22.1465 14.8663 21.6739 13.2945 20.4037 12.603L19.6866 13.9205C20.2425 14.2231 20.3957 14.853 20.1043 15.3289L21.3835 16.1122ZM4.85025 16.8878L3.8957 15.3289L2.61648 16.1122L3.57103 17.6711L4.85025 16.8878ZM19.1498 7.11225C19.4133 7.54271 19.652 7.93242 19.8247 8.21451C19.9111 8.35556 19.981 8.46971 20.0293 8.54859C20.0534 8.58803 20.0722 8.61865 20.0849 8.63942C20.0913 8.6498 20.0961 8.65772 20.0994 8.66304C20.101 8.6657 20.1022 8.66771 20.1031 8.66906C20.1035 8.66973 20.1038 8.67024 20.104 8.67058C20.1041 8.67075 20.1042 8.67088 20.1042 8.67096C20.1042 8.671 20.1043 8.67104 20.1043 8.67106C20.1043 8.67107 20.1043 8.67108 20.1043 8.67108C20.1043 8.67109 20.1043 8.67109 20.7439 8.27943C21.3835 7.88777 21.3835 7.88777 21.3835 7.88776C21.3835 7.88776 21.3835 7.88775 21.3835 7.88774C21.3835 7.88772 21.3835 7.88768 21.3834 7.88764C21.3834 7.88756 21.3833 7.88743 21.3832 7.88726C21.383 7.88692 21.3827 7.88641 21.3823 7.88574C21.3815 7.88439 21.3802 7.88238 21.3786 7.87972C21.3753 7.8744 21.3705 7.86648 21.3641 7.8561C21.3514 7.83533 21.3327 7.80471 21.3085 7.76527C21.2602 7.68639 21.1903 7.57224 21.1039 7.43119C20.9312 7.1491 20.6926 6.75939 20.429 6.32892L19.1498 7.11225ZM20.1043 8.67109C20.3957 9.14697 20.2425 9.77689 19.6866 10.0795L20.4037 11.397C21.6739 10.7055 22.1465 9.13374 21.3835 7.88777L20.1043 8.67109ZM17.5401 6.72046C18.1195 6.40507 18.8411 6.60822 19.1498 7.11225L20.429 6.32892C19.6832 5.1111 18.0697 4.72429 16.8229 5.40301L17.5401 6.72046ZM3.8957 15.3289C3.6043 14.853 3.75746 14.2231 4.31345 13.9205L3.59629 12.603C2.32606 13.2945 1.85352 14.8663 2.61648 16.1122L3.8957 15.3289ZM3.57103 17.6711C4.31675 18.8889 5.93027 19.2757 7.1771 18.597L6.45993 17.2795C5.88055 17.5949 5.15889 17.3918 4.85025 16.8878L3.57103 17.6711ZM17.4386 6.7757L17.5401 6.72046L16.8229 5.40301L16.7214 5.45825L17.4386 6.7757ZM6.45993 6.72045L6.56142 6.77569L7.27858 5.45824L7.1771 5.403L6.45993 6.72045ZM17.5401 17.2795L17.4386 17.2243L16.7214 18.5417L16.8229 18.597L17.5401 17.2795ZM6.56142 17.2243L6.45994 17.2795L7.17709 18.597L7.27858 18.5418L6.56142 17.2243ZM3.59629 11.397C4.07404 11.6571 4.07404 12.3429 3.59629 12.603L4.31345 13.9205C5.83498 13.0922 5.83498 10.9078 4.31345 10.0795L3.59629 11.397ZM7.27858 18.5418C7.77798 18.2699 8.38635 18.6314 8.38635 19.2H9.88635C9.88635 17.4934 8.06035 16.4084 6.56142 17.2243L7.27858 18.5418ZM15.6136 19.2C15.6136 18.6314 16.222 18.2699 16.7214 18.5417L17.4386 17.2243C15.9397 16.4083 14.1136 17.4934 14.1136 19.2H15.6136ZM20.4037 12.603C19.926 12.3429 19.926 11.6571 20.4037 11.397L19.6866 10.0795C18.165 10.9078 18.165 13.0922 19.6866 13.9204L20.4037 12.603ZM6.56142 6.77569C8.06035 7.59165 9.88635 6.50663 9.88635 4.8H8.38635C8.38635 5.3686 7.77798 5.7301 7.27858 5.45824L6.56142 6.77569ZM16.7214 5.45825C16.222 5.73011 15.6136 5.36861 15.6136 4.8H14.1136C14.1136 6.50663 15.9397 7.59166 17.4386 6.7757L16.7214 5.45825ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25ZM12 14.25C10.7574 14.25 9.75001 13.2426 9.75001 12H8.25001C8.25001 14.0711 9.92894 15.75 12 15.75V14.25ZM9.75001 12C9.75001 10.7574 10.7574 9.75 12 9.75V8.25C9.92894 8.25 8.25001 9.92893 8.25001 12H9.75001ZM12 9.75C13.2426 9.75 14.25 10.7574 14.25 12H15.75C15.75 9.92893 14.0711 8.25 12 8.25V9.75Z"
                fill="#7D848D"
              />
            </Svg>
            <ThemedText
              style={{ fontWeight: "bold", letterSpacing: 0.5, lineHeight: 20 }}
            >
              Settings{" "}
            </ThemedText>
          </ThemedView>
          <AntDesign name="right" size={20} color="#7D848D" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 16,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            borderBottomWidth: 2,
            borderColor: "#F7F7F9",
          }}
        >
          <ThemedView
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
          >
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path
                d="M20 11.5C20 6.805 16.195 3 11.5 3C6.805 3 3 6.805 3 11.5C3 16.195 6.805 20 11.5 20"
                stroke="#7D848D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M19.27 19.27L21 21"
                stroke="#7D848D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M19.2678 15.7322C20.2441 16.7085 20.2441 18.2914 19.2678 19.2677C18.2915 20.244 16.7085 20.244 15.7322 19.2677C14.7559 18.2914 14.7559 16.7085 15.7322 15.7322C16.7085 14.7559 18.2915 14.7559 19.2678 15.7322"
                stroke="#7D848D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M3.88696 15.281H3.94496C6.77796 15.281 8.66696 15.119 8.66696 12.448C8.66696 9.615 11.5 9.615 11.5 7.726C11.5 5.614 7.72196 5.837 7.72196 3.948V3.88"
                stroke="#7D848D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M19.9999 11.5H16.9319C14.8269 11.5 13.7099 9.013 15.1079 7.439L17.1389 5.153"
                stroke="#7D848D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
            <ThemedText
              style={{ fontWeight: "bold", letterSpacing: 0.5, lineHeight: 20 }}
            >
              Version
            </ThemedText>
          </ThemedView>
          <AntDesign name="right" size={20} color="#7D848D" />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView
        style={{
          flex: 2,
          justifyContent: "flex-end",
          width: "90%",
        }}
      >
        <TouchableOpacity
          onPress={signOut}
          style={{
            width: "100%",
            backgroundColor: "red",
            padding: 12,
            borderRadius: 50,
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
      </ThemedView>
    </ThemedView>
  );
};

export default ProfileScreen;
