import { useState } from 'react';
import Input from '../layout/form/Input';
import { useParams, useLocation, useNavigate } from 'react-router-dom'; // Adicione useNavigate aqui
import SubmitButton from '../layout/form/SubmitButton';
import styles from '../layout/form/SubmitButton.module.css';
import PropTypes from 'prop-types'; // Não esqueça de importar PropTypes

const CadastrarEquipamentosForm = ({ handleSubmit, btnText, equipamentoDto }) => {
    const location = useLocation();
    const { id } = useParams(); 
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('name');
    
    const navigate = useNavigate(); // Defina a função de navegação aqui
    console.log(empresaName);

    const [equipamento, setEquipamento] = useState(() => ({
        ...equipamentoDto,
        idEmpresa: id 
    }));

    const [errors, setErrors] = useState({});
    
    const submit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            handleSubmit(equipamento);
        }
    };

    const handleChange = (e) => {
        setEquipamento({ ...equipamento, [e.target.name]: e.target.value }); 
    };

    const validate = () => {
        const newErrors = {};          
        if (!equipamento.name) newErrors.name = 'Campo Obrigatório.'          
        return newErrors;
    };
    
    const handleCancel = () => {
        navigate(-1); // Navega para a página anterior
    };

    return (
        <form onSubmit={submit}>
            <div>
                <h2>Empresa: {empresaName}</h2> 
            </div>

            {errors.name && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.name}</p>}  
            <Input 
                type='text' // Corrigido para 'text'
                text='Descrição do equipamento' 
                name='name'               
                value={equipamento.name || ''}
                handleOnChange={handleChange}
            />
            <div className={styles.button_group}>
                <SubmitButton text={btnText} />
                <button type='button' onClick={handleCancel} className={styles.btn}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

CadastrarEquipamentosForm.propTypes = { // Corrigido o nome aqui
    handleSubmit: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired,
    equipamentoDto: PropTypes.shape({
        name: PropTypes.string,
    }),
};

export default CadastrarEquipamentosForm;
