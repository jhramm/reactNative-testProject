import axios from "axios";
import { useEffect, useState } from "react";
import React, { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function RecipePage() {
  const [recipe, setRecipe] = useState([]);

  const getData = () => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        setRecipe(res.data.recipes);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <View style={styles.background}>
        <Text style={styles.text}>Recipe Page</Text>
      </View>
      <ScrollView>
        {recipe.map((item) => {
          return (
            <View key={item.id} style={styles.recipeContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.ingredientTitle}>Ingredients:</Text>
              {item.ingredients.map((ingredient) => {
                return (
                  <Text key={ingredient.id} style={styles.ingredients}>
                    - {ingredient}
                  </Text>
                );
              })}
              <Text style={styles.instructions}>Instructions:{'\n'}{'\n'}{item.instructions}</Text>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recipeContainer: {
    flexDirection: "column",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    justifyContent: "space-between"
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    margin: "auto",
  },
  name: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  ingredients: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
    textAlign: "center"
  },
  ingredientTitle: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 18,
    textAlign: "center",
  },
  instructions: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 16,
    textAlign: "center"
  },
});
