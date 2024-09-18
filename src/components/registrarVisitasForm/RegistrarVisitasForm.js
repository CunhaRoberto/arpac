import React, { useState } from 'react';
import Input from '../layout/form/Input';
import { useLocation, useNavigate } from 'react-router-dom'; // Adicionei useNavigate
import SubmitButton from '../layout/form/SubmitButton';
import PropTypes from 'prop-types'; // Importando PropTypes
import styles from '../layout/form/SubmitButton.module.css';

const RegistrarVisitasForm = ({ handleSubmit, btnText }) => {
    const navigate = useNavigate(); // Inicializando o navigate
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('empresa');

    const [visita, setVisita] = useState({});
    const [errors, setErrors] = useState({});

    const submit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            handleSubmit(visita);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVisita((prevVisita) => ({
            ...prevVisita,
            [name]: value,
        }));
    };

    const validate = () => {
        const validationErrors = {};
        if (!visita.name) validationErrors.name = 'Campo Obrigatório.';
        return validationErrors;
    };

    const handleCancel = () => {
        navigate(-1); // Volta para a página anterior
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
                <label htmlFor="visitaName">Nome da visita</label>
                <Input 
                    type='text' 
                    id='visitaName'
                    name='name'
                    value={visita.name || ''}
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

RegistrarVisitasForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired,
};

export default RegistrarVisitasForm;
