import express, { Router } from "express";
import mongoose from "mongoose";
import route from "./route/route.js";

const app = express();

app.use("/users", route);

const PORT = 8000;
const URL =
  "mongodb+srv://laleetdb:8080@cluster0.iikjf.mongodb.net/PROJECT0?retryWrites=true&w=majority";

mongoose
  .connect(URL, {
    //   userNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

console.log("hello laleet");
