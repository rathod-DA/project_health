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


const awake = async () => {
    try {
        await axios.get(process.env.self_url);
       
    } catch (err) {
        console.log("Error pinging awake:", err.message);
    }
}
setInterval(awake, 5 * 60 * 1000);
