const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const PORT = process.env.PORT || 5000;
const DATABASE_URI = process.env.DATABASE_URI;
const JWT_SECRET = process.env.JWT_SECRET;

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");
  } catch (error) {
    console.error(`Database connection failed: ${error.message}`);
    process.exit(1); // Exit process on failure
  }
};

// Export variables and functions
module.exports = { 
    PORT,
    DATABASE_URI,
    JWT_SECRET,
    connectDB 
}
