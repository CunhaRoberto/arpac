import React from 'react';
import styles from './EmpresasCard.module.css'; // Verifique se o caminho está correto
import LinkButton from '../layout/LinkButton';

const EmpresasCard = ({ id, name, startDate, finishDate }) => {
    return (
        <div className={styles.empresa_card}>
            <h4>{name}</h4>
            {/* Descomente estas linhas se precisar exibir as datas */}
            
            
            <p><span>Estimamativa da próxima visita:</span> 12/12/2024</p>
           
            
            {/* Contêiner para os botões */}
            <div className={styles.button_container}>
                <LinkButton to={`/registrarvisitas/${id}`} text='Registrar visita' />
                <LinkButton to={`/cadastrarequipamentos/${id}`} text='Cadastrar equipamento' />
                <LinkButton to={`/registrarvisitas/${id}`} text='Alterar Empresa' />
                <LinkButton to={`/cadastrarequipamentos/${id}`} text='Alterar equipamento' />
                <LinkButton to={`/registrarvisitas/${id}`} text='Excluir Empresa' />
                <LinkButton to={`/cadastrarequipamentos/${id}`} text='Excluir equipamento' />
            </div>
        </div>
    );
};

export default EmpresasCard;
