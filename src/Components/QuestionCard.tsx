import React from 'react';


type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions }) => (

    <div className="card">
        <p className="number">
            Questions: {questionNr} / {totalQuestions}
        </p>
        <p className="question" dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} ></span>
                    </button>
                </div>
            ))}
        </div>
    </div>

);

export default QuestionCard;