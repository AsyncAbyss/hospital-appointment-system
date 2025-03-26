import express from 'express';
import Appointment from '../models/Appointment';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Book an appointment
router.post('/', authenticate, async (req, res) => {
  const { doctorId, date, time, reason } = req.body;
  const appointment = new Appointment({ patientId: req.user.userId, doctorId, date, time, reason });
  await appointment.save();
  res.status(201).send({ message: 'Appointment booked successfully' });
});

// Get appointments for a user
router.get('/', authenticate, async (req, res) => {
  const appointments = await Appointment.find({ patientId: req.user.userId });
  res.send(appointments);
});

export default router;