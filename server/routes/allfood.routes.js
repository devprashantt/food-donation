import { Router } from "express";
import Food from "../models/food.js";

const router = Router();

router.get("/allfoods", async (req, res) => {
    try {
        const allFood = await Food.find();
        res.status(200).json(allFood);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;
