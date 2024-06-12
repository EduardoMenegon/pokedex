import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TextInput, TouchableOpacity } from "react-native";


const FilterPokemonModal = ({ onApplyFilter, onClearFilter, initialFilter }) => {

  const { t } = useTranslation();

  const [filterName, setFilterName] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    setFilterName(initialFilter.name);
    setFilterType(initialFilter.type);
  }, [initialFilter]);

  const handleApplyFilter = () => {
    onApplyFilter({ name: filterName, type: filterType });
  };

  const handleClearFilter = () => {
    setFilterName("");
    setFilterType("");
    onClearFilter();
  };

  return (
    <View className="p-4">
      <View className="mb-2">
        <Text className="text-[12px] text-slate-800 mb-1">{t("Nome")}</Text>
        <TextInput
          className="border border-slate-300 p-1 rounded-md"
          value={filterName}
          onChangeText={setFilterName}
          placeholder={t("Digite o nome do Pokémon")}
        />
      </View>
      <View className="mb-4">
        <Text className="text-[12px] text-slate-800 mb-1">{t("Tipo")}</Text>
        <TextInput
          className="border border-slate-300 p-1 rounded-md"
          value={filterType}
          onChangeText={setFilterType}
          placeholder={t("Digite o tipo do Pokémon")}
        />
      </View>
      <View className="flex-row justify-around">
        <TouchableOpacity onPress={handleClearFilter} className="p-2 px-4 rounded-md bg-red-600">
          <Text className="text-slate-50 font-extrabold text-[16px]">{t("Limpar")}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleApplyFilter} className="p-2  px-4 rounded-md bg-green-600">
          <Text className="text-slate-50 font-extrabold text-[16px]">{t("Aplicar")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterPokemonModal;
