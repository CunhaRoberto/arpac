import React from 'react';
import styles from './Reservar.module.css'
import ReservarForm from '../reservarForm/ReservarForm';

const Reservar = () => {
    return (
        <div className={styles.reservar_container}>
            <h1>Registrar visita</h1>
            <ReservarForm btnText = 'Registrar'/>
        </div>
    );
};

export default Reservar;
