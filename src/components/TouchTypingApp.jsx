import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateText, resetTyping } from "./actions";
import Navbar from "./navbar";
import errorSound from "../notification-sound.mp3";
import SnowAnimation from "./SnowAnimation";

export default function TouchTyping() {
  const text = useSelector((state) => state.text);
  const timer = useSelector((state) => state.timer);
  const isRunning = useSelector((state) => state.isRunning);
  const currentKeyIndex = useSelector((state) => state.currentKeyIndex);
  const keys = ["a", "s", "d", "f", "j", "k", "l", ";"];
  const dispatch = useDispatch();
  const [accuracy, setAccuracy] = useState(0);

  const [showSnowAnimation, setShowSnowAnimation] = useState(false);

  // Timer and typing logic
  useEffect(() => {
    let interval;

    if (isRunning && currentKeyIndex < keys.length - 1) {
      interval = setInterval(() => {
        dispatch({ type: "INCREMENT_TIMER" });
      }, 1000);
    } else {
      clearInterval(interval);
      setShowSnowAnimation(true);
    }

    return () => clearInterval(interval);
  }, [isRunning, currentKeyIndex, dispatch, keys.length]);

  // Key down event handler
  const handleKeyDown = (event) => {
    if (!isRunning) {
      dispatch({ type: "START_TYPING" });
    }

    const keyPressed = event.key.toLowerCase();

    if (keyPressed === keys[currentKeyIndex]) {
      dispatch(updateText(keyPressed));
      dispatch({ type: "INCREMENT_CURRENT_KEY_INDEX" });

      if (currentKeyIndex === keys.length - 1) {
        dispatch({ type: "STOP_TYPING" });
      }
    } else {
      playErrorSound(); // Play error sound for incorrect key
    }
  };

  // Play the error sound
  const playErrorSound = () => {
    const audio = new Audio(errorSound);
    audio.play();
  };

  // Reset button click handler
  const handleReset = () => {
    dispatch(resetTyping());
  };

  // Format the timer display
  const formattedTime = `${Math.floor(timer / 3600)
    .toString()
    .padStart(2, "0")}:${Math.floor((timer % 3600) / 60)
    .toString()
    .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    // Calculate accuracy
    const correctCharacters = text.split("").slice(0, currentKeyIndex).join("");
    const accuracyValue = (correctCharacters.length / text.length) * 100 || 0; // Prevent division by zero
    setAccuracy(accuracyValue);
  }, [text, currentKeyIndex, timer]);

  return (
    <>
      <Navbar timer={formattedTime} />
      <div className="h-[94vh] w-full flex flex-col justify-center items-center">
        <h1>Type the following keys:</h1>
        <p className="pb-5">{keys.join(" ")}</p>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          disabled={currentKeyIndex === keys.length - 1}
          className="text-black w-full xl:w-[500px] h-[30px] outline-none rounded-sm p-1 mb-4"
        />
        <p>Typed Text: {text}</p>
        <p className="mt-4">Accuracy: {accuracy.toFixed(2)}%</p>

        {currentKeyIndex === keys.length - 1 && (
          <>
            <p className="text-green-500 font-bold mt-4">
              Congratulations! You typed all the keys.
            </p>
            <button
              onClick={handleReset}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
            >
              Reset
            </button>
            <SnowAnimation show={showSnowAnimation} />
          </>
        )}
      </div>
    </>
  );
}
