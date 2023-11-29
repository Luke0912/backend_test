// config/database.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.MONGODB_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
