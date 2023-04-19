const food = new Food({
    name: 'Canned Soup',
    quantity: 5,
    expiryDate: new Date('2023-05-01'),
    donor: user._id,
});

await food.save();

user.donatedFood.push(food._id);
await user.save();
