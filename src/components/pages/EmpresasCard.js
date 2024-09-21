import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import styles from './EmpresasCard.module.css';
import LinkButton from '../layout/LinkButton';

const EmpresasCard = ({ id, name }) => {

    const idEmpresa = id

    return (
        <div className={styles.empresa_card}>
            <h4>{name}</h4>

            <div className={styles.icon_container}>
                <LinkButton 
                    to={`/editar-empresa/${id}`} 
                    className={styles.icon_button} 
                    text={<FaEdit />} 
                />
                <LinkButton 
                    to={`/confirm-delete?id=${id}&name=${encodeURIComponent(name)}`} 
                    className={styles.icon_button} 
                    text={<FaTrash />} 
                />
            </div>
            
            <div className={styles.button_container}>
                <LinkButton 
                    to={`/equipamentos/${idEmpresa}?empresa=${encodeURIComponent(name)}`} 
                    text='Ver equipamentos' 
                />
            </div>
        </div>
    );
};

export default EmpresasCard;
