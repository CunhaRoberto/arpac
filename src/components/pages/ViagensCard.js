import React from 'react';
import styles from './ViagensCard.module.css';
// import {BsPencil, BsFillTrashFill} from 'react-icons/bs';

const ViagensCard = ({ id, name, startDate }) => {
    return (
        <div className={styles.viagem_card}>
            <h4>{name}</h4>           
            <p><span>Partida:</span> {startDate}</p>
            <p><span>Chegada:</span> {startDate} (estimada)</p> 
        </div>
    );
};

export default ViagensCard;
