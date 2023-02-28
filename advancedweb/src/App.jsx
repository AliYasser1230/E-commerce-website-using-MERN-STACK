import './App.css'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
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
      </Routes> 
    </div>
    </Router>

  )
}

export default App
