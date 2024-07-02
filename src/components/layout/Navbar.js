import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import logo from '../../img/logo192.png';

const Navbar = () => {
    return (
        <nav class={styles.navbar}>
            <Container>
             
                <Link to="/">
                    <img src={logo} 
                        alt='MyReact' 
                        style={{ width: '50px', 
                        height: '50px' }} 
                    />                
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}><Link to="/">Home</Link></li>                    
                    <li class={styles.item}><Link to="/contact">Contact</Link></li>
                    <li class={styles.item}><Link to="/company">Company</Link></li>
                    <li class={styles.item}><Link to="/newproject">New Project</Link></li>
                </ul>              

            </Container>
        </nav>
        
    );
};

export default Navbar;