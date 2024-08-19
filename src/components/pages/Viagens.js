import Msg from "../layout/Msg.js";
//import { useLocation } from "react-router-dom";
import Container from '../layout/Container.js';
import styles from '../pages/viagens.module.css';
import ViagensCard from '../pages/ViagensCard.js';
import { useState, useEffect } from "react";

const Viagens = () => {
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState('');

    //const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem('msg')) {
            setMsg(localStorage.getItem('msg'));
            localStorage.removeItem('msg');
        }
    }, []);

    useEffect(() => {
        fetch("https://user-api-p9ru.onrender.com/v1/travel/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log("Dados obtidos: ", data); // Log dos dados obtidos
            setViagens(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Erro ao buscar viagens: ", err);
            setError("Erro ao carregar viagens.");
            setLoading(false);
        });
    }, []);

    return (
        <div className={styles.viagens_container}>
             
            <div className={styles.title_container}>                    
                <h1>Lista de Empresas</h1>             
            </div>
            
            {msg && <Msg type='success' msg={msg} />}

            <Container customClass='start'>
                {loading && <p>Carregando...</p>}
                {error && <p>{error}</p>}
                {viagens.length > 0 ? (
                    viagens.map((viagem) => {
                        console.log("Objeto viagem: ", viagem); // Log de cada objeto viagem
                        return (
                            <ViagensCard 
                                key={viagem.id}
                                id={viagem.id}
                                name={viagem.nameRoute} // Converte objeto para string se necessário
                                startDate={viagem.startDate}
                                finishDate={viagem.finishDate}
                            />
                        );
                    })
                ) : !loading && (
                    <p>Não há registros diponíveis.</p>
                )}
            </Container>
        </div>
    );
};

export default Viagens;
