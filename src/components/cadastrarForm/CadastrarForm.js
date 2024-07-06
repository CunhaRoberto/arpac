import React from 'react';
import Select from '../layout/form/Select';
import SubmitButton from '../layout/form/SubmitButton';


const CadastrarViagemForm = ({btnText}) => {
    return (
        <form>
            <Select name='origem_id' text='Selecione a origem'/>
            <SubmitButton text={btnText}/>
                       
        </form>
    );
};



export default CadastrarViagemForm;
