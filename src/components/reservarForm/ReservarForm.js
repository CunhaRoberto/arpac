import { useState, useEffect } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';

const ReservarForm = ({ btnText }) => {
    const [embarque, setEmbarque] = useState([]);
    const [rota, setRota] = useState([]);

    useEffect(() => {
        fetch("http://localhost:7000/embarque", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setEmbarque(data);
        })
        .catch((err) => console.log(err));

        fetch("https://user-api-p9ru.onrender.com/v1/embarkation/", {
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
    }, []);

    return (
        <form>
            <Select 
                name='viagem_id' 
                text='Selecione a viagem'
                options={rota} 
            />
            <Select 
                name='local_embarque_id' 
                text='Selecione o local de embarque'
                options={embarque}
            />
            <Input 
                type='text' 
                text='Motivo da viagem' 
                name='motivo' 
                placeholder='Descreva o motivo da viagem'
            />
            <SubmitButton text={btnText}/>
        </form>
    );
};

export default ReservarForm;
