import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Empresas from './components/pages/Empresas';
import RegistrarRevisao from './components/pages/RegistrarRevisao';
import Equipamentos from './components/pages/Equipamentos';
import RegistrarEmpresas from './components/pages/RegistrarEmpresas';
import CadastrarEquipamento from './components/pages/CadastrarEquipamento';
import EditarEquipamento from './components/pages/EditarEquipamento';
import EditarEmpresa from './components/pages/EditarEmpresa';
import ConfirmDeletePage from './components/pages/ConfirmDeletePage'; 
import DeleteEquipamento from './components/pages/DeleteEquipamento'; 
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';  
import Footer from './components/layout/Footer'; 
import PesquisarRevisoes from './components/pages/Revisoes'
import EditarRevisao from './components/pages/EditarRevisao';
import DeleteRevisao from './components/pages/DeleteRevisao'; 


function App() {
  return (
    <Router>
      <Navbar/>      
      <Container customclass='min-height'>
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/empresas" element={<Empresas />} />
         
          <Route path="/PesquisarRevisoes/:idEquipamento" element={<PesquisarRevisoes />} />
          <Route path="/RegistrarEmpresas" element={<RegistrarEmpresas/>} />
          <Route path="/editar-empresa/:id" element={<EditarEmpresa/>} />
          <Route path="/cadastrarequipamento/:id" element={<CadastrarEquipamento/>} />
          <Route path="/editar-equipamento/:id" element={<EditarEquipamento/>} />
          <Route path="/editar-revisao" element={<EditarRevisao/>} />
          <Route path="/delete-revisao" element={<DeleteRevisao/>} />
          <Route path="/confirm-delete" element={<ConfirmDeletePage />} />
          <Route path="/delete-equipamento" element={<DeleteEquipamento />} />
          <Route path="/RegistrarRevisao/:id/:idEmpresa" element={<RegistrarRevisao />} />
          <Route path="/equipamentos/:id" element={<Equipamentos />} />

        </Routes>
      </Container>
      <Footer/> 
    </Router>
  );
}

export default App;
