const userRoutes = require('./routes/user.routes');
const adminRoutes = require('./routes/admin.routes');
const foodDonationRoutes = require('./routes/fooddonation.routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/', userRoutes);
app.use('/', adminRoutes);
app.use('/', foodDonationRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});