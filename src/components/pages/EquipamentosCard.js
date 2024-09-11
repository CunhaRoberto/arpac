import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importa os ícones
import styles from './EquipamentosCard.module.css';
import LinkButton from '../layout/LinkButton';

const EquipamentosCard = ({ id, name, idEmpresa, empresa }) => {

    // const queryParams = new URLSearchParams(location.search);
    // const empresaName = queryParams.get('empresa');

    return (
        <div className={styles.equipamento_card}>
            <h4>{name}</h4>

            <div className={styles.icon_container}>
                <LinkButton 
                    to={`/alterar-empresa/${id}`} 
                    className={styles.icon_button} 
                    text={<FaEdit />} 
                />
                <LinkButton 
                   to={`/delete-equipamento?id=${id}&name=${encodeURIComponent(name)}&type= o equipamento`}
                    className={styles.icon_button} 
                    text={<FaTrash />} 
                />
            </div>
            
            <p><span>Próxima visita:</span> 12/12/2024 (estimada)</p>

            <div className={styles.button_container}>
                {/* <LinkButton 
                    to={`/cadastrarequipamentos/${id}`} 
                    text='Cadastrar equipamento' 
                />
                <LinkButton 
                    to={`/confirm-delete?id=${id}&name=${encodeURIComponent(name)}`}
                    text='Excluir Equipamento'
                    className={styles.delete_button}
                /> */}
                <LinkButton 
                    to={`/registrarvisitas/${id}/${idEmpresa}/${encodeURIComponent(name)}/${encodeURIComponent(empresa)}`} 
                    text='Registrar visita' 
                />

                {/* <LinkButton 
                    to={`/equipamentos/${id}?name=${encodeURIComponent(name)}`} 
                    text='Ver equipamentos' 
                /> */}
            </div>
            
        </div>
    );
};

export default EquipamentosCard;
