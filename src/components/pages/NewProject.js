import React from 'react';
import styles from './NewProject.module.css'
import ReservarForm from '../reservar/ReservarForm';

const Reservar = () => {
    return (
        <div className={styles.newproject_container}>
            <h1>Reservar passagem</h1>
            <ReservarForm/>
        </div>
    );
};

export default Reservar;
