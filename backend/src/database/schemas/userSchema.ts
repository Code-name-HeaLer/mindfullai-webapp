import { Schema, model } from "mongoose";
const userSchema = new Schema({
	googleID: String,
	name: String,
	age: String,
	email: String,
});
