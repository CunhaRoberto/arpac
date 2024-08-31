import React from 'react';
import styles from './EmpresasCard.module.css'; // Verifique se o caminho está correto
import LinkButton from '../layout/LinkButton';

const EmpresasCard = ({ id, name, startDate, finishDate }) => {
    return (
        <div className={styles.empresa_card}>
            <h4>{name}</h4>
            
            <p><span>Próxima visista:</span> 12/12/2024 (estimada)</p>
            
            {/* Contêiner para os botões */}
            <div className={styles.button_container}>
                <LinkButton to={`/registrarvisitas/${id}`} text='Registrar visita' />
                <LinkButton to={`/cadastrarequipamentos/${id}`} text='Cadastrar equipamento' />
                <LinkButton to={`/empresas/`} text='Alterar Empresa' />
                <LinkButton to={`/empresas/`} text='Alterar equipamento' />
                <LinkButton to={`/empresas/`} text='Excluir Empresa' />
                <LinkButton to={`/empresas/`} text='Excluir equipamento' />
            </div>
        </div>
    );
};

export default EmpresasCard;
