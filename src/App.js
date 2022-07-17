import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPurchase from './components/MyPurchase/MyPurchase';
import AllPurchase from './components/AllPurchase/AllPurchase';
import AllBooks from './components/AllBooks/AllBooks';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import LogOut from './components/LogOut/LogOut';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mypurchase' element={<MyPurchase />} />
          <Route path='/allpurchase' element={<AllPurchase />} />
          <Route path='/allbooks' element={<AllBooks />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<LogOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
