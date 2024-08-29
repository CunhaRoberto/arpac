import React from 'react';
import styles from './EmpresasCard.module.css'; // Verifique se o caminho está correto
import LinkButton from '../layout/LinkButton';

const EmpresasCard = ({ id, name, startDate, finishDate }) => {
    return (
        <div className={styles.empresa_card}>
            <h4>{name}</h4>
            {/* Descomente estas linhas se precisar exibir as datas */}
            {/* 
            <p><span>Partida:</span> {startDate}</p>
            <p><span>Chegada:</span> {finishDate} (estimada)</p>
            */}
            
            {/* Contêiner para os botões */}
            <div className={styles.button_container}>
                <LinkButton to={`/registrarvisitas/${id}`} text='Registrar visita' />
                <LinkButton to={`/cadastrarequipamentos/${id}`} text='Cadastrar equipamento' />
            </div>
        </div>
    );
};

export default EmpresasCard;
