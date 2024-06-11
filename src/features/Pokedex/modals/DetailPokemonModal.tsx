import { View, Text, Image } from "react-native";
import React from "react";

interface DetailsTaskModalProps {
  pokemon: any;
  color: any;
  onClose: () => void;
}

const DetailPokemonModal = ({
  color,
  pokemon,
}: DetailsTaskModalProps) => {
  return (
    <View className={`${color} flex-1 p-2`}>
      <View>
        <Image
          source={{ uri: pokemon.sprites.other.home.front_default }}
          style={{ width: 350, height: 300 }}
          resizeMode="contain"
        />
      </View>

      <View className="bg-slate-50 flex-1 rounded-t-3xl p-4">
        <View className="gap-2 mb-4">
          <View className="border-b border-slate-400">
            <Text className="text-[18px] font-extrabold text-slate-800">
              About
            </Text>
          </View>
          <View className="flex-row justify-between w-1/2">
            <Text className="text-[16px] text-slate-400">Name</Text>
            <Text className="text-[16px] font-bold text-slate-800">
              {pokemon.name}
            </Text>
          </View>
          <View className="flex-row justify-between w-1/2">
            <Text className="text-[16px] text-slate-400">Base experience</Text>
            <Text className="text-[16px] font-bold text-slate-800">
              {pokemon.base_experience}
            </Text>
          </View>
          <View className="flex-row justify-between w-1/2">
            <Text className="text-[16px] text-slate-400">Height</Text>
            <Text className="text-[16px] font-bold text-slate-800">
              {pokemon.height}
            </Text>
          </View>
          <View className="flex-row justify-between w-1/2">
            <Text className="text-[16px] text-slate-400">Weight</Text>
            <Text className="text-[16px] font-bold text-slate-800">
              {pokemon.weight}
            </Text>
          </View>
        </View>

        <View className="gap-2 mb-2">
          <View className="border-b border-slate-400">
            <Text className="text-[18px] font-extrabold text-slate-800">
              Abilities
            </Text>
          </View>
          <View className="gap-2">
            {pokemon.abilities.map((ability: any, index: number) => (
              <Text className="text-[16px] text-slate-800 uppercase">
                {ability.ability.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailPokemonModal;
