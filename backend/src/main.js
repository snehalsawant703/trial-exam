const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const {selectUser}= require("./user");
const {addUser}= require("./user");

// http://localhost:4000/user
app.get("/user",async (req, res) =>{
    const list = await selectUser();
    res.json(list);
});

// http://localhost:4000/add-user
//add user 
app.post("/add-user",async (req, res) =>{
    const user = (req.body);
    await addUser(user);
    res.json({message : "user added successfully"});
});

app.listen(4000, () => console.log("server started"));


/**
 * 
 * // http://localhost:4000/1
app.get("/1",async (req, res) =>{
    res.json({message : "1st api page"});
});

// http://localhost:4000/2
app.get("/2",async (req, res) =>{
    res.json({message : "2nd api page"});
});

// http://localhost:4000/3
// post method
app.post("/3",async (req, res) =>{
    res.json({message : "hello post"});
});
 */