import React, { useEffect, useReducer, useState } from "react";
import { NewRecipeInterface } from "../Interfaces/NewRecipeInterface";
import axios from "axios";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function AllRecipe() {
  const [recipes, setRecipes] = useState<NewRecipeInterface[]>([]);
  const [update, forceUpdate] = useReducer((x) => x + 1, 0);

  const getAllRecipes = () => {
    axios
      .get("https://pprc-backend.onrender.com/api/recipe/")
      .then((res) => {
        console.log(res);
        setRecipes(res.data);
      })
      .catch(() => {
        console.log("Failed to get all recipes");
      });
  };
  useEffect(() => {
    getAllRecipes();
  }, [update]);

  const [recipeName, setRecipeName] = useState("");
  const [ingredientsName, setIngredientsName] = useState("");
  const [instructionsName, setInstructionsName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");

  const [updateRecipeName, setUpdateRecipeName] = useState("");
  const [updateIngredientsName, setUpdateIngredientsName] = useState("");
  const [updateInstructionsName, setUpdateInstructionsName] = useState("");
  const [updatePrepTime, setUpdatePrepTime] = useState("");
  const [updateCookTime, setUpdateCookTime] = useState("");
  const [recipeId, setRecipeId] = useState("");
  const [editRecipe, setEditRecipe] = useState(false);

  const addRecipe = () => {
    const payload = {
      recipeName: recipeName,
      ingredients: ingredientsName,
      instructions: instructionsName,
      prepTime: prepTime,
      cookTime: cookTime,
    };
    axios
      .post("https://pprc-backend.onrender.com/api/recipe/", payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    forceUpdate();
  };

  const updateRecipe = () => {
    const payload = {
      recipeName: updateRecipeName,
      ingredients: updateIngredientsName,
      instructions: updateInstructionsName,
      prepTime: updatePrepTime,
      cookTime: updateCookTime,
    };
    axios
      .patch(
        `https://pprc-backend.onrender.com/api/recipe/${recipeId}`,
        payload
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    forceUpdate();
  };

  const deleteRecipe = (id: any) => {
    axios
      .delete(`https://pprc-backend.onrender.com/api/recipe/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    forceUpdate();
  };
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "black" }}>
        {!editRecipe ? (
          <>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  marginBottom: 30,
                  marginTop: 20,
                  textAlign: "center",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                All Recipes
              </Text>
              <Text style={{ color: "white", marginBottom: 10 }}>
                Add New Recipe
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Recipe Name:
                  </Text>

                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Recipe Name"
                    onChangeText={setRecipeName}
                  />
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Ingredients:
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Ingredients"
                    onChangeText={setIngredientsName}
                  />
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Instructions:
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Instructions"
                    onChangeText={setInstructionsName}
                  />
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Prep Time:
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Prep Time"
                    onChangeText={setPrepTime}
                  />
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Cook Time:
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Cook Time"
                    onChangeText={setCookTime}
                  />
                </View>
              </View>
            </View>

            <Pressable onPress={addRecipe}>
              <View
                style={{
                  backgroundColor: "lightblue",
                  width: 150,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  borderRadius: 10,
                  margin: "auto",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{ color: "black", fontSize: 18, fontWeight: "bold" }}
                >
                  Submit
                </Text>
              </View>
            </Pressable>
          </>
        ) : (
          <>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  marginBottom: 30,
                  marginTop: 20,
                  textAlign: "center",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                All Recipes
              </Text>
              <Text style={{ color: "white", marginBottom: 10 }}>
                Add New Recipe
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                }}
              >
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Recipe Name:
                  </Text>

                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Recipe Name"
                    onChangeText={setUpdateRecipeName}
                    value={updateRecipeName}
                  />
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Ingredients:
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Ingredients"
                    onChangeText={setUpdateIngredientsName}
                    value={updateIngredientsName}
                  />
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Instructions:
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Instructions"
                    onChangeText={setUpdateInstructionsName}
                    value={updateInstructionsName}
                  />
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Prep Time:
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Prep Time"
                    onChangeText={setUpdatePrepTime}
                    value={updatePrepTime}
                  />
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text
                    style={{ color: "white", marginBottom: 10, marginTop: 20 }}
                  >
                    Cook Time:
                  </Text>
                  <TextInput
                    style={{
                      backgroundColor: "white",
                      width: 150,
                      height: 40,
                      color: "black",
                      paddingLeft: 10,
                    }}
                    placeholder="Cook Time"
                    onChangeText={setUpdateCookTime}
                    value={updateCookTime}
                  />
                </View>
              </View>
            </View>

            <Pressable onPress={updateRecipe}>
              <View
                style={{
                  backgroundColor: "lightblue",
                  width: 150,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  borderRadius: 10,
                  margin: "auto",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{ color: "black", fontSize: 18, fontWeight: "bold" }}
                >
                  Update Recipe
                </Text>
              </View>
            </Pressable>
          </>
        )}
      </SafeAreaView>

      <ScrollView>
        <View style={{ padding: 30, height: 1000 }}>
          {recipes.map((item) => {
            return (
              <View>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      textDecorationLine: "underline",
                    }}
                  >
                    Recipe
                  </Text>
                </View>
                <View
                  style={{
                    marginBottom: 20,
                    backgroundColor: "lightblue",
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  <Text key={item.id} style={{ textAlign: "center" }}>
                    Recipe Name: {item.recipeName}
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    Ingredients: {item.ingredients}
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    Instructions: {item.instructions}
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    Prep Time: {item.prepTime}
                  </Text>
                  <Text style={{ textAlign: "center" }}>
                    Cooking Time: {item.cookTime}
                  </Text>
                  <View
                    style={{ display: "flex", flexDirection: "row", gap: 10, margin: "auto" }}
                  >
                    <Pressable
                      onPress={() => {
                        setEditRecipe(true);
                        setRecipeId(item._id);
                        setUpdateRecipeName(item.recipeName);
                        setUpdateIngredientsName(item.ingredients);
                        setUpdateInstructionsName(item.instructions);
                        setUpdatePrepTime(item.prepTime);
                        setUpdateCookTime(item.cookTime);
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "green",
                          width: 150,
                          height: 40,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                          borderRadius: 10,
                          margin: "auto",
                          marginTop: 20,
                          marginBottom: 20,
                        }}
                      >
                        <Text
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: "bold",
                          }}
                        >
                          Edit
                        </Text>
                      </View>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        deleteRecipe(item._id);
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "red",
                          width: 150,
                          height: 40,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "row",
                          borderRadius: 10,
                          margin: "auto",
                          marginTop: 20,
                          marginBottom: 20,
                        }}
                      >
                        <Text
                          style={{
                            color: "black",
                            fontSize: 18,
                            fontWeight: "bold",
                          }}
                        >
                          Delete
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
