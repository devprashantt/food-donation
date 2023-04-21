import { Router } from "express";
const router = Router();
import Food from "../models/food";

// Route to handle food donation form submission
router.post("/fooddonation", async (req, res) => {
    const { foodName, quantity, expiryDate, donor } = req.body;

    // Save the form data to the database
    try {
        const food = new Food({
            foodName,
            quantity,
            expiryDate,
            donor,
        });

        await food.save();

        res.status(201).json(food);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;
