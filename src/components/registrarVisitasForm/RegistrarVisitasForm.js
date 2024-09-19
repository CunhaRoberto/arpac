import { useState } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styles from '../layout/form/SubmitButton.module.css';


const RegistrarVisitasForm = ({ handleSubmit, btnText, visitaDto }) => {
    const { id } = useParams();  
    const {idEmpresa } = useParams();    
    const location = useLocation();
    const navigate = useNavigate();
    
    const queryParams = new URLSearchParams(location.search);
    const empresaName = queryParams.get('empresa'); // Obtém o nome da empresa da query string
    const equipamentoName = queryParams.get('name');
    
    console.log(empresaName, equipamentoName )

    const [visita, setVisita] = useState(() => ({
        ...visitaDto,
        idEmpresa:idEmpresa.trim(),
        idEquipamento: id 
    }));
    const [errors, setErrors] = useState({});

    const [tipoRevisao] = useState([
        { idRevisao: 1, name: 'P Inspe' },
        { idRevisao: 2, name: 'Revisão 2K' },
        { idRevisao: 3, name: 'Revisão 4K' },
        { idRevisao: 4, name: 'Revisão 8K' },
        { idRevisao: 5, name: 'Corretiva' }
    ]);

      
    const submit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            handleSubmit(visita);
        }
    };

    const handleChange = (e) => {
        setVisita({...visita, [e.target.name]: e.target.value});
    };


    const handleTipoRevisao = (e) => {
        setVisita({
            ...visita,
            idRevisao: e.target.value                       
        });
    };
    
    const handleCancel = () => {
        navigate(-1); // Navega para a página anterior
    };

    const validate = () => {
        const newErrors = {};          
        if (!visita.dataVisita) newErrors.dataVisita = 'Informe a data da visita.';  
        if (!visita.horasEquipamento) newErrors.horasEquipamento = 'Informe as horas do equipamento.';   
       
       
        if (!visita.idRevisao || visita.idRevisao === '' || visita.idRevisao === 'Selecione....') {
            newErrors.idRevisao = 'Selecione o tipo de revisão.';
        }
        return newErrors;
    };



    return (

        <form onSubmit={submit}>
            <div>
                <h2>Empresa: {empresaName.trim()} </h2>                    
            </div>

            <div>
                <h2>Equipamento: {equipamentoName.trim()}</h2>                    
            </div>


            {errors.dataVisita && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.dataVisita}</p>}  
            <Input 
                type='datetime-local' 
                text='Data da visita' 
                name='dataVisita'               
                value={visita.dataVisita || ''}
                handleOnChange={handleChange}
            />

          
            {errors.horasEquipamento && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.horasEquipamento}</p>}
            <Input 
                type='number' 
                text='Quantidade de horas'
                name='horasEquipamento' 
                placeholder='Insira a quantidade de horas'
                value={visita.horasEquipamento || ''}
                handleOnChange={handleChange}             
            />

            {errors.idRevisao && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.idRevisao}</p>}
            <Select 
                name='idRevisao' 
                text='Selecione o tipo de revisão'
                options={tipoRevisao}
                handleOnChange={handleTipoRevisao}
                value={visita.idRevisao ? visita.idRevisao : ''}
            />

            <div className={styles.button_group}>
                <SubmitButton text={btnText} />
                <button type='button' onClick={handleCancel} className={styles.btn}>
                    Cancelar
                </button>
            </div>
        </form>
       
    );
};

export default RegistrarVisitasForm;
