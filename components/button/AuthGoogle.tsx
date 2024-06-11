import { AntDesign } from "@expo/vector-icons";
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "../ThemedText";

const AuthGoogle = async () => {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  });
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log("Google Sign-In Success:");
    console.log(JSON.stringify(userInfo, null, 2));
    router.push("/(tabs)");
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          console.log("Google Sign-In Cancelled.");
          break;
        case statusCodes.IN_PROGRESS:
          console.log("Google Sign-In is already in progress.");
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          console.log("Google Play services not available or outdated.");
          break;
        default:
          console.log("Google Sign-In Error:", error);
      }
    } else {
      console.log("Non-Google Sign-In Error:", error);
    }
  }
};

const ButtonAuthGoogle = () => {
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
      onPress={AuthGoogle}
    >
      <AntDesign name="google" size={24} color="white" />
      <ThemedText style={{ color: "white", fontWeight: "600" }}>
        Sign in with Google
      </ThemedText>
    </TouchableOpacity>
  );
};

export default ButtonAuthGoogle;
