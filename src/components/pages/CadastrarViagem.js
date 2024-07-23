import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CadastrarViagem.module.css';
import CadastrarViagemForm from '../cadastrarForm/CadastrarForm';
import Msg from "../layout/Msg.js";

const CadastrarViagem = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    function createPost(travel) {
        // Limpar mensagens anteriores ao enviar o formulário
        setMsg('');
        setSuccessMsg('');
        // travel.idBus = travel.bus.id; // Corrigido o erro de digitação

        console.log('travell', travel);
const msgError = 'Algo de errado aconteceu, tente novamente mais tarde!' 
        fetch("https://user-api-p9ru.onrender.com/v1/travel/", {    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travel),
        })
        .then((resp) => {
            console.log('Resposta:', resp);  
            if (resp.ok) {
                return resp.json();
            } else {
                return resp.json().then((error) => {
                    throw new Error(error.message || `Status de resposta inesperado: ${resp.status}`);
                });
            }
        })
        .then((data) => {
            console.log(data);
            setSuccessMsg('Viagem cadastrada com sucesso!');
            navigate('/viagens', { state: { message: 'Viagem cadastrada com sucesso!' } });
        })
        .catch((err) => {
            console.log(err);
            setMsg( msgError);
        });
    }

    return (
        <div className={styles.cadastrar_viagem_container}>
            <h1>Cadastrar uma viagem</h1>
            {successMsg && <Msg type='success' msg={successMsg} />}
            {msg && <Msg type='error' msg={msg} />}
            <CadastrarViagemForm 
                handleSubmit={createPost}
                btnText='Cadastrar'
            />
        </div>
    );
};

export default CadastrarViagem;
