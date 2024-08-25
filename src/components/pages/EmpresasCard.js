import React from 'react';
import styles from './EmpresasCard.module.css';
import LinkButton from '../layout/LinkButton';
// import {BsPencil, BsFillTrashFill} from 'react-icons/bs';

const ViagensCard = ({ id, name, startDate , finishDate}) => {
    return (
        <div className={styles.viagem_card}>
            <h4>{name}</h4>           
            {/* <p><span>Partida:</span> {startDate}</p>
            <p><span>Chegada:</span> {finishDate} (estimada)</p>  */}
            
            <LinkButton to='/registrarvisitas' text='Registar visita' /> 
        </div>
    );
};

export default ViagensCard;
