import React from 'react';
import Select from '../layout/form/Select';


const CadastrarViagemForm = () => {
    return (
        <form>
            <div>
                <Select name='origem_id' text='Selecione a origem'/>
            </div>            
        </form>
    );
};



export default CadastrarViagemForm;
