import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/inventory' element={<Inventory/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
