const express = require("express");
const connect = require("./configs/db");
const port = 3009;

const itemControllers = require("./controllers/item.controller");
const app = express();

app.use(express.json());
app.use("/items", itemControllers);

app.listen(port, async() =>{
    try{
        await connect();
        console.log(`Listening on port ${port}`)
    }
    catch(err){
        console.log(err.message);
    }
});