import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Viagens from './components/pages/Viagens';
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
          <Route path="/viagens" element={<Viagens />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="/cadastrar" element={<Cadastrar/>} />
        </Routes>
      </Container>
      <Footer/> 
    </Router>
  );
}

export default App;
