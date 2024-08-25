import React from 'react';
import styles from './RegistrarVisitas.module.css'
import RegistrarVisitasForm from '../registrarVisitasForm/RegistrarVisitasForm';

const Reservar = () => {
    return (
        <div className={styles.reservar_container}>
            <h1>Registrar visita</h1>
            <RegistrarVisitasForm btnText = 'Registrar'/>
        </div>
    );
};

export default Reservar;
