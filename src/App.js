import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Pagamento from './pages/Pagamento/Pagamento';
import Recebimento from './pages/Recebimento/Recebimento';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Teste from './pages/Teste/Teste';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pagamento' element={<Pagamento />} />
          <Route path='/recebimento' element={<Recebimento />} />
          <Route path='/teste' element={<Teste />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
