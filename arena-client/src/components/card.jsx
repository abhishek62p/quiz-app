export default function Card({ quiz, openQuizModel }) {

	return (
		<div className="card" onClick={() => openQuizModel(quiz)}>
			<div className="card-bgimg"></div>
			<dir className="card-content">
				<p className="card-title">{quiz.title}</p>
				<p className="card-description">{quiz.description}</p>
				<div className="card-footer">
					<p>{`Ques ${quiz.questions.length}`}</p>
					<p>{new Date(quiz.createdAt).toLocaleDateString()}</p>
				</div>
			</dir>
		</div>
	);
}
