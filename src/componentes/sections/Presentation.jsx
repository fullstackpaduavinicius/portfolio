import React from 'react';
import styles from './Presentation.module.css';

function Presentation() {
    return (
        <div className={styles.presentation}>
            <h1>Desenvolvedor full stack junior</h1>
            <p>Trabalhos com os principais freame works da atualidade e sempre busco soluções para facilitar a vida das pessoas</p>
            <button>Saber mais</button>
        </div>
    );
}

export default Presentation;
