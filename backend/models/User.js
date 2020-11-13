const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
    {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        username: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        created_at: {
            type: Date,
            default: new Date(),
        },
        updated_at: {
            type: Date,
            default: new Date(),
        },
    },
    {
        collection: "User",
    }
);

module.exports = mongoose.model("User", User);