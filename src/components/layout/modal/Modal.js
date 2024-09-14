import React from 'react';
import styles from './Modal.module.css'; // Verifique o caminho correto

const Modal = ({ show, onClose, onConfirm, title, message }) => {
    if (!show) return null;

    return (
        <div className={styles.modal_overlay}>
            <div className={styles.modal}>
                <h2>{title}</h2>
                <p>{message}</p>
                <div className={styles.modal_buttons}>
                    <button onClick={onClose}>NÃO</button>
                    <button onClick={onConfirm}>SIM</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
