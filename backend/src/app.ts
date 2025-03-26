import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';
import appointmentRoutes from './routes/appointments';
import ddiCheckerRoutes from './routes/ddiChecker';

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/ddi-checker', ddiCheckerRoutes);

mongoose.connect('mongodb://localhost:27017/hospital', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

export default app;