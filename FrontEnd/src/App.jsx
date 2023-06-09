import './App.css'
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Sign from './pages/Sign';
import Navbar from './components/Navbar'
import Body from './components/Body'
import ImageSlider from './components/ImageSlider'
import Contactus from './pages/Contactus';
import Shop from './pages/Shop';
import Panel from './components/Panel';
import Aboutus from './pages/Aboutus';

function App() {
 
  return (
    
    <Router>
    <div className="App">
      
      <Navbar/>
      
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path="/login" element={<Sign/>} />
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/panel" element={<Panel/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
      </Routes> 
    </div>
    </Router>

  )
}

export default App
