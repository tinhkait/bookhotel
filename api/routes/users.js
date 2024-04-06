import express from "express";
import Hotel from "../models/User.js";
import { deleteUser, getUser, getUsers, updateUser} from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../ultils/verifyToken.js";

const router = express.Router();

router.put("/:id", verifyUser,updateUser);

//Deletessss
router.delete("/:id", verifyUser, deleteUser);
//Get All
router.get("/:id", verifyUser, getUser);

router.get("/get", verifyAdmin, getUsers);

export default router