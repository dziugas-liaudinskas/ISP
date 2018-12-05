// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const UserSchema = new Schema(
    {
        // id: mongoose.Types.ObjectId(),
        name: String,
        surname: String,
        loginName: String,
        password: String,
    },
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", UserSchema);
