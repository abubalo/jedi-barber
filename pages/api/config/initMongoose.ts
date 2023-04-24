import mongoose from "mongoose";

export async function mongoConfig() {
  const mongoUrl = process.env.MONGODB_URL;

  if (!mongoUrl) {
    throw new Error("MongoDB URL is not defined");
  }
  mongoose.set({ strictQuery: true });
  mongoose.connect(mongoUrl);

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("MongoDB connected!");
  });
}
