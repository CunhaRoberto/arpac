import React from 'react';
import styles from './Reservar.module.css'
import ReservarForm from '../reservar/ReservarForm';

const Reservar = () => {
    return (
        <div className={styles.reservar_container}>
            <h1>Reservar passagem</h1>
            <ReservarForm btnText = 'Reservar'/>
        </div>
    );
};

export default Reservar;
