import { QuizStats } from "../components/QuizStats";

export function Stats() {
    const recentQuiz = JSON.parse(localStorage.getItem('recentQuiz'))

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    const name = `${user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)} ${user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}`

    return <div style={{backgroundColor: '#00B3AA', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <QuizStats recentQuiz={recentQuiz} name={name}/>
    </div>
}