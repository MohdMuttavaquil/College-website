import mongoose from "mongoose"

const dbConnectio = () =>{mongoose.connect(process.env.MONGOOBD_CONACTION).then(console.log("DB connected"))}

export default dbConnectio