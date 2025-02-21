import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/', {
    });
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1); // Finaliza el proceso si no se puede conectar
  }
};

export default connectDB;