import { useState, useEffect } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';

const CadastarViagemForm = ({ handleSubmit, btnText, travelDto }) => {
    
    const [route, setRoute] = useState([]);
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
            idBus: e.target.value,
            // descBus: e.target.options[e.target.selectedIndex].text,
            // bus: {
            //     id: e.target.value,
            //     name: e.target.options[e.target.selectedIndex].text,
            // }
        });
    }

    const handleRoute = (e) => {
        setTravel({
            ...travel,
            idRoute: e.target.value,
            // descRoute:  e.target.options[e.target.selectedIndex].text,            
        });
    }

    return (
        <form onSubmit={submit}>  
            <Select 
                name='viagem_id' 
                text='Selecione a viagem'
                options={route} 
                handleOnChange={handleRoute}
                value={travel.idRoute ? travel.idRoute : ''}
            />
           
            <Input 
                type='text' 
                text='Data da partida' 
                name='startDate' 
                placeholder='Data da partida'
                value={travel.startDate || ''}
                handleOnChange={handleChange}
            />
                          
            <Input 
                type='datetime-local' 
                text='Data da chegada (estimativa)' 
                name='finishDate' 
                placeholder='Data da chegada'
                value={travel.finishDate || ''}
                handleOnChange={handleChange}
            />
                        
            <Select 
                name='vtr' 
                text='Selecione a vtr'
                options={bus} 
                handleOnChange={handleBus}
                value={travel.idBus ? travel.idBus : ''}
            />

            <SubmitButton text={btnText}/>
        </form>
    );
};

export default CadastarViagemForm;
