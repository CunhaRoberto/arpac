import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Empresas from './components/pages/Empresas';
import RegistrarVisitas from './components/pages/RegistrarVisitas';
import Equipamentos from './components/pages/Equipamentos';
import RegistrarEmpresas from './components/pages/RegistrarEmpresas';
import CadastrarEquipamento from './components/pages/CadastrarEquipamento';
import ConfirmDeletePage from './components/pages/ConfirmDeletePage'; 
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
          <Route path="/RegistrarVisitas/:id" element={<RegistrarVisitas />} />
          <Route path="/RegistrarEmpresas" element={<RegistrarEmpresas/>} />
          <Route path="/cadastrarequipamento/:id" element={<CadastrarEquipamento/>} />
          <Route path="/confirm-delete" element={<ConfirmDeletePage />} />

          <Route path="/equipamentos/:id" element={<Equipamentos />} />

        </Routes>
      </Container>
      <Footer/> 
    </Router>
  );
}

export default App;
