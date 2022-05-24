import React from 'react'
import Header from './Header'
import Home from './Home'
import VirtualDressingRoom from './VirtualDressingRoom'
import NotFound from './NotFound'
import Checkout from './Checkout'
import SignIn from './SignIn'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<><Header/><Home/></>} />
          <Route path="/checkout" element={<><Header/> <Checkout/></>} />
          <Route path="/virtualdressingroom" element={<VirtualDressingRoom/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes> 
      </div>
    </Router>
    
 
    
  )
}

export default App