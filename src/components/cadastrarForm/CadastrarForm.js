import { useState, useEffect } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';

const CadastarViagemForm = ({ handleSubmit, btnText, travelDto }) => {
    
    const [route, setRoute] = useState([]);
    const [bus, setBus] = useState([]);
    const [travel, setTravel] = useState(travelDto || {});    
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetch("https://user-api-p9ru.onrender.com/v1/routes/", {    
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setRoute(data);
        })
        .catch((err) => console.log(err));

        fetch("https://user-api-p9ru.onrender.com/v1/bus/", {    
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {                      
            if (Array.isArray(data)) {                
                const updatedData = data.map(item => {
                    if (item.prefixo) {
                        return { ...item, name: item.prefixo };
                    } else {
                        console.error("prefixo não encontrado em item:", item);
                        return item; 
                    }
                });               
                setBus(updatedData); 
            } else {
                console.error("A resposta não é um array:", data);
            }
        })
        .catch((err) => console.error("Fetch error:", err)); 
    }, []);

    const validate = () => {
        const newErrors = {};
    
        if (!travel.idRoute) newErrors.idRoute = 'Selecione uma viagem.';
        if (!travel.startDate) newErrors.startDate = 'Informe a data da partida.'
        if (!travel.finishDate) newErrors.finishDate = 'Informe a data da chegada.'

        if (new Date(travel.startDate) > new Date(travel.finishDate)) {
            newErrors.startDate = 'A data de partida não pode ser maior que a data de chegada.';
            newErrors.finishDate = 'A data de chegada não pode ser menor que a data de partida.';
        }
    
        if (!travel.idBus) newErrors.idBus = 'Selecione uma vtr.';
    
        return newErrors;
    };

    const submit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log(travel);
            setErrors({});
            handleSubmit(travel);
        }
    };

    const handleChange = (e) => {
        setTravel({...travel, [e.target.name]: e.target.value});
    };

    const handleBus = (e) => {
        setTravel({
            ...travel,
            idBus: e.target.value,
        });
    };

    const handleRoute = (e) => {
        setTravel({
            ...travel,
            idRoute: e.target.value,
        });
    };

    return (
        <form onSubmit={submit}>  
            {errors.idRoute && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.idRoute}</p>}
            <Select 
                name='viagem_id' 
                text='Selecione a viagem' 
                options={!route ? [{ id: '', name: 'Carregando...' }] : route}                 
                handleOnChange={handleRoute}
                value={travel.idRoute ? travel.idRoute : ''}
            />
            
            {errors.startDate && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.startDate}</p>}
            <Input 
                type='datetime-local' 
                text='Data da partida' 
                name='startDate' 
                placeholder='Data da partida'
                value={travel.startDate || ''}
                handleOnChange={handleChange}
            />
            
            {errors.finishDate && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.finishDate}</p>}
            <Input 
                type='datetime-local' 
                text='Data da chegada (estimativa)' 
                name='finishDate' 
                placeholder='Data da chegada'
                value={travel.finishDate || ''}
                handleOnChange={handleChange}
            />
            
            {errors.idBus && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.idBus}</p>}
            <Select 
                name='vtr' 
                text='Selecione a vtr'
                options={!bus ? [{ id: '', name: 'Carregando...' }] : bus}  
                handleOnChange={handleBus}
                value={travel.idBus ? travel.idBus : ''}
            />
    
            <SubmitButton text={btnText}/>
        </form>
    );
    
};

export default CadastarViagemForm;
