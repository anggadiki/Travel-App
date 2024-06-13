// authGoogle.ts
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { router } from "expo-router";

export const authGoogle = async (setUser: any) => {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    webClientId: process.env.SERVER_CLIENT_ID,
  });

  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log("Google Sign-In Success:");
    console.log(JSON.stringify(userInfo, null, 2));

    // Simpan data pengguna ke dalam UserContext
    setUser({
      id: userInfo.user.id,
      name: userInfo.user.name,
      email: userInfo.user.email,
      photo: userInfo.user.photo,
      familyName: userInfo.user.familyName,
      givenName: userInfo.user.givenName,
    });
    console.log("User data saved:", userInfo.user);

    router.push("/(tabs)"); // Navigasi setelah login berhasil

    return true; // Berhasil sign-in
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
    throw error; // Melempar error untuk ditangani di komponen yang memanggil
  }
};
