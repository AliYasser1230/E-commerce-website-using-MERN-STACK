import './App.css'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar'
import Body from './components/Body'
import ImageSlider from './components/ImageSlider'

function App() {
 
  return (
    
    <Router>
    <div className="App">
      
      <Navbar/>
      
      
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route exact path='/' element={<Login/>} />
        <Route path="/login" element={<Signup/>} />
      </Routes> 
    </div>
    </Router>

  )
}

export default App
