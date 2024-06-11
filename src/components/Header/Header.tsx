import { Text, View } from "react-native";

interface HeaderProps {
  leftContent?: React.ReactNode;
  title?: string;
  rightContent?: React.ReactNode;
}

export const Header = ({ title, leftContent, rightContent }: HeaderProps) => {
  return (
    <View className="w-full h-12 mt-2 flex-row justify-between items-center">
      <View className="w-14 h-full">{leftContent && <>{leftContent}</>}</View>

      <View>
        {title && (
          <Text className="font-medium text-base text-slate-700 uppercase">
            {title}
          </Text>
        )}
      </View>

      <View className="mr-1 w-8 h-full">
        {rightContent && <>{rightContent}</>}
      </View>
    </View>
  );
};
