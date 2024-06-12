import React, { useCallback } from "react";
import { VirtualizedList, RefreshControl } from "react-native";

import PokemonItem from "./items/PokemonItem";
import { Loading } from "@/components/Loading/Loading";


const PokemonList = ({ pokemons, isLoading, isRefreshing, onLoadMore, onRefresh }) => {
  const getItemCount = (data) => data.length;
  const getItem = (data, index) => data[index];

  const renderItem = useCallback(({ item }) => <PokemonItem pokemon={item} />, []);

  const renderFooter = () => {
    if (!isLoading) return null;
    return <Loading />;
  };

  return (
    <VirtualizedList
      data={pokemons}
      getItemCount={getItemCount}
      getItem={getItem}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={renderFooter}
      onEndReached={onLoadMore}
      maxToRenderPerBatch={10}
      onEndReachedThreshold={0.1}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor="#4b7bec"
          colors={["#4b7bec"]}
        />
      }
      className="flex-1"
    />
  );
};

export default PokemonList;
