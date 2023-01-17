import { Request, Response } from "express";
import { AxiosError } from "axios";
import { Data } from "../data";

type Quiz = {
  imageUrl: string;
  answer: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
};
export async function generateQuiz(
  req: Request,
  res: Response
): Promise<Quiz | void> {
  const { quizSize } = req.body;

  try {
    res.status(200).json({
      success: true,
      data: Data,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.status);
      console.log(error.response?.data);
    } else {
      console.log((error as any)?.message);
    }

    res.status(400).json({
      success: false,
      error: "There was a problem generating the quiz",
    });
  }
}
