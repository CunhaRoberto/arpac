import Msg from "../layout/Msg.js";
import Container from '../layout/Container.js';
import styles from '../pages/Empresas.module.css';
import EquipamentosCard from './EquipamentosCard.js';
import LinkButton from '../layout/LinkButton';
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Modal from '../layout/modal/Modal';



const Equipamentos = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
   
    const idEmpresa = id;
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('name');

    const [equipamentos, setEquipamentos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Estado adicional para controle de carregamento
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('msg')) {
            setMsg(localStorage.getItem('msg'));
            localStorage.removeItem('msg');
        }
    }, []);

    useEffect(() => {
        if (idEmpresa) {
            fetch(`https://arpac-api.onrender.com/v1/equipamentos/idEmpresa?idEmpresa=${idEmpresa}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.length === 0) {
                    setLoading(false);
                   setEquipamentos([{ idEquipamento: '', name: 'Não há registros' }]);
                   setShowModal(true); // Exibir a modal se não houver registros
                } else {
                    setEquipamentos(data);
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false)); // Atualiza o estado de carregamento
        }
    }, [idEmpresa]);

    if (isLoading) {
        return <p>Carregando...</p>; // Opcional: Exibe um texto de carregamento
    }

    const handleCloseModal = () => {
        setShowModal(false); // Fechar a modal e exibir o formulário novamente
        navigate('/equipamentos');
    };

    const handleRedirectToCadastro = () => {
        setShowModal(false);
        navigate(`/cadastrarequipamentos/${idEmpresa}`) // Redireciona para a página de cadastro de equipamento
    };

    return (
        <>
            {showModal && (
                <Modal
                    show={true}
                    onClose={handleCloseModal}
                    onConfirm={handleRedirectToCadastro}
                    title={`A empresa ${empresaName} não possuiu registros de equipamentos.`}
                    message={`Cadastro de equipamento é necessário. Deseja cadastrar agora?`}
                />
            )}

            <div className={styles.equipamentos_container}>
             
                <div className={styles.title_container}>                    
                    <h1>Equipamentos</h1>             
                </div>
             
                {msg && <Msg type='success' msg={msg} />}
 
                <Container customClass='start'>
                    {/* {loading && <p>Carregando...</p>} */}
                    {error && <p>{error}</p>}
                    {equipamentos.length > 0 ? (
                        equipamentos.map((empresa) => (
                            <EquipamentosCard 
                                key={empresa.id}
                                id={empresa.id}
                                name={empresa.name}
                            />
                     ))
 
                     
                 ) : !loading && (
                     <div>
                         <p>Não há registros disponíveis.</p>                        
                     </div>
                 )}
                 
              
                </Container>
                {!loading && (
                     <div style={{ marginTop: '2rem' }}>
                         <LinkButton to='/registrarEmpresas' text='Cadastrar Empresa' />
                     </div>
                 )}
         </div>
        </>
        


        
    );
};

export default Equipamentos;
