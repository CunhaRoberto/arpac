import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CadastrarEquipamento.module.css';
import Msg from "../layout/Msg.js";
import CadastrarEquipamentoForm from '../cadastarEquipamentoForm/CadastrarEquipamentoForm.js';

const CadastrarEquipamentos = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    function createPost(empresa) {
        setMsg('');
        setSuccessMsg('');

        const formattedEmpresa = {
            ...empresa,
            // startDate: formatDateToISO(empresa.startDate),
            // finishDate: formatDateToISO(empresa.finishDate),
        };

        const msgError = 'Algo de errado aconteceu, tente novamente mais tarde!';

        fetch("https://arpac-api.onrender.com/v1/equipamentos/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formattedEmpresa),
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
            setSuccessMsg('Equipamento cadastrado com sucesso!');
            localStorage.setItem('msg', 'Equipamento cadastrado com sucesso!');
            navigate(-1);
        })
        .catch((err) => {
            console.log(err);
            setMsg(msgError);
        });
    }

    return (
        <div className={styles.registrarEquipamento_container}>
            <h1>Cadastrar Equipamento</h1>
            {successMsg && <Msg type='success' msg={successMsg} />}
            {msg && <Msg type='error' msg={msg} />}
            <CadastrarEquipamentoForm 
                handleSubmit={createPost}
                btnText='Cadastrar'
            />
        </div>
    );
};

export default CadastrarEquipamentos;
