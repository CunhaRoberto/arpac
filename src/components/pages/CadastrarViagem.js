import React from 'react';
import styles from './CadastrarViagem.module.css'
import CadastrarViagemForm from '../cadastrar/CadastrarForm';
import SubmitButton from '../layout/form/SubmitButton';


const CadastrarViagem = () => {
    return (
        <div className={styles.newproject_container}>
            <h1>Cadastrar Viagem</h1>
            <CadastrarViagemForm />
            <p>Data</p>
            <p>----</p>
            <p>Horário de partida</p>
            <p>----</p>
            <p>Estimativa de chegada(Data hora?) </p>
            <p>----</p>
            <SubmitButton />
            <p>----</p>
            <p>----</p>
            <p>----</p>
            <p>Lista de viagens cadastradas</p>


        </div>
    );
};

export default CadastrarViagem;
