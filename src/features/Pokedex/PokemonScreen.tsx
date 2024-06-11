import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card/Card";
import Feather from "@expo/vector-icons/Feather";
import { Image, Text, View, ActivityIndicator } from "react-native";
import { useIsConnected } from "react-native-offline";
import axios from "axios";
import PokemonList from "./PokemonList";

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

const PokemonScreen = () => {
  const isConnected = useIsConnected();

  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  const loadPokemons = async (newOffset) => {
    if (isLoading || isEndReached) return;
    setIsLoading(true);
    const pokemonList = await fetchPokemons(20, newOffset);
    const pokemonDetailsPromises = pokemonList.map((pokemon) => fetchPokemonDetails(pokemon.url));
    const newPokemons = await Promise.all(pokemonDetailsPromises);
    if (newPokemons.length === 0) setIsEndReached(true);
    setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
    setOffset(newOffset + 20);
    setIsLoading(false);
  };

  const refreshPokemons = async () => {
    setIsRefreshing(true);
    const pokemonList = await fetchPokemons(20, 0);
    const pokemonDetailsPromises = pokemonList.map((pokemon) => fetchPokemonDetails(pokemon.url));
    const newPokemons = await Promise.all(pokemonDetailsPromises);
    setPokemons(newPokemons);
    setOffset(20);
    setIsEndReached(false);
    setIsRefreshing(false);
  };

  useEffect(() => {
    loadPokemons(offset);
  }, []);

  return (
    <View className="flex-1 bg-blue-400">
      <View className="items-center">
        <Image source={require("../../../assets/logo.png")} resizeMode="contain" />
      </View>

      <Card className="flex-1">
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle>Pokedex</CardTitle>
          <View className="flex-1 flex-row justify-between items-center">
            <Text className="px-1 pt-0.5 font-medium text-[11px] text-slate-400">
              ({pokemons.length})
            </Text>
            <Text className={isConnected ? "text-green-500" : "text-red-500"}>
              {isConnected ? (
                <Feather name="wifi" size={16} />
              ) : (
                <Feather name="wifi-off" size={16} />
              )}
            </Text>
          </View>
        </CardHeader>

        <CardContent className="p-0 flex-1">
          <PokemonList
            pokemons={pokemons}
            isLoading={isLoading}
            isRefreshing={isRefreshing}
            onRefresh={refreshPokemons}
            onLoadMore={() => loadPokemons(offset)}
          />
        </CardContent>
      </Card>
    </View>
  );
};

export default PokemonScreen;
