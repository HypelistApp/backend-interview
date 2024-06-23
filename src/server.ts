import express from "express";
import usersRouter from "./routes/users";

const app = express();

app.use(express.json());
app.use("/api", usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
