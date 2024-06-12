import WelcomeScreen from "@/features/Welcome/WelcomeScreen";
import { Stack } from "expo-router";
import { NetworkProvider } from "react-native-offline";

const StackLayout = () => {
  return (
    <NetworkProvider>
      <Stack>
        <Stack.Screen name="welcome"  options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </NetworkProvider>
  );
};

export default StackLayout;
