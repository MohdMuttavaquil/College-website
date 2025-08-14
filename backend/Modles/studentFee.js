import mongoose from "mongoose";

const payment = new mongoose.Schema({
    studentName: String,
    rollNo: Number,
    className: String,
    phoneNo: Number,
    amount: Number,
    payment: {type:Boolean, default: false},
    date: {type: String, default: () => new Date().toLocaleString() }
})

export const paymentModel = mongoose.model.payment || mongoose.model("payment", payment)