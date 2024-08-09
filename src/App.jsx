import React from 'react'
import { Navbar,Footer,Slider,Home,Services,Deal,Booking} from './components';
import './App.css'

const App = () => { 
  return (
    <div>
      <Navbar />
      <Slider />
      <Home/>
      <Services/>
      <Deal/>
      <Booking/>
      <Footer />
    </div>
  );
}

export default App
