import React from 'react'
import Home from './page/home'
import Phone from './page/inputPhone'
import {BrowserRouter,Route,Link,Routes,Navigate} from 'react-router-dom'
function App() {
  // import 
  return (
    <div>
      <h1>ini awal</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/phone/:phone' element={<Phone/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
