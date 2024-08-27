import React from 'react';
import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom';

const LinkButton = ({to, text, id}) => {

    const path = id ? `${to}/${id}` : to;
    
    return (
       <Link className={styles.btn} to={path}>
            {text}
       </Link>
    );
};

export default LinkButton;