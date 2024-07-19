import styles from './Msg.module.css';
import { useState, useEffect } from 'react';

const Msg = ({ type, msg }) => {
    const [visible, setVisible] = useState(true)

    useEffect(()=>{
        
    })
    return (
       
        <div className={`${styles.message} ${styles[type]}`}>
            {msg}
        </div>
        
       
       
    );    
};

export default Msg;
