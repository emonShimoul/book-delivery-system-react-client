import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPurchase from './components/MyPurchase/MyPurchase';
import AllPurchase from './components/AllPurchase/AllPurchase';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path='mypurchase' element={<MyPurchase />} />
          <Route path='allpurchase' element={<AllPurchase />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
