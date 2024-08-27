import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegistrarEmpresas.module.css';
import Msg from "../layout/Msg.js";
import RegistrarEmpresasForm from '../registrarEmpresaForm/RegistrarEmpresasForm.js';

const RegistrarEmpresas = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

 
    // function formatDateToISO(dateString) {
    //     const date = new Date(dateString);
    //     return isNaN(date) ? '' : date.toISOString();
    // }
    

    function createPost(empresa) {
        setMsg('');
        setSuccessMsg('');

        const formattedEmpresa = {
            ...empresa,
            // startDate: formatDateToISO(empresa.startDate),
            // finishDate: formatDateToISO(empresa.finishDate),
        };

        const msgError = 'Algo de errado aconteceu, tente novamente mais tarde!';

        fetch("https://arpac-api.onrender.com/v1/empresa/", {
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
            setSuccessMsg('Empresa cadastrada com sucesso!');
            localStorage.setItem('msg', 'Empresa cadastrada com sucesso!');
            navigate('/empresas');
        })
        .catch((err) => {
            console.log(err);
            setMsg(msgError);
        });
    }

    return (
        <div className={styles.registrarEmpresa_container}>
            <h1>Cadastrar Empresa</h1>
            {successMsg && <Msg type='success' msg={successMsg} />}
            {msg && <Msg type='error' msg={msg} />}
            <RegistrarEmpresasForm 
                handleSubmit={createPost}
                btnText='Cadastrar'
            />
        </div>
    );
};

export default RegistrarEmpresas;
