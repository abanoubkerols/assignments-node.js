// const express=require("express");
import express from "express";
const server = express();
server.use(express.json());

// const userRouter=require("./modules/user/user.route")
import userRouter from "./modules/user/user.route.js";
server.use(userRouter);






server.listen(4000,()=>{
  console.log("server run");
});
