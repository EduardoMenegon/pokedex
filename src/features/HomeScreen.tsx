import Feather from "@expo/vector-icons/Feather";

import { Link, router } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {

  const handlePress = () => {
    router.push(`/app/(tabs)`);
  };

  return (
    <View className="flex-1 bg-blue-400 px-4">
      <View className="items-center">
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View className="flex-1 bg-slate-50 rounded-xl p-4">
        <View className="flex-1">
          <Text className="font-medium ">Bem vindo!</Text>

          <View className="flex-1 items-center mb-4 justify-end">

          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
