import React from 'react';
import styles from './ViagensCard.module.css';
// import {BsPencil, BsFillTrashFill} from 'react-icons/bs';

const ViagensCard = ({ id, name }) => {
    return (
        <div className={styles.viagem_card}>
            <h4>'SÃO PAULO / SÃO JOSE DO RIO PRETO'</h4>
            <p>
                <span>Confirmado:</span> {id}
            </p>   
        </div>
    );
};

export default ViagensCard;
