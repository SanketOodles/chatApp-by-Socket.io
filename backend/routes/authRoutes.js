import express from 'express';
import  {signup, signin, signout, getAllusers} from '../controllers/authController.js';
import secureroute from '../middleware/secureroute.js';

const router = express.Router();

// Use POST for signup
router.post('/signup', signup);
router.post('/signin',signin);
router.post('/signout',signout);
router.get('/getallusers',secureroute,getAllusers);

export default router;
