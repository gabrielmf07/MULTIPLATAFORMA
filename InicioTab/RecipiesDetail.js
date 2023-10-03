import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useRoute } from "@react-navigation/native";

const RecipeDetails = () => {
  const route = useRoute();
  const { recipe } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: recipe.image }} />
        <View style={styles.details}>
          <Text style={styles.title}>{recipe.title}</Text>
          <View style={styles.info}>
            <MaterialIcons name="timer" size={18} color="#666" />
            <Text style={styles.time}>{recipe.time} min</Text>
            <MaterialIcons name="star" size={18} color="#FFD700" />
            <Text style={styles.rating}>{recipe.rating}</Text>
          </View>
          <Text style={styles.subtitle}>Ingredients:</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              {ingredient}
            </Text>
          ))}
          <Text style={styles.subtitle}>Instructions:</Text>
          {recipe.instructions.map((instruction, index) => (
            <Text key={index} style={styles.instruction}>
              {instruction}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  time: {
    marginLeft: 5,
    color: "#666",
  },
  rating: {
    marginLeft: 5,
    color: "#FFD700",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  ingredient: {
    fontSize: 16,
    marginVertical: 5,
  },
  instruction: {
    fontSize: 16,
    marginVertical: 5,
    lineHeight: 24,
  },
});

export default RecipeDetails;
