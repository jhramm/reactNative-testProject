const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/jason-native").then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("e");
});