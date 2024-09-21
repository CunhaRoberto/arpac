import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importa os ícones
import styles from './Revisoes.module.css';
import LinkButton from '../layout/LinkButton';

const RevisoesCard = ({ id, name, equipamento, idEquipamento }) => {

    // const queryParams = new URLSearchParams(location.search);
    // const empresaName = queryParams.get('empresa');

    
    return (
        <div className={styles.equipamento_card}>
            <h4>{name}</h4>           

            <div className={styles.icon_container}>
                <LinkButton 
                    to={`/editar-equipamento/${id}?name=${encodeURIComponent(name)}&empresa=${encodeURIComponent(equipamento)}`} 
                    className={styles.icon_button} 
                    text={<FaEdit />} 
                />
                <LinkButton 
                   to={`/delete-equipamento?id=${id}&name=${encodeURIComponent(name)}&type= o equipamento`}
                    className={styles.icon_button} 
                    text={<FaTrash />} 
                />
            </div>
            
            <p><span>Próxima revisão:</span> 12/12/2024 (estimada)</p>

            <div className={styles.button_container}>
                
                <LinkButton 
                    to={`/pesquisar-revisoes/${idEquipamento}/?name=${encodeURIComponent(name)}`} 
                    text='Lista de revisões' 
                />
                <LinkButton 
                    to={`/registrarvisitas/${id}/${idEmpresa}?name=${encodeURIComponent(name)}&empresa=${encodeURIComponent(equipamento)}`} 
                    text='Registrar revisão' 
                />
                
            </div>
            
        </div>
    );
};

export default RevisoesCard;
