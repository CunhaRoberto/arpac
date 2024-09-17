import { useState, useEffect } from 'react';
import Input from '../layout/form/Input';
import { useLocation } from 'react-router-dom';
import SubmitButton from '../layout/form/SubmitButton';

const EditarEmpresaForm = ({ handleSubmit, btnText, empresaDto }) => {
    const location = useLocation();    
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('empresa');
    
    console.log(empresaDto)
   
    const [empresa, setEmpresa] = useState(empresaDto || {});
    const [errors, setErrors] = useState({});

   
    useEffect(() => {
        setEmpresa(empresaDto || {});
    }, [empresaDto]);

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

    return (
        <form onSubmit={submit}>
            <div>
                <h2>Empresa: {empresaName}</h2>
            </div>

            {errors.name && (
                <p className="error-message">{errors.name}</p>
            )}

            <div className="form-group">
                <label htmlFor="empresaName">Descrição do empresa</label>
                <Input 
                    type='text' 
                    id='empresaName'
                    name='name'
                    value={empresa.name || ''}
                    handleOnChange={handleChange}
                />
            </div>

            <SubmitButton text={btnText} />
        </form>
    );
};

export default EditarEmpresaForm;
