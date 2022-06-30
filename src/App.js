import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ToDo from './components/To-do/ToDo';
import Navber from './components/Navber';

function App() {
  return (
    <div>
      <Navber></Navber>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/todo' element={<ToDo></ToDo>}></Route>
     </Routes>
    </div>
  );
}

export default App;
