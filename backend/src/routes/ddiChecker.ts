import express from 'express';
import axios from 'axios';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Check for drug interactions
router.post('/check', authenticate, async (req, res) => {
  const { drugs } = req.body;
  try {
    const response = await axios.post('https://api.ddichecker.com/check', { drugs });
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ message: 'Error checking drug interactions' });
  }
});

export default router;