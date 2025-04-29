import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import { Stats } from './pages/Stats'
import PrivateRoute from './components/PrivateRoute'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/quiz/:id' element={<PrivateRoute><Quiz/></PrivateRoute>} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/profile/:username' element={<PrivateRoute><Profile /></PrivateRoute>}/>
        <Route path='/quiz/stats' element={<PrivateRoute><Stats /></PrivateRoute>} />
      </Routes>
    </Router>
  )
}

export default App
