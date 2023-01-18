import React, { useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect(() => {

    const timerId = setTimeout(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1);
    }, 1000);

    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
      return
    }

    return function () {
      clearTimeout(timerId);
    }
  }, [timeRemaining, onAnswered]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }
    function Question({ question, onAnswered }) {
      
    }
  }    
    export default Question;
