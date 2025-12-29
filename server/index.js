import dotenv from "dotenv";
import ConnectDB from "./config/db.js";
import app from "./app.js";

dotenv.config();

// Connect to MongoDB
ConnectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
