export default {
  expo: {
    name: "TGTET",
    slug: "tgtet",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#3b82f6"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.tgtet.app",
      googleServicesFile: process.env.GOOGLE_SERVICES_INFOPLIST || undefined
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#3b82f6"
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: "com.tgtet.app",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON || undefined
    },
    web: {
      favicon: "./assets/favicon.png",
      bundler: "metro"
    },
    scheme: "tgtet",
    plugins: [
      "expo-router",
      // Temporarily using in-browser auth instead of native Google Sign-In
      // "@react-native-google-signin/google-signin"
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      eas: {
        projectId: "41217559-723c-4449-a10b-46de693b6e84"
      },
      EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID
    }
  }
};
