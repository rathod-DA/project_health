import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const URL = process.env.URL;

// your ping loops
const check = async () => {
  try {
    console.log("Url is: ", URL);
    await axios.post(URL);
    console.log("Pinged");
  } catch (err) {
    console.log("Error pinging:", err.message);
  }
};

setInterval(check, 2 * 60 * 1000);

const awake = async () => {
  try {
    await axios.get(process.env.self_url);
  } catch (err) {
    console.log("Error pinging awake:", err.message);
  }
};

setInterval(awake, 5 * 60 * 1000);

// dummy server so Render doesn’t freak out
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Service running"));
