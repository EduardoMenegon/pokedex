import HomeScreen from "@/features/HomeScreen";
import { Stack } from "expo-router";
import { NetworkProvider } from "react-native-offline";

const StackLayout = () => {
  return (
    <NetworkProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </NetworkProvider>
  );
};

export default StackLayout;
