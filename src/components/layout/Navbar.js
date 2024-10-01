import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import logo from '../../img/arpac.png';


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
             
                <Link to="/">
                    <img src={logo} 
                        alt='MyReact' 
                        style={{ width: '150px', 
                        height: '60px' }} 
                    />                
                </Link>
                <ul className={styles.list}>                  
                    {/* <li className={styles.item}><Link to="/">Home</Link></li>   */}
                    <li className={styles.item}><Link to="/empresas">Empresas</Link></li>                 
                </ul>              

            </Container>
        </nav>
        
    );
};

export default Navbar;