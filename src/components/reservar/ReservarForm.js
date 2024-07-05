import React from 'react';
import Select from '../layout/form/Select';


const ReservarForm = () => {
    return (
        <form>
            <div>
                <Select name='viagem_id' text='Selecione a viagem'/>
            </div>
            <div >
                <Select name='local_embarque_id' text='Selecione o local de embarque'/>
           
                <Select name='local_embarque_id' text='Selecione o local de embarque'/>
            </div>
        </form>
    );
};



export default ReservarForm;
