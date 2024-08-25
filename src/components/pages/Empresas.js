import Msg from "../layout/Msg.js";
import Container from '../layout/Container.js';
import styles from '../pages/Empresas.module.css';
import EmpresasCard from './EmpresasCard.js';
import LinkButton from '../layout/LinkButton';
import { useState, useEffect } from "react";

const Viagens = () => {
    const [viagens, setViagens] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        if (localStorage.getItem('msg')) {
            setMsg(localStorage.getItem('msg'));
            localStorage.removeItem('msg');
        }
    }, []);

    useEffect(() => {
        fetch("https://arpac-api.onrender.com/v1/empresa/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log("Dados obtidos: ", data);
            setViagens(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Erro ao buscar empresas: ", err);
            setError("Erro ao carregar empresas.");
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
                    viagens.map((viagem) => (
                        <EmpresasCard 
                            key={viagem.id}
                            id={viagem.id}
                            name={viagem.name}
                        />
                    ))
                ) : !loading && (
                    <p>Não há registros disponíveis.</p>
                )}
                
                {!loading && (
                    <LinkButton to='/cadastrar' text='Cadastrar de empresas' />
                )}
            </Container>
        </div>
    );
};

export default Viagens;
