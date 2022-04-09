import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import LogIn from './Components/Login/LogIn';
import SignUp from './Components/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <Header></Header>
      <Toaster></Toaster>
      <Routes>
        <Route path='/' element={<SignUp></SignUp>}></Route>
        {/* <Route path='/home' element={<SignUp></SignUp>}></Route>
        <Route path='/videos' element={<SignUp></SignUp>}></Route> */}
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
