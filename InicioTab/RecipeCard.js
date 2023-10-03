import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const RecipeCard = ({ recipe }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: recipe.image }} />
      <View style={styles.details}>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.info}>
          <AntDesign name="clockcircle" size={18} color="#666" />
          <Text style={styles.time}>{recipe.time} min</Text>
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={18} color="#f5c12e" />
            <Text style={styles.rating}>{recipe.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    marginLeft: 5,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  rating: {
    marginLeft: 5,
    color: '#666',
  },
});

export default RecipeCard;
