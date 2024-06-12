import ModalLayout from "@/features/layouts/ModalLayout/ModalLayout";
import { router } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image, Modal } from "react-native";
import DetailPokemonModal from "../modals/DetailPokemonModal";

const PokemonItem = ({ pokemon }) => {
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);

  const handleOpenDetailsModal = () => {
    setIsDetailsModalVisible(true);
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsModalVisible(false);
  };

  const getColorByType = (type) => {
    switch (type) {
      case "normal":
        return "bg-yellow-600";
      case "fire":
        return "bg-red-600";
      case "water":
        return "bg-blue-600";
      case "electric":
        return "bg-yellow-400";
      case "grass":
        return "bg-green-500";
      case "ice":
        return "bg-blue-300";
      case "fighting":
        return "bg-red-800";
      case "poison":
        return "bg-purple-700";
      case "ground":
        return "bg-yellow-800";
      case "flying":
        return "bg-blue-400";
      case "psychic":
        return "bg-pink-500";
      case "bug":
        return "bg-green-800";
      case "rock":
        return "bg-gray-600";
      case "ghost":
        return "bg-indigo-800";
      case "dragon":
        return "bg-indigo-600";
      case "dark":
        return "bg-gray-800";
      case "steel":
        return "bg-gray-400";
      case "fairy":
        return "bg-pink-300";
      default:
        return "bg-slate-300";
    }
  };

  const getLightenColorByType = (type) => {
    switch (type) {
      case "normal":
        return "bg-amber-300";
      case "fire":
        return "bg-red-300";
      case "water":
        return "bg-blue-300";
      case "electric":
        return "bg-yellow-200";
      case "grass":
        return "bg-green-200";
      case "ice":
        return "bg-blue-200";
      case "fighting":
        return "bg-red-500";
      case "poison":
        return "bg-purple-500";
      case "ground":
        return "bg-yellow-600";
      case "flying":
        return "bg-blue-400";
      case "psychic":
        return "bg-pink-300";
      case "bug":
        return "bg-green-500";
      case "rock":
        return "bg-gray-400";
      case "ghost":
        return "bg-indigo-500";
      case "dragon":
        return "bg-indigo-600";
      case "dark":
        return "bg-gray-800";
      case "steel":
        return "bg-gray-400";
      case "fairy":
        return "bg-pink-100";
      default:
        return "bg-slate-300";
    }
  };

  return (
    <>
      {/* Details Modal */}
      <Modal
        animationType="slide"
        transparent
        visible={isDetailsModalVisible}
        onRequestClose={handleCloseDetailsModal}
      >
        <ModalLayout
          title="Detalhes"
          fullScreen
          onClose={handleCloseDetailsModal}
        >
          <DetailPokemonModal
            pokemon={pokemon}
            color={getLightenColorByType(pokemon.types[0].type.name)}
            onClose={handleCloseDetailsModal}
            getColorByType={getColorByType}
          />
        </ModalLayout>
      </Modal>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={handleOpenDetailsModal}
        className="border-b"
      >
        <View className="flex-row bg-slate-100">
          <View
            className={`rounded-r-full border-r-2 border-slate-300 ${getLightenColorByType(
              pokemon.types[0].type.name
            )}`}
          >
            <Image
              source={{ uri: pokemon.sprites.other.home.front_default }}
              style={{ width: 120, height: 100 }}
              resizeMode="contain"
            />
          </View>
          <View className="p-4 flex-1">
            <View className="flex-row justify-between">
              <Text className="text-[16px] font-bold text-slate-800 uppercase">
                {pokemon.name}
              </Text>
              <Text className="text-[12px] text-slate-600">#{pokemon.id}</Text>
            </View>

            <View className="flex-row gap-1 items-end flex-1">
              {pokemon.types.map((typeInfo, index) => (
                <View
                  key={index}
                  className={`items-center ${getColorByType(
                    typeInfo.type.name
                  )} rounded-2xl px-2 py-1 flex-1  border-slate-800 border`}
                >
                  <Text className="uppercase text-[12px] text-white">
                    {typeInfo.type.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default PokemonItem;
