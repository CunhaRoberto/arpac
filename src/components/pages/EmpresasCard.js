import React from 'react';
import styles from './EmpresasCard.module.css'; // Verifique se o caminho está correto
import LinkButton from '../layout/LinkButton';

const EmpresasViagensCard = ({ id, name, startDate, finishDate }) => {
    return (
        <div className={styles.empresa_card}>
            <h4>{name}</h4>
            
            {/* <p><span>Partida:</span> {startDate}</p>
            <p><span>Chegada:</span> {finishDate} (estimada)</p> */}
            
            {/* Contêiner para os botões */}
            <div className={styles.button_container}>
                <LinkButton to='/registrarvisitas' text='Registrar visita' />     
                <LinkButton to='/cadastrarequipamentos' text='Cadastrar equipamento' />
            </div>
        </div>
    );
};

export default EmpresasViagensCard;
