import React from 'react';
import { useEffect } from 'react';
import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton';

const Home = () => {

    useEffect(() => {
        
       
        fetch("https://user-api-p9ru.onrender.com/v1/routes/", {    
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            
        })
        .catch((err) => console.log(err));

       
    }, []);
    return (
        <section className={styles.home_container}>
            <h1>
                Seja bem vindo ao <span>Transporte seguro CPI-5</span>
            </h1>
            <p>Viagem seguro para nossos policiais.</p>
            <LinkButton to='/viagens' text='Próximas viagens' />
            {/* <img src={Bus} alt='Transporte'/> */}

        </section>
    );
};

export default Home;
