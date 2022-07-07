const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
    {
        code:{type: Number, required: true, unique: true},
        name:{type: String, required: true},
        unitPrice:{type: Number, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("item", itemSchema);