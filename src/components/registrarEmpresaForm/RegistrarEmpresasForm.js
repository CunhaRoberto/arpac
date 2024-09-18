import { useState, useEffect } from 'react';
import Input from '../layout/form/Input';
import { useLocation } from 'react-router-dom';
import SubmitButton from '../layout/form/SubmitButton';
import styles from '../layout/form/SubmitButton.module.css';
import PropTypes from 'prop-types'; // Importando PropTypes

const RegistrarEmpresasForm = ({ handleSubmit, btnText }) => {
    const location = useLocation();    
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('empresa');
    
    const [empresa, setEmpresa] = useState({});
    const [errors, setErrors] = useState({});

    const submit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            handleSubmit(empresa);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpresa((prevEmpresa) => ({
            ...prevEmpresa,
            [name]: value,
        }));
    };

    const validate = () => {
        const validationErrors = {};
        if (!empresa.name) validationErrors.name = 'Campo Obrigatório.';
        return validationErrors;
    };

    const handleCancel = () => {
        // Navegar de volta ou fazer qualquer outra ação necessária
        console.log("Cancelado");
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
                <label htmlFor="empresaName">Nome da empresa</label>
                <Input 
                    type='text' 
                    id='empresaName'
                    name='name'
                    value={empresa.name || ''}
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

RegistrarEmpresasForm.propTypes = { // Corrigido o nome aqui
    handleSubmit: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired,
};

export default RegistrarEmpresasForm;
