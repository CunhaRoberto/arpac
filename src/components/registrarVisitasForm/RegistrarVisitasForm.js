import { useEffect, useState } from 'react';
import Select from '../layout/form/Select';
import Input from '../layout/form/Input';
import SubmitButton from '../layout/form/SubmitButton';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from '../layout/modal/Modal';

const RegistrarVisitasForm = ({ handleSubmit, btnText, visitaDto }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [equipamento, setEquipamento] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [visita, setVisita] = useState(() => ({
        ...visitaDto,
        idEmpresa: id 
    }));
    const [errors, setErrors] = useState({});

    const [tipoRevisao] = useState([
        { idRevisao: 1, name: 'P Inspe' },
        { idRevisao: 2, name: 'Revisão 2K' },
        { idRevisao: 3, name: 'Revisão 4K' },
        { idRevisao: 4, name: 'Revisão 8K' }
    ]);
    
    const idEmpresa = id;

    useEffect(() => {
        if (idEmpresa) {
            fetch(`https://arpac-api.onrender.com/v1/equipamentos/idEmpresa?idEmpresa=${idEmpresa}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.length === 0) {
                    setEquipamento([{ idEquipamento: '', name: 'Não há registros' }]);
                    setShowModal(true); // Exibir a modal se não houver registros
                } else {
                    setEquipamento(data);
                }
            })
            .catch((err) => console.log(err));
        }
    }, [idEmpresa]);

    const handleRedirectToCadastro = () => {
        setShowModal(false);
        navigate(`/cadastrarequipamentos/${idEmpresa}`) // Redireciona para a página de cadastro de equipamento
    };

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

    const handleEquipamento = (e) => {
        setVisita({
            ...visita,
            idEquipamento: e.target.value,
        });
    };

    const handleTipoRevisao = (e) => {
        setVisita({
            ...visita,
            idRevisao: e.target.value                       
        });
    };
    
    const validate = () => {
        const newErrors = {};          
        if (!visita.dataVisita) newErrors.dataVisita = 'Informe a data da visita.';  
        if (!visita.horasEquipamento) newErrors.horasEquipamento = 'Informe as horas do equipamento.';   
        if (!visita.idEquipamento || visita.idEquipamento === '' || visita.idEquipamento === 'Selecione....') {
            newErrors.idEquipamento = 'Selecione um equipamento.';
        } 
        if (visita.idEquipamento === 'Não há registros') {
            newErrors.idEquipamento = 'Cadastre um equipamento para registrar a visita.';
        }
        if (!visita.idRevisao || visita.idRevisao === '' || visita.idRevisao === 'Selecione....') {
            newErrors.idRevisao = 'Selecione o tipo de revisão.';
        }
        return newErrors;
    };

    const handleCloseModal = () => {
        setShowModal(false); // Fechar a modal e exibir o formulário novamente
    };

    return (
        <>
            {showModal && (
                <Modal
                    show={true}
                    onClose={handleCloseModal}
                    onConfirm={handleRedirectToCadastro}
                    title={`Não há registros de equipamentos`}
                    message={` Deseja cadastrar um equipamento agora?`}
                />
            )}

            {!showModal && (
                <form onSubmit={submit}>
                    {errors.dataVisita && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.dataVisita}</p>}  
                    <Input 
                        type='datetime-local' 
                        text='Data da visita' 
                        name='dataVisita'               
                        value={visita.dataVisita || ''}
                        handleOnChange={handleChange}
                    />

                    {errors.idEquipamento && <p style={{ color: 'red', fontSize: '16px', marginBottom: '0.25rem' }}>{errors.idEquipamento}</p>}
                    <Select 
                        name='idEquipamento' 
                        text='Selecione o equipamento'
                        options={equipamento} 
                        handleOnChange={handleEquipamento}
                        value={visita.idEquipamento ? visita.idEquipamento : ''}
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

                    <SubmitButton text={btnText}/>
                </form>
            )}
        </>
    );
};

export default RegistrarVisitasForm;
