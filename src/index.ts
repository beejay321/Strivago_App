import mongoose from "mongoose";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import server from "./server";

process.env.TS_NODE_DEV && require("dotenv").config();

const PORT = process.env.PORT;
const { MONGO_CONNECTION } = process.env;

if (!MONGO_CONNECTION) throw new Error("No URL specified");

mongoose.connect(MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  server.listen(PORT, () => {
    console.table(listEndpoints(server));
    console.log("server is running on PORT:", PORT);
  });
});

