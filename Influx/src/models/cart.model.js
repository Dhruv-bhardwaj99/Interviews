const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        item_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"item",
            required:true,
        },
        code:{type:String,required:false,},
        qty:{type:Number, required:true}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("cart", cartSchema);