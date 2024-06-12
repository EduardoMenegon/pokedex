import React from "react";
import { View, Text, Image } from "react-native";
import { useTranslation } from "react-i18next";

interface DetailsPokemonModalProps {
  pokemon: any;
  color: string;
  getColorByType: Function;
  onClose: () => void;
}

const DetailPokemonModal = ({
  color,
  pokemon,
  getColorByType,
}: DetailsPokemonModalProps) => {
  const { t } = useTranslation();

  return (
    <View className={`${color} flex-1 px-2`}>
      <View>
        <View className="flex-row justify-between mt-4 mx-4">
          <Text className="text-[24px] font-extrabold text-slate-800 uppercase">
            {pokemon.name}
          </Text>
          <Text className="text-[20px] text-slate-600">#{pokemon.id}</Text>
        </View>
        <View className="flex-row gap-1 p-3">
          {pokemon.types.map((typeInfo, index) => (
            <View
              key={index}
              className={`items-center ${getColorByType(
                typeInfo.type.name
              )} rounded-2xl px-2 py-1 flex-1 border-slate-800 border`}
            >
              <Text className="uppercase text-[12px] text-white">
                {typeInfo.type.name}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View className="items-center">
        <Image
          source={{ uri: pokemon.sprites.other.home.front_default }}
          style={{ width: 300, height: 250 }}
          resizeMode="contain"
        />
      </View>

      <View className="bg-slate-50 flex-1 rounded-t-3xl p-4">
        <View className="gap-2 mb-4">
          <View className="border-b border-slate-400">
            <Text className="text-[18px] font-extrabold text-slate-800">
              {t("Sobre")}
            </Text>
          </View>
          <View className="flex-row justify-between w-1/2">
            <Text className="text-[16px] text-slate-400">
              {t("Experiência Base")}
            </Text>
            <Text className="text-[16px] font-bold text-slate-800">
              {pokemon.base_experience}
            </Text>
          </View>
          <View className="flex-row justify-between w-1/2">
            <Text className="text-[16px] text-slate-400">{t("Altura")}</Text>
            <Text className="text-[16px] font-bold text-slate-800">
              {pokemon.height}
            </Text>
          </View>
          <View className="flex-row justify-between w-1/2">
            <Text className="text-[16px] text-slate-400">{t("Peso")}</Text>
            <Text className="text-[16px] font-bold text-slate-800">
              {pokemon.weight}
            </Text>
          </View>
        </View>

        <View className="gap-2 mb-2">
          <View className="border-b border-slate-400">
            <Text className="text-[18px] font-extrabold text-slate-800">
              {t("Abilities")}
            </Text>
          </View>
          <View>
            {pokemon.abilities.map((ability: any, index: number) => (
              <Text
                key={index}
                className="text-[16px] text-slate-800 font-bold uppercase"
              >
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
