import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const URL = process.env.URL || "";

const check = async () => {
  try {
    console.log("Url is, ",process.env.URL);
    await axios.post(URL);
    console.log("Pinged");
  } catch (err) {
    console.log("Error pinging:", err.message);
  }
};

setInterval(check, 1000*60*2); 


const awake = async () => {
    try {
        await axios.get(process.env.self_url);
       
    } catch (err) {
        console.log("Error pinging awake:", err.message);
    }
}
setInterval(awake, 5 * 60 * 1000);
