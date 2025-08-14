import { onlinePay, payReceipt, verifyPayment } from "../Controllers/feePayment.js";
import express from "express"

const payRoute = express.Router()

payRoute.post("/onlinepay", onlinePay)
payRoute.post("/verifypay", verifyPayment)
payRoute.get("/receipt", payReceipt)

export default payRoute