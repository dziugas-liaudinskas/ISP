// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const ClientSchema = new Schema(
    {
        // id: String,
        email: String,
        code: String,
        weight: Number,
        height: Number,
        age: Number,
        isMan: Boolean,
        membershipPeriod: Number,
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Client", ClientSchema);
