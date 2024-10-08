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
             <span>ARPAC</span>
            </h1>
            <h1>      
             <span>Controle de Manutenções.</span>
            </h1>
            {/* <p>Seja bem vindo !!!!</p> */}
            <LinkButton to='/empresas' text='Lista de empresas' />
            {/* <img src={Bus} alt='Transporte'/> */}

        </section>
    );
};

export default Home;
