import mongoose from "mongoose";

const student = new mongoose.Schema({
    fullName : String,
    fatherName : String,
    phoneNo : Number,
    dateOfBerth : String,
    className : String
})

export const studentmodle = mongoose.model("students", student)
