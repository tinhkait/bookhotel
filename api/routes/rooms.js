import express from "express";

const router = express.Router();

import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controller/room.js";

import {verifyAdmin} from "../ultils/verifyToken.js"

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE

router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router;