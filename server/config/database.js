import { connect } from "mongoose";

// localhost -> 127.0.0.1
const connectToDB = async (cb) => {
  try {
    await connect("mongodb+srv://salvmichael202:fushiguro@cluster0.b51zlpo.mongodb.net/")
    // await connect("mongodb+srv://salvmichael202:fushiguro@iscofintech.b51zlpo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    cb?.()
  } catch (error) {
    console.error("ERROR:", error.message)
  }
}

export default connectToDB