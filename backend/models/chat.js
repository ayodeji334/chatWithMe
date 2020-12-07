const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last__message: {
        type: String,
    },
    sender__id: {
        type: String,
        required: true,
    },
    created__at: {
        type: String,
        required: true
    },
    chat_type: {
        type: String,
        required: true,
    },
    receiver__id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Chat", chatSchema);