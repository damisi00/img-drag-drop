
import { HashRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Home from './pages/Home'


function App() {
  

  return (
    <>
      <HashRouter>
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/home' element={<Home />} />

        </Routes>
      </HashRouter>
      
    </>
  )
}

export default App
// library.add(fas, faUser, faLock);