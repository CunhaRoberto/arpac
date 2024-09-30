import Msg from "../layout/Msg.js";
import Container from '../layout/Container.js';
import styles from '../pages/Empresas.module.css';
import RevisoesCard from './RevisoesCard.js';
import LinkButton from '../layout/LinkButton';
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Modal from '../layout/modal/Modal';



const Revisao = () => {
    debugger
    const { idEquipamento } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
   
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('empresa');

    const [revisoes, setRevisao] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState(null);
    const [msg, setMsg] = useState('');
    //const [isLoading, setIsLoading] = useState(true); // Estado adicional para controle de carregamento
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('msg')) {
            setMsg(localStorage.getItem('msg'));
            localStorage.removeItem('msg');
        }
    }, []);

    useEffect(() => {
       
        if (idEquipamento) {
            fetch(`https://arpac-api.onrender.com/v1/revisao/idEquipamento?idEquipamento=${idEquipamento}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.length === 0) {
                    setLoading(false);
                    setShowModal(true); // Exibir a modal se não houver registros
                } else {
                    setRevisao(data);
                    setLoading(false);
                    debugger
                }
            })
            .catch((err) => console.log(err))
            //.finally(() => setIsLoading(false)); // Atualiza o estado de carregamento
        }
    }, [idEquipamento]);

    // if (isLoading) {
    //     return <p>Carregando...</p>; // Opcional: Exibe um texto de carregamento
    // }

    const handleCloseModal = () => {
        setShowModal(false); // Fechar a modal e exibir o formulário novamente
        navigate('/empresas');
    };

    // const redirectToCadastro = `/cadastrarequipamento/${idEmpresa}?name=${encodeURIComponent(empresaName)}`;
    // const handleRedirectToCadastro = () => {
    //     setShowModal(false);
    //     navigate(`${redirectToCadastro}`); // Redireciona para a página de cadastro de equipamento
    // };

    return (
        <>

        {showModal && (
                <Modal
                    show={true}
                    onClose={handleCloseModal}
                    
                    title={`A empresa ${empresaName} não possuiu registros de revisoes.`}
                    message={`Deseja cadastrar um equipamento agora?`}
                />
            )}

            <div className={styles.empresas_container}>
             
             <div className={styles.title_container}>                    
                 <h1>Lista de Revisões</h1>             
             </div>
             
             {msg && <Msg type='success' msg={msg} />}
 
             <Container customClass='start'>
                 {loading && <p>Carregando...</p>}
                 {error && <p>{error}</p>}
                 {revisoes.length > 0 ? (
                     revisoes.map((revisao) => (
                        <RevisoesCard 
                            key={revisao.id}
                            id={revisao.id}
                            dataRevisao={revisao.dataRevisao}
                            horasEquipamento={revisao.horasEquipamento}
                            tipoRevisao={revisao.idRevisao}
                            // idEmpresa={idEmpresa}
                            // empresa = {empresaName}
                        />
                     ))

                     
                 ) : !loading && revisoes.length === 0 &&(
                     <div>
                         <p>Não há registros disponíveis.</p>                        
                     </div>
                 )}
                 
              
             </Container>
             {!loading && revisoes.length > 0 &&(
                     <div style={{ marginTop: '2rem' }}>
                        <LinkButton 
                            // to={`${redirectToCadastro}`}  
                            
                            text='' 
                        />
                    </div>
                 )}
         </div>
        </>
        
    );

   
};

export default Revisao;
