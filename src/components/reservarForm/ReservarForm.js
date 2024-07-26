// import { useState, useEffect } from 'react';
// import Select from '../layout/form/Select';
// import Input from '../layout/form/Input';
// import SubmitButton from '../layout/form/SubmitButton';

// const ReservarForm = ({ btnText }) => {
    //     const [poltrona, setPoltrona] = useState([
        //         { id: 1, name: '01 - Janela' },
        //         { id: 2, name: '02 - Corredor' },
        //         { id: 3, name: '03 - Janela' },
        //         { id: 4, name: '04 - Corredor' },
        //         { id: 5, name: '05 - Janela' }
        //     ]);
        
        //     const [embarque, setEmbarque] = useState([]);
//     useEffect(() => {
//         fetch("https://user-api-p9ru.onrender.com/v1/embarkation/", {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then((resp) => resp.json())
//         .then((data) => {
//             setEmbarque(data);
//         })
//         .catch((err) => console.log(err));
//     }, []);

//     const handlePoltrona = (e) => {
//         setPoltrona({
//             ...poltrona,
//             id: e.target.value                       
//         });
//     }

//     return (
//         <form>
//             <Select 
//                 name='poltrona' 
//                 text='Selecione a poltrona'
//                 options={poltrona} 
//                 handleOnChange={handlePoltrona}
//                 value={poltrona.id ? poltrona.id : ''}
//             />
//             <Select 
//                 name='local_embarque_id' 
//                 text='Selecione o local de embarque'
//                 options={embarque}
//             />
//             <Select 
//                 name='motivo' 
//                 text='Selecione o motivo'
//                 options={embarque}
//             />
//             <Input 
//                 type='text' 
//                 text='Obs: Somente para a opção "Outros motivos".'
//                 name='motivoResumo' 
//                 placeholder='Descreva o motivo da viagem'
//             />
//             <SubmitButton text={btnText} />
//         </form>
//     );
// };

// export default ReservarForm;

import { useState, useEffect } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';

const CadastarViagemForm = ({ handleSubmit, btnText, travelDto }) => {
    
    const [poltrona] = useState([
                { id: 1, name: '01 - Janela' },
                { id: 2, name: '02 - Corredor' },
                { id: 3, name: '03 - Janela' },
                { id: 4, name: '04 - Corredor' },
                { id: 5, name: '05 - Janela' }
            ]);
        
            const [motivo] = useState([
                { id: 1, name: 'CFO/ CHAQPM/ CAO ' },
                { id: 2, name: 'CFS/ CAS' },
                { id: 3, name: 'CFSd' },
                { id: 4, name: 'CEP / EEP' },
                { id: 5, name: 'Outros Motivos' }
            ]);
        


    const [travel, setTravel] = useState(travelDto || {});

           const [embarque, setEmbarque] = useState([]);
    useEffect(() => {
        fetch("https://user-api-p9ru.onrender.com/v1/embarkation/", {
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
    }, []);

    const submit = (e) => {
        e.preventDefault();
        console.log(travel);
        // handleSubmit(travel);
    }

    const handleChange = (e) => {
        setTravel({...travel, [e.target.name]: e.target.value});
        
    }

   
    const handleRoute = (e) => {
        setTravel({
            ...travel,
            idPoltrona: e.target.value,
            // descRoute:  e.target.options[e.target.selectedIndex].text,            
        });
    }

    const handleMotivo = (e) => {
        setTravel({
            ...travel,
            idMotivo: e.target.value                       
        });
    }

    const handleEmbarque = (e) => {
        setTravel({
            ...travel,
            idEmbarque: e.target.value                       
        });
    }

    return (
        <form onSubmit={submit}>  
            <Select 
                name='viagem_id' 
                text='Selecione a poltrona'
                options={poltrona} 
                handleOnChange={handleRoute}
                value={travel.idPoltrona ? travel.idPoltrona : ''}
            />
          <Select 
                name='local_embarque_id' 
                text='Selecione o local de embarque'
                options={embarque}
                handleOnChange={handleEmbarque}
                value={travel.idEmbarque ? travel.idEmbarque : ''}
            />
            <Select 
                name='motivo' 
                text='Selecione o motivo'
                options={motivo}
                handleOnChange={handleMotivo}
                value={travel.idMotivo ? travel.idMotivo : ''}
                
            />
            <Input 
                type='text' 
                text='* Somente para "Outros motivos"'
                name='resumoMotivo' 
                placeholder='Descreva o motivo da viagem'
                value={travel.resumoMotivo || ''}
                handleOnChange={handleChange}

            />
            <SubmitButton text={btnText}/>
        </form>
    );
};

export default CadastarViagemForm;
