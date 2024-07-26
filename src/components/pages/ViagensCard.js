import React from 'react';
import styles from './ViagensCard.module.css';
import LinkButton from '../layout/LinkButton';
// import {BsPencil, BsFillTrashFill} from 'react-icons/bs';

const ViagensCard = ({ id, name, startDate , finishDate}) => {
    return (
        <div className={styles.viagem_card}>
            <h4>{name}</h4>           
            <p><span>Partida:</span> {startDate}</p>
            <p><span>Chegada:</span> {finishDate} (estimada)</p> 
            
            <LinkButton to='/reservar' text='Reservar passgem' /> 
        </div>
    );
};

export default ViagensCard;
