import styles from './Msg.module.css';
import { useState, useEffect } from 'react';

const Msg = ({ type, msg }) => {
    const [visible, setVisible] = useState(true)

    useEffect(()=>{

        if(!msg){
            setVisible (false)
            return
        }
        
        setVisible(true)

        const timer = setTimeout(()=>{
            setVisible(false)
        }, 5000)
        return () => clearTimeout(timer)

    }, [msg])

    return (
       <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}> 
                    {msg} 
                </div>
            )}              
       </>     
    );    
};

export default Msg;
