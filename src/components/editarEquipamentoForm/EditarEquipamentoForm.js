import { useState, useEffect } from 'react';
import Input from '../layout/form/Input';
import { useLocation, useNavigate } from 'react-router-dom';
import SubmitButton from '../layout/form/SubmitButton';
import styles from '../layout/form/SubmitButton.module.css';
import PropTypes from 'prop-types'; // Importando PropTypes

const EditarEquipamentosForm = ({ handleSubmit, btnText, equipamentoDto }) => {
    const location = useLocation();    
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('empresa');
    
    const navigate = useNavigate(); // Adicionando a navegação
    const [equipamento, setEquipamento] = useState(equipamentoDto || {});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setEquipamento(equipamentoDto || {});
    }, [equipamentoDto]);

    const submit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            handleSubmit(equipamento);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEquipamento((prevEquipamento) => ({
            ...prevEquipamento,
            [name]: value,
        }));
    };

    const validate = () => {
        const validationErrors = {};
        if (!equipamento.name) validationErrors.name = 'Campo Obrigatório.';
        return validationErrors;
    };

    const handleCancel = () => {
        navigate(-1); // Navega para a página anterior
    };

    return (
        <form onSubmit={submit}>
            <div>
                <h2>Empresa: {empresaName}</h2>
            </div>

            {errors.name && (
                <p className="error-message">{errors.name}</p>
            )}

            <div className="form-group">
                <label htmlFor="equipamentoName">Descrição do equipamento</label>
                <Input 
                    type='text' 
                    id='equipamentoName'
                    name='name'
                    value={equipamento.name || ''}
                    handleOnChange={handleChange}
                />
            </div>
            <div className={styles.button_group}>
                <SubmitButton text={btnText} />
                <button type='button' onClick={handleCancel} className={styles.btn}>
                    Cancelar
                </button>
            </div>
        </form>
    );
};

EditarEquipamentosForm.propTypes = { // Corrigido o nome aqui
    handleSubmit: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired,
    equipamentoDto: PropTypes.shape({
        name: PropTypes.string,
    }),
};

export default EditarEquipamentosForm;
