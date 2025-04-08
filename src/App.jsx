import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testimonials from './components/Testimonials';
import Home from './components/Home';
import Services from './components/Services';
import Ourstory from './components/Ourstory';

function App() {
  return (
    <div className="font-sans text-white bg-[#FFFFFF] min-h-screen w-full overflow-x-hidden">
      
      <Home />
      <Ourstory/>
      <Services/>
      <Testimonials />

    </div>
  
  
  );
}

export default App;
