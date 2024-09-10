const ModalEq = ({ onClose }) => {
    return (
        <div style={{
            position: 'fixed', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', backgroundColor: '#fff',
            padding: '2rem', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', zIndex: 1000
        }}>
            <h2>Nenhum equipamento encontrado</h2>
            <p>Não há registros de equipamentos. Deseja cadastrar um novo equipamento?</p>
            <button onClick={onClose}>Fechar</button>
            <button onClick={() => {
                onClose();                
            }}>Cadastrar Equipamento</button>
        </div>
    );
};

export default ModalEq;
