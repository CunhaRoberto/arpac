import { useState, useEffect } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';

const CadastarViagemForm = ({ btnText }) => {
    
    const [rota, setRota] = useState([]);
    const [bus, setBus] = useState([]);

    useEffect(() => {
        
        // fetch("http://localhost:7000/embarque", {
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

    return (
        <form>
            <Select 
                name='viagem_id' 
                text='Selecione a viagem'
                options={rota} 
            />
           
            <Input 
                type='datetime-local' 
                text='Data da partida' 
                name='dataPartida' 
                placeholder='Data da partida'
            />
                          
            
            <Input 
                type='datetime-local' 
                text='Data da chegada (estimativa)' 
                name='dataChegada' 
                placeholder='Data da chegada'
            />
                        
            
            <Select 
                name='vtr' 
                text='Selecione a vtr'
                options={bus} 
            />

            <SubmitButton text={btnText}/>
        </form>
    );
};

export default CadastarViagemForm;
