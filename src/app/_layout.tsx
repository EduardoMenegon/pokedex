import WelcomeScreen from "@/features/Welcome/WelcomeScreen";
import { Stack } from "expo-router";
import { NetworkProvider } from "react-native-offline";

const StackLayout = () => {
  return (
    <NetworkProvider>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </NetworkProvider>
  );
};

export default StackLayout;
