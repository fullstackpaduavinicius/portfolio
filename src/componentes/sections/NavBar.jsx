import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#technologies">Tecnologias</a></li>
                <li><a href="#about">Sobre mim</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
