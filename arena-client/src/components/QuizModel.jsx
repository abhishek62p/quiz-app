import React, { useEffect } from 'react';

const QuizModal = ({ quiz, onClose, handleStartQuiz }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.key === 'Escape') {
                onClose()
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [onClose])

    const handleOverlayClick = (event) => {
		if (event.target.classList.contains('modal-overlay')) {
			onClose();
		}
	};

	return (
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<h2>{quiz.title}</h2>
				<p>{quiz.description}</p>
				<p><strong>Total Questions:</strong> {quiz.questions.length}</p>
				
				<div className="modal-buttons">
					<button className="start-btn" onClick={() => handleStartQuiz(quiz._id)}>Start Quiz</button>
					<button className="close-btn" onClick={onClose}>Close</button>
				</div>
			</div>
		</div>
	);
};

export default QuizModal;
