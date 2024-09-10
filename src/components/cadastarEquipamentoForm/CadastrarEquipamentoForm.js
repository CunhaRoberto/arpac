import { useState } from 'react';
import Input from '../layout/form/Input';
import { useParams, useLocation, } from 'react-router-dom';
import SubmitButton from '../layout/form/SubmitButton';

const CadastrarEquipamentosForm = ({ handleSubmit, btnText, equipamentoDto }) => {
    const location = useLocation();
    const { id } = useParams(); 
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('name');
        
    console.log(empresaName)    
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
            console.log(equipamento);
            setErrors({});
            handleSubmit(equipamento);
        }
    };
    const handleChange = (e) => {
        setEquipamento({...equipamento, [e.target.name]: e.target.value}); 

    }
   
    const validate = () => {
        const newErrors = {};          
        if (!equipamento.name) newErrors.name = 'Campo Obrigatório.'          

        return newErrors;
    };

    return (
        <form onSubmit={submit}>
             <div>
                <h2>Empresa: {empresaName}</h2> 
                <p></p>
            </div>

            {errors.name && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.name}</p>}  
            <Input 
                type='txt' 
                text='Descrição do equipamento' 
                name='name'               
                value={equipamento.name || ''}
                handleOnChange={handleChange}
            />

            <SubmitButton text={btnText}/>
        </form>
    );
};

export default CadastrarEquipamentosForm;
