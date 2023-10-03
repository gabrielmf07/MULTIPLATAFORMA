import React from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

import RecipeCard from "./RecipeCard";
import { recipies } from "./Data";

const Recipies = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        {recipies.map((recipe, i) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("RecipiesDetail", { recipe })}
            key={i}
          >
            <RecipeCard recipe={recipe} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Recipies;
