import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter();

  return (
    <>
    <View className="bg-red-600 h-8"></View>
      <View className="flex-1 bg-slate-300">
        <View className="items-center px-2">
          <Image
            source={require("../../../assets/logo.png")}
            resizeMode="contain"
            className="w-full"
          />

          <Text className="text-slate-800 font-extrabold text-[16px] mb-4">
            Clique na Pokébola para entrar !
          </Text>

          <View>
            <TouchableOpacity
              className="items-center justify-center h-32 w-32 rounded-full overflow-hidden shadow-2xl shadow-black"
              onPress={() => router.push("/(tabs)/pokedex")}
            >
              <View className="absolute inset-0 h-full w-full bg-red-600" />
              <View className="absolute inset-y-1/2 h-1/2 w-full bg-slate-50" />
              <View className="absolute inset-y-1/2 w-full h-1 bg-black" />
              <View className="absolute h-12 w-12 bg-black rounded-full flex items-center justify-center">
                <View className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                  <Text className="text-black font-extrabold text-[12px]">
                    Entrar
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="bg-red-600 h-8"></View>
    </>
  );
};

export default WelcomeScreen;
