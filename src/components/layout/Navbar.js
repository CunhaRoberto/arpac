import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import logo from '../../img/arpac.png';
// import logo from '../../img/i5-semfundo.png';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
             
                <Link to="/">
                    <img src={logo} 
                        alt='MyReact' 
                        style={{ width: '100px', 
                        height: '60px' }} 
                    />                
                </Link>
                <ul className={styles.list}>
                    {/* <li className={styles.item}><Link to="/">Home</Link></li>                    
                    <li className={styles.item}><Link to="/viagens">Viagens</Link></li>                    
                    <li className={styles.item}><Link to="/reservar">Reservar</Link></li> */}
                    <li className={styles.item}><Link to="/cadastrar">Cadastrar Visitas</Link></li>                    
                    {/* <li className={styles.item}><Link to="/cadastrar">Cadastrar Linha</Link></li>
                    <li className={styles.item}><Link to="/cadastrar">Cadastrar Viatura</Link></li> */}
                </ul>              

            </Container>
        </nav>
        
    );
};

export default Navbar;