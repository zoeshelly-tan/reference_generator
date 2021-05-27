const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bcrypt = require('bcrypt');
const { response } = require("express");
const saltRound = 10

const app = express();

app.use(express.json());
app.use(cors());

const db= mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"root",
    database:"referenceGenerator_db",
})

app.post("/register",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.hash(password,saltRounds, (err,hash) => {
        if(err){
            console.log(err)
        }
        db.query(
            "INSERT INTO users (username,password) value (?,?)",
            (username,hash),
            (err,result) => {
                console.log(err);
            }
        );

    })
});

app.post("/login",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user WHERE username = ?",
        username,
        (err,result)=>{
            if(err){
                res.send ({err:err});
            }
            if(result.length > 0){
                bcrypt.compare(password,result[0].password, (err,response))
                if(respond){
                    res.send(result)
                }else{
                    res.send({message:"Wrong username/password"})
                }
            }else{
                res.send({message:"User doesn't exit"})
            }
        }
    )
})

app.listen(3001,()=>{
    console.log("running server");
})