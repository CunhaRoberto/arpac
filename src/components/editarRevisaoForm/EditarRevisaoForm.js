import { useState, useEffect } from 'react';
import Input from '../layout/form/Input';
import { useLocation, useNavigate } from 'react-router-dom';
import SubmitButton from '../layout/form/SubmitButton';
import Select from '../layout/form/Select'; // Assegure-se de que isso está importado
import styles from '../layout/form/SubmitButton.module.css';
import PropTypes from 'prop-types';

const EditarRevisaoForm = ({ handleSubmit, btnText, revisaoDto, tipoRevisao }) => {
    const location = useLocation();    
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('empresa');
   debugger 
    const navigate = useNavigate();
    const [revisao, setRevisao] = useState(revisaoDto || {});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setRevisao(revisaoDto || {});
    }, [revisaoDto]);

    const submit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            handleSubmit(revisao);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRevisao((prevRevisao) => ({
            ...prevRevisao,
            [name]: value,
        }));
    };

    const validate = () => {
        const validationErrors = {};
        if (!revisao.dataRevisao) validationErrors.dataRevisao = 'Campo Obrigatório.';
        if (!revisao.horasRevisao) validationErrors.horasRevisao = 'Campo Obrigatório.';
        if (!revisao.idRevisao) validationErrors.idRevisao = 'Campo Obrigatório.';
        return validationErrors;
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <form onSubmit={submit}>
            <div>
                <h2>Empresa: {empresaName.trim()}</h2>                    
            </div>

            <div>
                <h2>revisao: {revisao.name ? revisao.name.trim() : 'N/A'}</h2>                    
            </div>

            {errors.dataRevisao && <p style={{ color: 'red' }}>{errors.dataRevisao}</p>}  
            <Input 
                type='datetime-local' 
                text='Data' 
                name='dataRevisao'               
                value={revisao.dataRevisao || ''}
                handleOnChange={handleChange}
            />

            {errors.horasRevisao && <p style={{ color: 'red' }}>{errors.horasrevisao}</p>}
            <Input 
                type='number' 
                text='Quantidade de horas'
                name='horasRevisao' 
                placeholder='Insira a quantidade de horas'
                value={revisao.horasRevisao || ''}
                handleOnChange={handleChange}             
            />

            {errors.idRevisao && <p style={{ color: 'red' }}>{errors.idRevisao}</p>}
            <Select 
                name='idRevisao' 
                text='Selecione o tipo de revisão'
                options={tipoRevisao} 
                handleOnChange={handleChange}
                value={revisao.idRevisao || ''}
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

EditarRevisaoForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    btnText: PropTypes.string.isRequired,
    revisaoDto: PropTypes.shape({
        name: PropTypes.string,
        dataRevisao: PropTypes.string,
        horasRevisao: PropTypes.number,
        idRevisao: PropTypes.string,
    }),
    tipoRevisao: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default EditarRevisaoForm;
