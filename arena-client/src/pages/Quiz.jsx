import { useLocation, useParams } from "react-router-dom"
import QuizQuestion from "../components/QuizQuestion"

export default function Quiz() {
    const location = useLocation()
    const quiz = location.state?.quiz
    return (
        <QuizQuestion quiz={quiz} />
    )
}