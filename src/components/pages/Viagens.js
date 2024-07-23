import Msg from "../layout/Msg.js";
import { useLocation } from "react-router-dom";

const Contato = () => {
    const location = useLocation();
    const msg = location.state ? location.state.message : '';  
   
    return (
        
        <div>            
            <h1>Próximas viagens</h1>
            {msg && <Msg type='success' msg={msg} />}
        </div>
    );
};

export default Contato;
