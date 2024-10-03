import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Msg from "../layout/Msg.js";
import EditarRevisaoForm from '../editarRevisaoForm/EditarRevisaoForm.js';

const EditarRevisao = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const { id } = useParams();
    const [equipamento, setEquipamento] = useState({});

    useEffect(() => {
        if (id) {
            fetch(`https://arpac-api.onrender.com/v1/equipamentos/id?id=${id}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Erro ao buscar equipamento');
                }
                return resp.json();
            })
            .then((data) => {             
                const { id, name } = data; 
                setEquipamento({ id, name });
            })
            .catch((err) => {
                console.error(err);
                setMsg('Erro ao buscar dados do equipamento.');
            });
        }
    }, [id]);
    
    const update = (equipamento) => {        
        setMsg('');
        setSuccessMsg('');
        
        const msgError = 'Algo de errado aconteceu, tente novamente mais tarde!';

        fetch(`https://arpac-api.onrender.com/v1/equipamentos/id?id=${id}&name=${equipamento.name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(equipamento),
        })
        .then((resp) => {
            if (!resp.ok) {
                throw new Error('Erro ao atualizar o equipamento');
            }
            return resp.json();
        })
        .then((data) => {
            setSuccessMsg('Revisão alterada com sucesso!');
            localStorage.setItem('msg', 'Revisão alterada com sucesso!');
            navigate(-1);
        })
        .catch((err) => {
            console.error(err);
            setMsg(msgError);
        });
    }

    return (
        <div>
            <h1>Editar Revisão</h1>
            {successMsg && <Msg type='success' msg={successMsg} />}
            {msg && <Msg type='error' msg={msg} />}
            <EditarRevisaoForm 
                handleSubmit={update}
                btnText='Confirmar'
                equipamentoDto={equipamento}
            />
        </div>
    );
};

export default EditarRevisao;
