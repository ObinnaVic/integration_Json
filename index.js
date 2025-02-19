const express = require('express');
const {Spec} = require('./data.js');

const app = express();
app.use(express.json());


app.get("/integration.json", (req, res) => {
    return res.status(200).json({
        data: Spec,
        "status": "accepted"
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`MongoDB Monitor running on port ${PORT}`);
});