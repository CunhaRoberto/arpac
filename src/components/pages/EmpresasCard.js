import React from 'react';
import styles from './EmpresasCard.module.css'; // Verifique se o caminho está correto
import LinkButton from '../layout/LinkButton';

const EmpresasCard = ({ id, name, startDate, finishDate }) => {
    
    return (
        <div className={styles.empresa_card}>
            <h4>{name}</h4>
            <p><span>Data da última visita:</span>24/08/2024</p>
            <p><span>Previsão da próxima visita:</span> 30/12/2024</p>

            {/* <p><span>Data da última visita:</span> {startDate}</p>
            <p><span>Previsão da próxima visita:</span> {finishDate} (estimada)</p> */}
            
            {/* Contêiner para os botões */}
            <div className={styles.button_container}>
                <LinkButton to='/registrarvisitas' text='Registrar visita' id={id} />     
                <LinkButton to='/cadastrarequipamentos' text='Cadastrar equipamento' id={id} />
                
            </div>
           
        </div>
    );
};

export default EmpresasCard;
