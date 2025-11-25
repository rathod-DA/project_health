import axios from "axios";
const URL = process.env.URL || "";

const check = async () => {
  try {
    await axios.get(URL);
    console.log("Pinged");
  } catch (err) {
    console.log("Error pinging:", err.message);
  }
};

setInterval(check, 1000); 
