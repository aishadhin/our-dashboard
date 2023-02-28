import { Route, Routes } from 'react-router';
import './App.css';
import Login from './Resources/Pages/Login';
import SignUp from './Resources/Pages/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
