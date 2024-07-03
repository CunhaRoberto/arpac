import React from 'react';
import Bus from '../../img/bus.jpg'
import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton';

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>
                Seja bem vindo ao <span>Transporte seguro CPI-5</span>
            </h1>
            <p>Viagem seguro para nossos policiais.</p>
            <LinkButton to='/newproject' text='Reservar passagem' />
            <img src={Bus} alt='Transporte'/>

        </section>
    );
};

export default Home;
