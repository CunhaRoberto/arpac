import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
            <p className={styles.copy_right}>
                <span>
                Transformando ideias em realidade - Roberto Cunha   
                </span> 
                 &copy; 2024 
            </p>
                <li>
                <a href="https://www.linkedin.com/in/roberto-aparecido-da-cunha/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                </li>
            </ul>
             
            
        </footer>
    );
};

export default Footer;
