import express from "express";
import { analyzeProfile,getAllProfiles,getSingleProfile} from '../controllers/profilesController.js'

const router = express.Router();

router.get(
  "/analyze/:username",
  analyzeProfile
);

router.get(
  "/profiles",
  getAllProfiles
);

router.get(
  "/profiles/:username",
  getSingleProfile
);

export default router;