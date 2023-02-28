import { Route, Routes } from 'react-router';
import './App.css';
import Login from './Resources/Pages/Login';
import SignUp from './Resources/Pages/SignUp';
import Navbar from './Resources/Components/Common/Navbar';
import Contacts from './Resources/Pages/DashboardPage/Contact';
import NewAssistant from './Resources/Pages/DashboardPage/NewAssistant';
import OrderService from './Resources/Pages/DashboardPage/OrderService';

function App() {
  return (
    <>
<Navbar></Navbar>
<Contacts></Contacts>
<OrderService></OrderService>
<NewAssistant></NewAssistant>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
