const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name should be atleast two characters!"],
    },
    image: {
        type: String,
        required: [true, "ImageUrl is required!"],
        match: [/^https?:\/\//, "Invalid Url!"],
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [1, "Age should be bigger than 1"],
        max: [100, "Age should be lower than 100"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [5, "Minimal length should be at least 5 characters"],
        maxLength: [50, "Maximal description length is 50 characters"],
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        minLength: [5, "Minimal length should be at least 5 characters"],
        maxLength: [50, "Maximal location length is 50 characters"],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    comments: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: "User",
            },
            message: {
                type: String,
                required: [true, "Comment message is required!"],
            },
        },
    ],
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
