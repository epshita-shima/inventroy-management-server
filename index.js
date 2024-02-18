const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u4yxlqg.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u4yxlqg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const navbarCollection = client.db("inventory").collection("menu");
    const userCollection = client.db("inventory").collection("users");
    const userRoleCollection = client.db("inventory").collection("userroles");
    app.get("/navbar", async (req, res) => {
      const query = {};
      const cursor = navbarCollection.find(query);
      const data = await cursor.toArray();
      res.send(data);
    });

    app.post("/register", async (req, res) => {
      try {
        const { username, email, password, isActive } = req.body;
        // Check if user already exists
        const existingUser = await userCollection.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "User already exists" });
        } else {
          //  Hash password
          const hashedPassword = await bcrypt.hash(password, 10);
      
          const result = await userCollection.insertOne({
            username,
            email,
            password: hashedPassword,
            isActive,
          });

          res.status(201).json({ message: "User registered successfully" });
        }
        // console.log(existingUser)
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
    });

    app.post("/login", async (req, res) => {
      try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await userCollection.findOne({ email });
   
        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(400).json({ message: "Invalid email or password" });
        }
  
        res.status(200).json({ message: "Login successful" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
      }
    });

    app.get("/getuser", async (req, res) => {
      const query = {};
      const cursor = userCollection.find(query);
      const data = await cursor.toArray();
      res.send(data);
    });
    app.get("/get-user-role", async (req, res) => {
      const query = {};
      const cursor = userRoleCollection.find(query);
      const data = await cursor.toArray();
      res.send(data);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
