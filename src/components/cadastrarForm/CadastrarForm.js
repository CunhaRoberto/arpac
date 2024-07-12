import { useState, useEffect } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';

const CadastarViagemForm = ({ handleSubmit, btnText, travelDto }) => {
    
    const [rota, setRota] = useState([]);
    const [bus, setBus] = useState([]);
    const [travel, setTravel] = useState(travelDto || {});

    useEffect(() => {
        fetch("https://user-api-p9ru.onrender.com/v1/routes/", {    
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setRota(data);
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

    const submit = (e) => {
        e.preventDefault();
        console.log(travel);
        handleSubmit(travel);
    }

    const handleChange = (e) => {
        setTravel({...travel, [e.target.name]: e.target.value});
        
    }

    const handleBus = (e) => {
        setTravel({
            ...travel,
            bus: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        });
    }

    const handleRota = (e) => {
        setTravel({
            ...travel,
            rota: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            }
        });
    }

    return (
        <form onSubmit={submit}>  
            <Select 
                name='viagem_id' 
                text='Selecione a viagem'
                options={rota} 
                handleOnChange={handleRota}
                value={travel.rota ? travel.rota.id : ''}
            />
           
            <Input 
                type='datetime-local' 
                text='Data da partida' 
                name='dataPartida' 
                placeholder='Data da partida'
                value={travel.dataPartida || ''}
                handleOnChange={handleChange}
            />
                          
            <Input 
                type='datetime-local' 
                text='Data da chegada (estimativa)' 
                name='dataChegada' 
                placeholder='Data da chegada'
                value={travel.dataChegada || ''}
                handleOnChange={handleChange}
            />
                        
            <Select 
                name='vtr' 
                text='Selecione a vtr'
                options={bus} 
                handleOnChange={handleBus}
                value={travel.bus ? travel.bus.id : ''}
            />

            <SubmitButton text={btnText}/>
        </form>
    );
};

export default CadastarViagemForm;
