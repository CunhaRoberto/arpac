import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contato from './components/pages/Contato';
import Reservar from './components/pages/Reservar';
import Cadastrar from './components/pages/CadastrarViagem';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';  
import Footer from './components/layout/Footer'; 

function App() {
  return (
    <Router>
      <Navbar/>      
      <Container customclass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="/cadastrar" element={<Cadastrar/>} />
        </Routes>
      </Container>
      <Footer/> 
    </Router>
  );
}

export default App;
