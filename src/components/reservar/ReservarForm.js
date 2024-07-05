import React from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';


const ReservarForm = () => {
    return (
        <form>
            
                <Select name='viagem_id' text='Selecione a viagem'/>            
                <Select name='local_embarque_id' text='Selecione o local de embarque'/>           
                <Select name='local_embarque_id' text='Selecione o local de embarque'/>
                <Input type='text' text='Motivo da viagem' name='motivo' placeholder='Descreva o motivo da viagem'/>
           
        </form>
    );
};



export default ReservarForm;
