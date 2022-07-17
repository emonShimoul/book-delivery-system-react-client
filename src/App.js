import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPurchase from './components/MyPurchase/MyPurchase';
import AllPurchase from './components/AllPurchase/AllPurchase';
import AllBooks from './components/AllBooks/AllBooks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/mypurchase' element={<MyPurchase />} />
          <Route path='/allpurchase' element={<AllPurchase />} />
          <Route path='/allbooks' element={<AllBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
