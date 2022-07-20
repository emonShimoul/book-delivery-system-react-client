import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPurchase from './components/MyPurchase/MyPurchase';
import AllPurchase from './components/AllPurchase/AllPurchase';
import AllBooks from './components/AllBooks/AllBooks';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import AddNewBook from './components/AddNewBook/AddNewBook';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mypurchase' element={<MyPurchase />} />
            <Route path='/allpurchase' element={<AllPurchase />} />
            <Route path='/allbooks' element={<AllBooks />} />
            <Route path='/addnewbook' element={<PrivateRoute><AddNewBook /></PrivateRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
