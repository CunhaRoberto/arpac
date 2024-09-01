
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from '../layout/modal/Modal'; // Verifique o caminho correto

const ConfirmDeletePage = () => {
    const [successMsg, setSuccessMsg] = useState('Empresa excluida com sucesso!');
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const id = queryParams.get('id');
    const name = queryParams.get('name');

    const handleConfirmDelete = async () => {
        try {
            const response = await fetch(`https://arpac-api.onrender.com/v1/empresa/id?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
   
          

            console.log(data);
            setSuccessMsg(`${successMsg}`);
            localStorage.setItem('msg', 'Empresa excluida com sucesso!');
            navigate('/empresas');

            
        } catch (error) {
            console.error('Erro ao excluir a empresa:', error);
        }
    };

    const handleCloseModal = () => {
        navigate(-1); // Volta para a página anterior
    };

    return (
        <div>
            <Modal
                show={true}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                title={`Excluir ${name}`}
                message={`Tem certeza de que deseja excluir a empresa ${name}?`}
            />
        </div>
    );
};

export default ConfirmDeletePage;
