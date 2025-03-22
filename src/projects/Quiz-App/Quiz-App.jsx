import { useState } from "react";
import questionsData from "./data/questions.json";

function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    function restartQuiz() {
        setShowScore(false);
        setCurrentQuestion(0);
        setScore(0);
    }

    function handleAnswerClick(option) {
        setSelectedAnswer(option);
        if(option === questionsData[currentQuestion].answer) {
            setScore(s => s + 1);
        }

    }
    
    function handleNextQuestion() {
        if(currentQuestion + 1 < questionsData.length) {
            setCurrentQuestion(c => c + 1);
            setSelectedAnswer(null);
        }
        else {
            setShowScore(true)
        }
    }

    return showScore ? (
        <div className="flex flex-col items-center justify-center text-center h-screen">
            
            <div className="bg-gray-100 px-8 py-16 rounded-lg shadow-md">
            
                <h1 className="text-3xl font-bold">
                    You have finished the quiz!
                </h1>

                <h1 className="text-2xl my-5">
                    You have scored a {score}/{questionsData.length}
                </h1>

                <button className="quizapp-choices-button" onClick={restartQuiz}>
                    Restart Quiz
                </button>

            </div>
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center text-center h-screen">
            
            <div className="bg-gray-100 px-8 py-10 rounded-lg shadow-md">
            
                <h1 className="text-2xl mb-5">
                    {questionsData[currentQuestion].question}
                </h1>

                <div className="flex flex-col">
                    {questionsData[currentQuestion].choices.map((choice, index) => (
                        <button key={index} className="quizapp-choices-button" onClick={handleAnswerClick(choice)}>
                            {choice}
                        </button>
                    ))}
                </div>

                <div className="mt-4">
                    <button className="quizapp-nav-button" onClick={() => setCurrentQuestion(c => c - 1)}>← Prev</button>
                    <button className="quizapp-nav-button" onClick={() => handleNextQuestion()}>Next →</button>
                </div>
            </div>
        </div>
    );
}

export default QuizApp
