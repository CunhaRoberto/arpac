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

// import { useState, useEffect } from 'react';
import { useState } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';

const CadastarViagemForm = ({ handleSubmit, btnText, travelDto }) => {
    
    const [equipamento] = useState([
                { id: 1, name: 'QUZHOU ZHONGDU - LF-30Z - LF-30Z 211005555' },
                { id: 2, name: 'Atlas Copco - GA18VSD+ - GA18VSD+ BQD112872' },
                { id: 3, name: 'Atlas Copco - GA22150AP - GA22150AP PAU107692' },               
            ]);
        
            const [motivo] = useState([
                { id: 1, name: '24' },
                { id: 2, name: '12' },
                { id: 3, name: '8' }
                
            ]);

            const [embarque] = useState([
                { id: 1, name: 'P Inspe' },
                { id: 2, name: 'Revisão 2K' },
                { id: 3, name: 'Revisão 4K' },
                { id: 4, name: 'Revisão 8K' }
                
                
            ]);
        


    const [travel, setTravel] = useState(travelDto || {});

        //    const [embarque, setEmbarque] = useState([]);
    // useEffect(() => {
    //     fetch("https://user-api-p9ru.onrender.com/v1/embarkation/", {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         setEmbarque(data);
    //     })
    //     .catch((err) => console.log(err));
    // }, []);

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
            idEequipamento: e.target.value,
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
            <Input 
                type='datetime-local' 
                text='Data da visita' 
                name='visitDate'               
                value={travel.visitDate || ''}
                handleOnChange={handleChange}
            />

            <Select 
                name='equipamento_id' 
                text='Selecione o equipamento'
                options={equipamento} 
                handleOnChange={handleRoute}
                value={travel.idEequipamento ? travel.idEequipamento : ''}
            />

            <Select 
                name='motivo' 
                text='Selecione a quantidade horas/dia'
                options={motivo}
                handleOnChange={handleMotivo}
                value={travel.idMotivo ? travel.idMotivo : ''}
                
                />
            <Input 
                type='number' 
                text='Quantidade de horas'
                name='resumoMotivo' 
                placeholder='Insira a quantidade de horas ataul'
                value={travel.resumoMotivo || ''}
                handleOnChange={handleChange}
                
                />
            <Select 
                    name='local_embarque_id' 
                    text='Selecione o tipo de revisão'
                    options={embarque}
                    handleOnChange={handleEmbarque}
                    value={travel.idEmbarque ? travel.idEmbarque : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    );
};

export default CadastarViagemForm;
