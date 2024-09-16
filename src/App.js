import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Teste from './pages/Teste/Teste';
import Contas from './pages/Contas/Contas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contas' element={<Contas/>} />
          <Route path='/teste' element={<Teste />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
