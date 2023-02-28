import './App.css';
import Navbar from './Resources/Components/Common/Navbar';
import Contacts from './Resources/Pages/DashboardPage/Contact';
import NewAssistant from './Resources/Pages/DashboardPage/NewAssistant';
import OrderService from './Resources/Pages/DashboardPage/OrderService';

function App() {
  return (
    <div>
<Navbar></Navbar>
<Contacts></Contacts>
<OrderService></OrderService>
<NewAssistant></NewAssistant>
    </div>
  );
}

export default App;
