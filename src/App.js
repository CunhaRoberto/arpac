import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Empresas from './components/pages/Empresas';
import RegistrarVisitas from './components/pages/RegistrarVisitas';
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
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/RegistrarVisitas" element={<RegistrarVisitas />} />
          <Route path="/cadastrar" element={<Cadastrar/>} />
        </Routes>
      </Container>
      <Footer/> 
    </Router>
  );
}

export default App;
