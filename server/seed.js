import mongoose from "mongoose";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const seed = async () => {
  try {
    // Read the JSON data from the file
    const defaultDataFilePath = path.join(__dirname, "../defaultData.json");
    const rawData = await fs.readFile(defaultDataFilePath, "utf-8");
    const data = JSON.parse(rawData);

    for (const modelName in data) {
      const Model = mongoose.model(modelName);
      const defaultData = data[modelName];
      await Model.insertMany(defaultData);
      console.log(`Default data for model "${modelName}" seeded successfully!`);
    }

    // Graceful shutdown and delete the default data
    process.on("SIGINT", async () => {
      try {
        for (const modelName in data) {
          const Model = mongoose.model(modelName);
          await Model.deleteMany({});
          console.log(`Default data for model "${modelName}" deleted.`);
        }
        console.log("Default data deleted before shutdown.");
        process.exit(0);
      } catch (error) {
        console.error("Error deleting default data on shutdown:", error);
        process.exit(1);
      }
    });
  } catch (error) {
    console.error("Error seeding default data:", error);
  }
};
export default seed;
