import React, { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './CadastrarEquipamento.module.css';
import Msg from "../layout/Msg.js";
import EditarEquipamentoForm from '../editarEquipamentoForm/EditarEquipamentoForm.js';

const EditarEquipamento = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const { id } = useParams();
    const [equipamento, setEquipamento] = useState([]);

    useEffect(() => {
        if (id) {
            fetch(`https://arpac-api.onrender.com/v1/equipamentos/id?id=${id}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            .then((resp) => resp.json())
            .then((data) => {             
                const { id, name } = data; 
                setEquipamento({ id, name });
                
            })
                .catch((err) => console.log(err))                
        }
    }, [id]);
    
     
    function update(equipamento) {        
        setMsg('');
        setSuccessMsg('');
        console.log(JSON.stringify(equipamento))
        
        const msgError = 'Algo de errado aconteceu, tente novamente mais tarde!';

        fetch(`https://arpac-api.onrender.com/v1/equipamentos/id?id=${id}&name=${equipamento.name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(equipamento),
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
            setSuccessMsg('Equipamento alterado com sucesso!');
            localStorage.setItem('msg', 'Equipamento alterado com sucesso!');
            navigate(-1);
        })
        .catch((err) => {
            console.log(err);
            setMsg(msgError);
        });
    }

    return (
        <div className={styles.registrarEquipamento_container}>
            <h1>Editar Equipamento</h1>
            {successMsg && <Msg type='success' msg={successMsg} />}
            {msg && <Msg type='error' msg={msg} />}
            <EditarEquipamentoForm 
                handleSubmit={update}
                btnText='Alterar'
                equipamentoDto={equipamento}
            />
        </div>
    );
};

export default EditarEquipamento;
