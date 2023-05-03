import React from 'react'
import Home from './page/home'
import Phone from './page/inputPhone'
import {BrowserRouter,Route,Link,Routes,Navigate} from 'react-router-dom'
import Upload from './page/upload'
function App() {
  // import 
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/phone/:phone' element={<Phone/>}/>
        <Route path='/upload/:status/:order' element={<Upload/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
