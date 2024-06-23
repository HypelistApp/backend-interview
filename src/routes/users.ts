import express from "express";
import db, { User } from "../db/db";
import validateUser from "../validate/validateUser";
import asyncHandler from "../middleware/asyncHandler";

const router = express.Router();

// Get user by ID
router.get(
  "/user/:id",
  asyncHandler(async (req: express.Request, res: express.Response) => {
    const user: User | undefined = await db.getUserById(
      parseInt(req.params.id, 10)
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  })
);

// Create new user
router.post(
  "/user",
  asyncHandler(async (req: express.Request, res: express.Response) => {
    interface CreateUserRequest {
      username: string;
      email: string;
      password: string;
    }

    interface CreateUserResponse {
      id: number;
      username: string;
      email: string;
    }

    const { error } = validateUser(req.body as CreateUserRequest);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const newUser: CreateUserResponse = await db.createUser(
      req.body as CreateUserRequest
    );
    res.status(201).json(newUser);
  })
);

export default router;
