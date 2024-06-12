import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card/Card";
import Feather from "@expo/vector-icons/Feather";
import { Image, Text, View, TouchableOpacity, Modal } from "react-native";
import { useIsConnected } from "react-native-offline";
import axios from "axios";
import PokemonList from "./PokemonList";
import { useRouter } from "expo-router";
import Reanimated, { PinwheelIn, SlideInDown } from "react-native-reanimated";
import ModalLayout from "../layouts/ModalLayout/ModalLayout";
import FilterPokemonModal from "./modals/FilterPokemonModal";

const PokemonScreen = () => {
  const isConnected = useIsConnected();
  const router = useRouter();

  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [filter, setFilter] = useState({ name: "", type: "" });

  const [offset, setOffset] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const handleOpenFilterModal = () => {
    setIsFilterModalVisible(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalVisible(false);
  };

  const handleApplyFilter = (newFilter) => {
    setFilter(newFilter);
    setIsFilterModalVisible(false);
  };

  const handleClearFilter = () => {
    setFilter({ name: "", type: "" });
    setIsFilterModalVisible(false);
  };

  const fetchPokemons = async (limit, offset) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`, {
        params: {
          limit: limit,
          offset: offset,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchPokemonDetails = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const loadPokemons = async (newOffset) => {
    if (isLoading || isEndReached) return;
    setIsLoading(true);
    const pokemonList = await fetchPokemons(20, newOffset);
    const pokemonDetailsPromises = pokemonList.map((pokemon) =>
      fetchPokemonDetails(pokemon.url)
    );
    const newPokemons = await Promise.all(pokemonDetailsPromises);
    if (newPokemons.length === 0) setIsEndReached(true);
    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
    setOffset(newOffset + 20);
    setIsLoading(false);
  };

  const refreshPokemons = async () => {
    setIsRefreshing(true);
    const pokemonList = await fetchPokemons(20, 0);
    const pokemonDetailsPromises = pokemonList.map((pokemon) =>
      fetchPokemonDetails(pokemon.url)
    );
    const newPokemons = await Promise.all(pokemonDetailsPromises);
    setPokemons(newPokemons);
    setOffset(20);
    setIsEndReached(false);
    setIsRefreshing(false);
  };

  const applyFilters = () => {
    const { name, type } = filter;
    const filtered = pokemons.filter((pokemon) => {
      const matchesName = name ? pokemon.name.toLowerCase().includes(name.toLowerCase()) : true;
      const matchesType = type ? pokemon.types.some(t => t.type.name.toLowerCase().includes(type.toLowerCase())) : true;
      return matchesName && matchesType;
    });
    setFilteredPokemons(filtered);
  };

  useEffect(() => {
    loadPokemons(offset);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [pokemons, filter]);

  return (
    <>
      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent
        visible={isFilterModalVisible}
        onRequestClose={handleCloseFilterModal}
      >
        <ModalLayout
          title="Filtrar"
          fullScreen
          onClose={handleCloseFilterModal}
        >
          <FilterPokemonModal
            isVisible={isFilterModalVisible}
            onClose={() => setIsFilterModalVisible(false)}
            onApplyFilter={handleApplyFilter}
            onClearFilter={handleClearFilter}
            initialFilter={filter}
          />
        </ModalLayout>
      </Modal>
      <View className="flex-1 bg-slate-300 px-1">
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={router.back}
          className="p-2"
        >
          <Feather name="arrow-left" size={28} color="#dc2626" />
        </TouchableOpacity>

        <Reanimated.Image
          entering={PinwheelIn.duration(700)}
          source={require("../../../assets/pokeball.png")}
          resizeMode="contain"
          className="items-center w-full h-1/5 mb-4"
        />
        <Reanimated.View
          entering={SlideInDown.duration(500)}
          className="flex-1"
        >
          <Card className="flex-1">
            <CardHeader className="flex-row justify-between items-center bg-red-600">
              <CardTitle className="text-slate-50">Pokedex</CardTitle>
              <View className="flex-1 flex-row justify-between items-center">
                <Text className="px-1 pt-0.5 font-medium text-[11px] text-slate-300">
                  ({filteredPokemons.length})
                </Text>
                <View className="flex-row">
                  <TouchableOpacity
                    className="mr-4"
                    onPress={handleOpenFilterModal}
                  >
                    <Feather name="filter" size={16} color={"#fff"} />
                  </TouchableOpacity>
                  <Text
                    className={
                      isConnected ? "text-green-500" : "text-slate-300"
                    }
                  >
                    {isConnected ? (
                      <Feather name="wifi" size={16} />
                    ) : (
                      <Feather name="wifi-off" size={16} />
                    )}
                  </Text>
                </View>
              </View>
            </CardHeader>

            <CardContent className="p-0 flex-1">
              {filteredPokemons.length === 0 ? (
                <View className="flex-1 justify-center items-center">
                  <Text className="text-slate-500 text-lg">Nenhum Pokémon encontrado</Text>
                </View>
              ) : (
                <PokemonList
                  pokemons={filteredPokemons}
                  isLoading={isLoading}
                  isRefreshing={isRefreshing}
                  onRefresh={refreshPokemons}
                  onLoadMore={() => loadPokemons(offset)}
                />
              )}
            </CardContent>
          </Card>
        </Reanimated.View>
      </View>
    </>
  );
};

export default PokemonScreen;
