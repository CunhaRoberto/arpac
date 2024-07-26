import Msg from "../layout/Msg.js";
import { useLocation } from "react-router-dom";
import Container from '../layout/Container.js';
import LinkButton from '../layout/LinkButton.js';
import styles from '../pages/viagens.module.css';
import ViagensCard from '../pages/ViagensCard.js';
import { useState, useEffect } from "react";

const Contato = () => {
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const msg = location.state ? location.state.message : '';  

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
            <LinkButton to='/cadastrar' text='Cadastrar viagem' /> 
            <div className={styles.title_container}>                    
                <h1>Próximas viagens</h1>             
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
                                name={(viagem.nameRoute)} // Converte objeto para string se necessário
                                startDate={(viagem.startDate)}
                            />
                        );
                    })
                ) : !loading && (
                    <p>Não há viagens disponíveis.</p>
                )}
            </Container>
        </div>
    );
};

export default Contato;
