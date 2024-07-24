import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CadastrarViagem.module.css';
import CadastrarViagemForm from '../cadastrarForm/CadastrarForm';
import Msg from "../layout/Msg.js";

const CadastrarViagem = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    function formatDateToISO(dateString) {
        const date = new Date(dateString);
        return date.toISOString(); // Retorna a data no formato ISO 8601 com o sufixo 'Z'
    }

    function createPost(travel) {
        // Limpar mensagens anteriores ao enviar o formulário
        setMsg('');
        setSuccessMsg('');

        // Converter e formatar as datas
        const formattedTravel = {
            ...travel,
            startDate: formatDateToISO(travel.startDate),
            finishDate: formatDateToISO(travel.finishDate),
        };

        console.log('formattedTravel', formattedTravel);
        const msgError = 'Algo de errado aconteceu, tente novamente mais tarde!';

        fetch("http://localhost:5000/v1/travel/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formattedTravel),
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
            setMsg(msgError);
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
