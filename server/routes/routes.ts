import express from "express";
import {generateQuiz} from "../controllers/movieQuizControllers"

const router = express.Router();

router.post("/generateQuiz", generateQuiz);

export default router;