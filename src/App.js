import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/home";
import Falcon9 from "./pages/Falcon 9/falcon-9";
import FalconHeavy from "./pages/Falcon heavy/falcon-heavy";

const App = () => {
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/falcon9" element={<Falcon9 />} />
        <Route path="/falcon-heavy" element={<FalconHeavy/>} />
        
      </Routes>
    </BrowserRouter>
  )
}


export default App;