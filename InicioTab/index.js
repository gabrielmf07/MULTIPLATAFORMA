import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Recipies from "./Recipies";
import RecipiesDetail from "./RecipiesDetail";

const RecipiesNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <RecipiesNavigator.Navigator
      initialRouteName="Recipies"
    >
      <RecipiesNavigator.Screen
        name="Recipies"
        component={Recipies}
        options={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTitleStyle: {
            color: "#fff",
          },
          headerTitle: "Recetas",
          headerTintColor: '#fff'
        }}
      />
      <RecipiesNavigator.Screen
        name="RecipiesDetail"
        component={RecipiesDetail}
        options={{
          headerStyle: {
            backgroundColor: "#000", // Fondo negro
          },
          headerTitleStyle: {
            color: "#fff",
          },
          headerTitle: "Receta Detalle",
          headerTintColor: '#fff'
        }}
      />
    </RecipiesNavigator.Navigator>
  );
}

export default function Inicio() {
  return <MyStack />;
}
