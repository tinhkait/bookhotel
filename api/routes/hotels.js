import express from "express";
import Hotel from "../models/Hotel.js";
import { deleteHotel, getHotel, getHotels, updateHotel,  createHotel, countByCity, countByType} from "../controller/hotel.js";
import { verifyAdmin } from "../ultils/verifyToken.js";
const router = express.Router();

//Create
router.post("/",  verifyAdmin, createHotel);
//Update

router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);
//Get All
router.get("/find/:id", getHotel);

router.get("/", getHotels);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);

export default router;
