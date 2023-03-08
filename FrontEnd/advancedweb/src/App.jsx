import './App.css'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Sign from './pages/Sign';
import Navbar from './components/Navbar'
import Body from './components/Body'
import ImageSlider from './components/ImageSlider'
import Contactus from './pages/Contactus';

function App() {
 
  return (
    
    <Router>
    <div className="App">
      
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path="/login" element={<Sign/>} />
        <Route path="/Contactus" element={<Contactus/>}/>
      </Routes> 
    </div>
    </Router>

  )
}

export default App
