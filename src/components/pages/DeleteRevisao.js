
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from '../layout/modal/Modal'; // Verifique o caminho correto

const DeleteRevisao = () => {
    const [successMsg, setSuccessMsg] = useState('Revisão excluida com sucesso!');
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
debugger
    const id = queryParams.get('id');
    const name = queryParams.get('name');
    const type = queryParams.get('type'); // Extraindo o novo parâmetro

    const handleConfirmDelete = async () => {
        try {
            const response = await fetch(`https://arpac-api.onrender.com/v1/revisao/id?id=${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
   
          

            console.log(data);
            setSuccessMsg(`${successMsg}`);
            localStorage.setItem('msg', 'Revisão excluída com sucesso!');
            navigate(-1);

            
        } catch (error) {
            console.error('Erro ao excluir a revisão:', error);
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
                // title={`Excluir  ${type} ${name}`}
                title={`Excluir revisão`}

                // message={`Tem certeza de que deseja excluir ${type} ${name}?`}
                message={`Tem certeza de que deseja excluir a revisão ?`}

            />
        </div>
    );
};

export default DeleteRevisao;
