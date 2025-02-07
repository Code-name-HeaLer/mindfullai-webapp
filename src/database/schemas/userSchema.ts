import { Schema, model } from "mongoose";
const userSchema = new Schema({
	googleID: String,
	name: String,
	email: String,
	avatar: String,
});
export const User = model("user", userSchema);
