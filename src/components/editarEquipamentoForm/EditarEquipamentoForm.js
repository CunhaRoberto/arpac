import { useState, useEffect } from 'react';
import Input from '../layout/form/Input';
import { useLocation } from 'react-router-dom';
import SubmitButton from '../layout/form/SubmitButton';

const EditarEquipamentosForm = ({ handleSubmit, btnText, equipamentoDto }) => {
    const location = useLocation();    
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('empresa');
    
   
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

            <SubmitButton text={btnText} />
        </form>
    );
};

export default EditarEquipamentosForm;
