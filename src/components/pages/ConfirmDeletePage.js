import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from '../layout/modal/Modal'; // Verifique o caminho correto

const ConfirmDeletePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const id = queryParams.get('id');
    const name = queryParams.get('name');

    const handleConfirmDelete = () => {
        // Lógica para excluir a empresa usando o id
        console.log(`Empresa excluída: ${name} (ID: ${id})`);
        navigate('/empresas'); // Redireciona de volta para a lista de empresas
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
