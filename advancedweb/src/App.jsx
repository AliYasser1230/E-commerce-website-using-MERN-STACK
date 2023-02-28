import './App.css'

import Navbar from './components/Navbar'
import Body from './components/Body'
import ImageSlider from './components/ImageSlider'
import { SliderData } from './components/Sliderdata';
function App() {
 
  return (
    
    <div className="App">
      
      <Navbar/>
      <Body/>
      <ImageSlider slides={SliderData}/>
    </div>
  )
}

export default App
