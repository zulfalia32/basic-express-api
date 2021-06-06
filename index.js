const express = require("express");

const app = express();

const port = process.env.PORT || '4000';

app.get("/test", (req, res) => {
    res.send("Your Express API is up and running!");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);    
});