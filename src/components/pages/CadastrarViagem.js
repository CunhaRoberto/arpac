import React from 'react';
import styles from './CadastrarViagem.module.css'
import CadastrarViagemForm from '../cadastrarForm/CadastrarForm';



const CadastrarViagem = () => {
   
    return (
        <div className={styles.cadastrar_viagem_container}>
            <h1>Cadastrar uma viagem</h1>
            <CadastrarViagemForm btnText = 'Cadastrar'/>
        </div>
    );
    
};

export default CadastrarViagem;
