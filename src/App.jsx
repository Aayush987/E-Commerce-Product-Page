import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {

  return (
      <Router>
        <Routes>
          <Route path = "/" element = {<Login />} />
          <Route path = "/home" element = {<Home />} />
        </Routes>
      </Router>
  )
}

export default App
