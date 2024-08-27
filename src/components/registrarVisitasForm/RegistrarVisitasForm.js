import { useState } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';

const RegistrarVisitasForm = ({ handleSubmit, btnText, visitaDto }) => {
    
    const [equipamento] = useState([
                { idEquipamento: 1, name: 'QUZHOU ZHONGDU - LF-30Z - LF-30Z 211005555' },
                { idEquipamento: 2, name: 'Atlas Copco - GA18VSD+ - GA18VSD+ BQD112872' },
                { idEquipamento: 3, name: 'Atlas Copco - GA22150AP - GA22150AP PAU107692' },               
            ]);
        
            // const [horasDia] = useState([
            //     { id: 1, name: '24' },
            //     { id: 2, name: '12' },
            //     { id: 3, name: '8' }
                
            // ]);

            const [tipoRevisao] = useState([
                { idRevisao: 1, name: 'P Inspe' },
                { idRevisao: 2, name: 'Revisão 2K' },
                { idRevisao: 3, name: 'Revisão 4K' },
                { idRevisao: 4, name: 'Revisão 8K' }
                
                
            ]);
        


    const [visita, setVisita] = useState(visitaDto || {});
    const [errors, setErrors] = useState({});
    

        //    const [tipoRevisao, setEmbarque] = useState([]);
    // useEffect(() => {
    //     fetch("https://user-api-p9ru.onrender.com/v1/embarkation/", {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         setEmbarque(data);
    //     })
    //     .catch((err) => console.log(err));
    // }, []);

    const submit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log(visita);
            setErrors({});
            handleSubmit(visita);
        }
    };
    const handleChange = (e) => {
        setVisita({...visita, [e.target.name]: e.target.value});
        
    }

   
    const handleEquipamento = (e) => {
        setVisita({
            ...visita,
            idEquipamento: e.target.value,
            // descRoute:  e.target.options[e.target.selectedIndex].text,            
        });
    }

    // const handleMotivo = (e) => {
    //     setVisita({
    //         ...visita,
    //         idMotivo: e.target.value                       
    //     });
    // }

    const handleTipoRevisao = (e) => {
        setVisita({
            ...visita,
            idRevisao: e.target.value                       
        });
    }
    
    const validate = () => {
        const newErrors = {};          
        if (!visita.dataVisita) newErrors.dataVisita = 'Informe a data da visita.'  
        if (!visita.idEquipamento) newErrors.idEquipamento = 'Selecione o equipamento.'   
        if (!visita.horasEquipamento) newErrors.horasEquipamento = 'Informe as horas do equipamento.'   
        if (!visita.idRevisao || visita.name === 'Selecione....' ) newErrors.idRevisao = 'Selecione o tipo de revisão.'   

        return newErrors;
    };

    return (
        <form onSubmit={submit}>
            {errors.dataVisita && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.dataVisita}</p>}  
            <Input 
                type='datetime-local' 
                text='Data da visita' 
                name='dataVisita'               
                value={visita.dataVisita || ''}
                handleOnChange={handleChange}
            />

            {errors.equipamento && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.equipamento}</p>}
            <Select 
                name='idEquipamento' 
                text='Selecione o equipamento'
                options={equipamento} 
                handleOnChange={handleEquipamento}
                value={visita.idEquipamento ? visita.idEquipamento : ''}
            />

          
            {errors.horasEquipamento && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.horasEquipamento}</p>}
            <Input 
                type='number' 
                text='Quantidade de horas'
                name='horasEquipamento' 
                placeholder='Insira a quantidade de horas'
                value={visita.horasEquipamento || ''}
                handleOnChange={handleChange}             
            />

            {errors.idRevisao && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.idRevisao}</p>}
            <Select 
                name='tipoRevisao' 
                text='Selecione o tipo de revisão'
                options={tipoRevisao}
                handleOnChange={handleTipoRevisao}
                value={visita.idRevisao ? visita.idRevisao : ''}
            />

            <SubmitButton text={btnText}/>
        </form>
    );
};

export default RegistrarVisitasForm;
