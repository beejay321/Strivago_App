import express from "express";
import cors from "cors";
import accomRouter from "./services/accommodation";
import destinationRouter from "./services/destinations/index";

const server = express();
server.use(cors());
server.use(express.json());

server.use("/accommodation", accomRouter);
server.use("/destination", destinationRouter);

export default server;
