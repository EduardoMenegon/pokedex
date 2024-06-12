import { ActivityIndicator, View } from "react-native";

interface LoadingProps {
  size?: "small" | "large";
}

export const Loading = ({ size = "large" }: LoadingProps) => {
  return (
    <View className="flex-1 justify-center items-center p-2">
      <ActivityIndicator size={size} color="#ef4444" />
    </View>
  );
};
