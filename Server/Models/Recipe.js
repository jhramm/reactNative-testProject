const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    }, 
    instructions: {
        type: String,
        required: true,
    },
    prepTime: {
        type: String,
        required: true,
    },
    cookTime: {
        type: String,
        required: true,
    }
    
})
const RecipeSchema = new mongoose.model("RecipeSchema", recipeSchema);
module.exports = RecipeSchema;