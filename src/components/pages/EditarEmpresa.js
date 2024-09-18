import React, { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './EditarEmpresa.module.css';
import Msg from "../layout/Msg.js";
import EditarEmpresaForm from '../editarEmpresaForm/EditarEmpresaForm.js';

 const EditarEmpresa = () => {
    const navigate = useNavigate();
    const [msg, setMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const { id } = useParams();
    const [empresa, setEmpresa] = useState([]);

    useEffect(() => {
        if (id) {
            fetch(`https://arpac-api.onrender.com/v1/empresa/id?id=${id}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            .then((resp) => resp.json())
            .then((data) => {             
                const { id, name } = data; 
                setEmpresa({ id, name });
                
            })
                .catch((err) => console.log(err))                
        }
    }, [id]);
    
     
    function update(empresa) {        
        setMsg('');
        setSuccessMsg('');
        console.log(JSON.stringify(empresa))
       
        const msgError = 'Algo de errado aconteceu, tente novamente mais tarde!';

        fetch(`https://arpac-api.onrender.com/v1/empresa/id?id=${id}&name=${empresa.name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empresa),
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
            setSuccessMsg('Empresa alterada com sucesso!');
            localStorage.setItem('msg', 'Empresa alterada com sucesso!');
            navigate(-1);
        })
        .catch((err) => {
            console.log(err);
            setMsg(msgError);
        });
    }

    return (
        
        <div className={styles.registrarEquipamento_container}>
            <h1>Editar Empresa</h1>
            {successMsg && <Msg type='success' msg={successMsg} />}
            {msg && <Msg type='error' msg={msg} />}
            <EditarEmpresaForm 
                handleSubmit={update}
                btnText='Confirmar'
                empresaDto={empresa}
            />
        </div>
    );
};

export default EditarEmpresa;
