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
      "@react-native-google-signin/google-signin"
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      eas: {
        projectId: process.env.EAS_PROJECT_ID || "YOUR_EAS_PROJECT_ID"
      },
      EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID
    }
  }
};
