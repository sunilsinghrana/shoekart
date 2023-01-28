import './App.css'
import { Route, Routes  } from 'react-router'
import Login from './component/Login'
import Home from './component/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App
