import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

type Props = {
  imageURL: string;
  answer: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
};

type Choice = {
  id: number;
  choice: string;
};

const initialChoice: Choice = { id: 0, choice: "initial" };

function Question({
  imageURL,
  answer,
  choice1,
  choice2,
  choice3,
  choice4,
  setScore,
  setQuestion,
}: Props) {
  const [selected, setSelected] = useState<Choice>(initialChoice);
  const choices:Choice[] = [
    { id: 1, choice: choice1 },
    { id: 2, choice: choice2 },
    { id: 3, choice: choice3 },
    { id: 4, choice: choice4 },
  ];
  return (
    <div
      id="container"
      className="flex w-full flex-col items-center justify-center p-6 text-white"
    >
      <div className="mb-6 md:w-5/6 lg:w-1/2">
        <img src={imageURL} />
      </div>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Choices</RadioGroup.Label>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {choices.map((choice) => (
            <RadioGroup.Option
              key={choice.id}
              value={choice.choice}
              className={({ active, checked }) =>
                `${
                  active
                    ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                    : ""
                }
                  ${
                    checked
                      ? "bg-sky-900 bg-opacity-75 text-white"
                      : "bg-slate-600"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center text-lg">{choice.choice}</div>
                <div className="ml-2 shrink-0 text-white">
                  {String(selected)==choice.choice ? <CheckIcon className="h-6 w-6" /> :<CheckIcon className="h-6 w-6 invisible" /> }
                </div>
              </div>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
      <div>
        <button
          className="m-4 rounded border-2 border-yellow-600 px-6 py-4"
          onClick={() =>
            {
              if (String(selected) == answer) {
                setScore((prev) => prev + 1);
              }
              setQuestion((prev) => prev + 1);
            }
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function CheckIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Question;
