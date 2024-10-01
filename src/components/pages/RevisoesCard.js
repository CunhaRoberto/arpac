import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importa os ícones
import styles from './RevisoesCard.module.css';
import LinkButton from '../layout/LinkButton';

const RevisoesCard = ({ id, name, equipamento, idEquipamento, dataRevisao, tipoRevisao, horasEquipamento }) => {

    // const queryParams = new URLSearchParams(location.search);
    // const empresaName = queryParams.get('empresa');

    
    return (
        <div className={styles.equipamento_card}>
            <h4>{tipoRevisao}</h4>           

            
            <p><span>Informações da revisão</span> </p>
            <p><span>Data:</span> {dataRevisao}</p>
            <p><span>Horas do equipamento:</span> {horasEquipamento}</p>
            

            <div className={styles.icon_container}>
                <LinkButton 
                    to={`/editar-revisao/${id}?name=${encodeURIComponent(name)}&empresa=${encodeURIComponent(equipamento)}`} 
                    className={styles.icon_button} 
                    text={<FaEdit />} 
                />
                <LinkButton 
                   to={`/delete-revisao?id=${id}&name=${encodeURIComponent(name)}&type= o equipamento`}
                    className={styles.icon_button} 
                    text={<FaTrash />} 
                />
            </div>

            {/* <div className={styles.button_container}>
                
                <LinkButton 
                    //to={`/pesquisar-revisoes/${idEquipamento}/?name=${encodeURIComponent(name)}`} 
                    text='Lista de revisões' 
                />
                <LinkButton 
                    //to={`/registrarvisitas/${id}/${idEmpresa}?name=${encodeURIComponent(name)}&empresa=${encodeURIComponent(equipamento)}`} 
                    text='Registrar revisão' 
                />
                
            </div> */}
            
        </div>
    );
};

export default RevisoesCard;
