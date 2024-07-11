import React from 'react';
import styles from './Reservar.module.css'
import ReservarForm from '../reservarForm/ReservarForm';

const Reservar = () => {
    return (
        <div className={styles.reservar_container}>
            <h1>Reservar passagem</h1>
            <ReservarForm btnText = 'Pesquisar'/>
        </div>
    );
};

export default Reservar;
