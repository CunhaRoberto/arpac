import { useState} from 'react';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';

const RegistrarEmpresasForm = ({ handleSubmit, btnText, empresaDto }) => {
    
    const [empresa, setEmpresa] = useState(empresaDto || {});    
    const [errors, setErrors] = useState({});

  

    const validate = () => {
        const newErrors = {};          
        if (!empresa.name) newErrors.name = 'Informe o nome da Empresa.'    
        return newErrors;
    };

    const submit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log(empresa);
            setErrors({});
            handleSubmit(empresa);
        }
    };

    const handleChange = (e) => {
        setEmpresa({...empresa, [e.target.name]: e.target.value});
    }; 
  

    return (
        <form onSubmit={submit}>  
           
        
            {errors.name && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.name}</p>}
          
            
            <Input 
                type='text' 
                text='Nome da empresa' 
                name='name' 
                placeholder='Digite o nome da Empresa'
                value={empresa.name || ''}
                handleOnChange={handleChange}
                />
            
    
            <SubmitButton text={btnText}/>
        </form>
    );
    
};

export default RegistrarEmpresasForm;


	
	