import React, { useState } from "react";
import Question from "../components/Question";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { supabase } from "../supabase";
import LeaderBoard from "../components/LeaderBoard";

type Choices = {
  id: number;
  imageURL: string;
  created_at: string;
  answer: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
};
export type Score = {
  name: string;
  score: number;
};

function Quiz() {
  const [quizSize, setQuizSize] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Choices[]>([]);
  const [question, setQuestion] = useState(0);
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState<Score[]>();

  async function generateQuiz() {
    setLoading(true);
    const questions = await supabase.from("question").select();
    if (questions.data !== undefined && questions.data !== null) {
      setData(questions.data);
      setLoading(false);
    }
  }

  async function getLeaderBoard() {
    const board = await supabase.from("LeaderBoard").select();
    if (!board.data) {
      return;
    } else {
      let temp = board.data;
      setLeaderBoard(temp);
    }
  }
  console.log({ leaderBoard });

  async function submitName(name: string) {
    console.log("name submitted");
    setNameSubmitted(true);
  }

  const percentage = question / data.length;
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-evenly bg-slate-800 text-white">
      {leaderBoard && <LeaderBoard leaderBoard={leaderBoard} />}
      {data.length == 0 && (
        <button
          className="rounded border-2 border-yellow-600 px-6 py-4"
          onClick={generateQuiz}
        >
          generateQuiz
        </button>
      )}
      {data.length !== 0 && question !== data.length && (
        <Question
          imageURL={data[question].imageURL}
          answer={data[question].answer}
          choice2={data[question].choice2}
          choice1={data[question].choice1}
          choice3={data[question].choice3}
          choice4={data[question].choice4}
          setScore={setScore}
          setQuestion={setQuestion}
        />
      )}
      {data.length !== 0 && (
        <div className="h-25 absolute top-4 right-4 w-24">
          <CircularProgressbar
            value={percentage}
            maxValue={1}
            styles={buildStyles({
              pathColor: "#38bdf8",
              trailColor: "#3f3f46",
              pathTransitionDuration: 0.5,
              textSize: "0.5em",
              strokeLinecap: "round",
            })}
          />
        </div>
      )}
      {question == data.length && question !== 0 && (
        <>
          {!nameSubmitted && (
            <div className="flex flex-col items-center">
              <h3 className="mb-2 text-2xl">
                Enter you name to see your score and enter the leaderboard
              </h3>
              <input
                placeholder="NAME"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="mb-2 bg-transparent p-4 text-center"
              />
              <div>
                <button
                  onClick={async () => {
                    submitName(name);
                    await getLeaderBoard();
                  }}
                  className="rounded border-2 border-green-500 px-6 py-4"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {nameSubmitted && (
            <>
              <div>Your Score: {score}</div>
            </>
          )}

          <div
            className="flex
           gap-4"
          >
            <button
              className="rounded border-2 border-yellow-500 px-6 py-4"
              onClick={() => {
                setQuestion(0);
                setScore(0);
                setName("");
                setNameSubmitted(false);
                setLeaderBoard(undefined);
              }}
            >
              Solution
            </button>
            <button
              className="rounded border-2 border-yellow-500 px-6 py-4"
              onClick={() => {
                setQuestion(0);
                setScore(0);
                setName("");
                setNameSubmitted(false);
                setLeaderBoard(undefined);
              }}
            >
              Play Again?
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
