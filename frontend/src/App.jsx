

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/login'
import {Toaster} from 'react-hot-toast'
// import Login from './pages/login/login'
import SignUp from './pages/signup/SignUp'
import { useAuthContext } from './context/AuthContext'
// legacy-peer-deps=true
// proxy=https://registry.npmjs.org/react-hot-toast

function App() {
 const {authUser} =useAuthContext();

  return (
    <>
     <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser?<Home/>:<Navigate to='/login'/>}></Route>
        <Route path='/login' element={authUser?<Navigate to='/'/>:<Login/>}></Route>
        <Route path='/Signup' element={authUser?<Navigate to='/'/>:<SignUp/>}></Route>
    {/* <SignUp></SignUp>  */}
    {/* <Home></Home> */}

    </Routes>
      <Toaster/>
     </div>
    </>
  )
}

export default App
