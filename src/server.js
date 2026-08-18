import { app } from "../src/app.js";
import { connectDB } from "../src/db/mongoDb.js";

import "dotenv/config";

const PORT = process.env.PORT || 5000;
const createServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`App server Running on the PORT ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

createServer();
