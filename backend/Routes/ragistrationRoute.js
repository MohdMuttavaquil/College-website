import { newRagistrarion } from "../Controllers/Ragistration.js";
import express from "express"

const ragRoute = express.Router()

ragRoute.post("/ragistration", newRagistrarion)

export default ragRoute 