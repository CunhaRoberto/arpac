import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './CadastrarViagem.module.css'
import CadastrarViagemForm from '../cadastrarForm/CadastrarForm';



const CadastrarViagem = () => {

    const navigate = useNavigate()

    function createPost(travel){
      
         fetch("https://user-api-p9ru.onrender.com/v1/travel/", {    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travel),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            
            navigate('/contato', { state: { message: 'Viagem cadastrada com sucesso!' } });
        })
        .catch((err) => console.log(err));


    }
   
    return (
        <div className={styles.cadastrar_viagem_container}>
            <h1>Cadastrar uma viagem</h1>
            <CadastrarViagemForm 
                handleSubmit={createPost}
                btnText = 'Cadastrar'
            />
        </div>
    );
    
};

export default CadastrarViagem;
