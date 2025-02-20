const express = require('express');
const {Spec} = require('./data.js');
const cors = require('cors');

const app = express();
app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:5000", "https://telex.im"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}

app.use(cors(corsOptions));




app.get("/integration.json", (req, res) => {
    return res.status(200).json({
        data: Spec.data
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`MongoDB Monitor running on port ${PORT}`);
});