import mongoose from "mongoose";
const connection = {};
async function dbConnect() {
  if (connection.isConnected) return;

  const db = await mongoose.connect(
    "mongodb+srv://admin:adminxx@cluster0.9badp.mongodb.net/HWdatabase?retryWrites=true&w=majority",
    {}
  );
  connection.isConnected = db.connection[0].readyState;
  console.log(connection.isConnected);
}
export default dbConnect;
