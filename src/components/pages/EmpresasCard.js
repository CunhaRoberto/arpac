import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importa os ícones
import styles from './EmpresasCard.module.css';
import LinkButton from '../layout/LinkButton';

const EmpresasCard = ({ id, name }) => {
    return (
        <div className={styles.empresa_card}>
            <h4>{name}</h4>

            <div className={styles.icon_container}>
                <LinkButton 
                    to={`/alterar-empresa/${id}`} 
                    className={styles.icon_button} 
                    text={<FaEdit />} 
                />
                <LinkButton 
                    to={`/confirm-delete?id=${id}&name=${encodeURIComponent(name)}`} 
                    className={styles.icon_button} 
                    text={<FaTrash />} 
                />
            </div>
            
            {/* <p><span>Próxima visita:</span> 12/12/2024 (estimada)</p> */}

            <div className={styles.button_container}>
                {/* <LinkButton 
                    to={`/cadastrarequipamento/${id}`} 
                    text='Cadastrar equipamento' 
                />
                <LinkButton 
                    to={`/confirm-delete?id=${id}&name=${encodeURIComponent(name)}`}
                    text='Excluir Equipamento'
                    className={styles.delete_button}
                />
                <LinkButton 
                    to={`/registrarvisitas/${id}?name=${encodeURIComponent(name)}`} 
                    text='Registrar visita' 
                /> */}

                <LinkButton 
                    to={`/equipamentos/${id}?empresa=${encodeURIComponent(name)}`} 
                    text='Ver equipamentos' 
                />
            </div>
        </div>
    );
};

export default EmpresasCard;
