import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Msg from "../layout/Msg.js";




import styles from './RegistrarRevisao.module.css'
import RegistrarRevisaoForm from '../registrarRevisaoForm/RegistrarRevisaoForm.js';

const Reservar = () => {

    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

 
    function formatDateToISO(dateString) {
        const date = new Date(dateString);
        return isNaN(date) ? '' : date.toISOString();
    }
    

    function createPost(visita) {
        setMsg('');
        setSuccessMsg('');

        const formattedVisita = {
            ...visita,
            dataRevisao : formatDateToISO(visita.dataRevisao),
            // finishDate: formatDateToISO(visita.finishDate),
        };
        console.log('data revisão', formattedVisita)
        
        const msgError = 'Algo de errado aconteceu, tente novamente mais tarde!';

        fetch("https://arpac-api.onrender.com/v1/revisao/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formattedVisita),
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
            setSuccessMsg('Visita registrada com sucesso!');
            localStorage.setItem('msg', 'Visita registrada com sucesso!');
            navigate('/empresas');
        })
        .catch((err) => {
            console.log(err);
            setMsg(msgError);
        });
    }


    return (
        <div className={styles.reservar_container}>
            <h1>Registrar revisão</h1>
            {successMsg && <Msg type='success' msg={successMsg} />}
            {msg && <Msg type='error' msg={msg} />}
            <RegistrarRevisaoForm 
            handleSubmit={createPost}
            btnText = 'Registrar'/>
        </div>
    );
};

export default Reservar;


