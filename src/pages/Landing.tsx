import { motion } from "framer-motion";
import React from "react";
import BxMoviePlay from "../components/BxMoviePlay";
import theater from "../assets/movie_theater.png";
import { useNavigate } from "react-router-dom";


function Landing() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center bg-slate-800">
      <div
        id="container"
        className="flex h-full w-full flex-col items-center justify-center border-4 border-red-500 bg-cover bg-center bg-no-repeat p-4 text-center"
        style={{ backgroundImage: `url(${theater})` }}
      >
        <h3 className="font-sans text-7xl font-bold text-white ">Movie Quiz</h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <button
            className="mt-3 cursor-pointer text-white"
            onClick={()=> navigate("/quiz")} >
            <BxMoviePlay />
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
