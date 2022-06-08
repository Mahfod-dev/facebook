import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.DATABASE_URL);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error :${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
