import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ToDo from './components/To-do/ToDo';
import Navber from './components/Navber';
import Calender from './components/calender/Calender';
import Footer from './components/Footer';
import Conpleted from './components/Conpleted';

function App() {
  return (
    <div>
      <Navber></Navber>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/todo' element={<ToDo></ToDo>}></Route>
      <Route path='/calender' element={<Calender></Calender>}></Route>
      <Route path='/completedtask' element={<Conpleted></Conpleted>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
