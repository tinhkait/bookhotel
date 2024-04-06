import express from "express";

const router = express.Router();

import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controller/room.js";

import {verifyAdmin} from "../ultils/verifyToken.js"

//Create
router.post("/:hotelid",  verifyAdmin, createRoom);
//Update

router.put("/:id", verifyAdmin, updateRoom);

//Delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//Get All
router.get("/:id", getRoom);

router.get("/", getRooms);

export default router