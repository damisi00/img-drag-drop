
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Home from './pages/Home'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/home' element={<Home />} />

        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
// library.add(fas, faUser, faLock);