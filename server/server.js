import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import transportsRoutes from "./routes/transportsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import connectDb from "./Db/connect.js";

app.use(express.json());
app.use("/api/transports", transportsRoutes);
app.use("/api", usersRoutes);

app.get("/", (req, res) => {
  res.send("Cloud9 node server active.");
});

const port = process.env.PORT;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_CONNECTION_STRING);
    app.listen(port, () => {
      console.log(`App is listening on port:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
