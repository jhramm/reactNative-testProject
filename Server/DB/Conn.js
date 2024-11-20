const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jhamiltonramm:kh2ReBWziaJuhRID@jhramm.zivdd.mongodb.net/jason-native7/jason-native").then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("e");
});