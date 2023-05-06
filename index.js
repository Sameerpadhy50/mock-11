const express = require("express");
const mongoose = require("mongoose");
const bookRouter = require("./routes/bookRouter");
const orderRouter = require("./routes/orderRouter");
const userRouter = require("./routes/userRouter");

const app = express();

app.use(express.json());
app.use("/api/books",bookRouter)
app.use("/api",orderRouter)
app.use("/api",userRouter)
const connnectDB = () => {
  mongoose
    .connect(
      "mongodb://127.0.0.1:27017/mock-xi"
    )
    .then(() => console.log("💻 Mondodb Connected"))
    .catch((err) => console.error(err));
};

app.get("/", (req, res) => {
  res.send("Server working 🔥");
});

const port = process.env.PORT || 8080;

app.listen(port, connnectDB(),() => console.log(`Server running on port ${port} 🔥`));
