import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

userSchema.pre("update", function (next) {
    this.updatedAt = Date.now();
    next();
});

const User = mongoose.model("User", userSchema);

export default User;