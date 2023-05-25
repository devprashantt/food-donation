import { Router } from "express";

import Food from "../models/food.js";
import User from "../models/user.js";

const router = Router();

// Route to handle food donation form submission
router.post("/fooddonation", async (req, res) => {
    try {
        const { foodName, foodTag, quantity, expiryDate, address, email } = req.body.formData;

        const user = await User.findOne({ email });

        // Save the form data to the database

        const food = await Food.create({
            foodName,
            quantity,
            expiryDate,
            address,
            foodTag,
            user: user._id,
        });

        await food.save();
        user.food.push(food._id);

        res.status(201).json(food);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

export default router;
