import React from 'react';
import styles from './SobreMim.module.css';

function SobreMim() {
    return (
        <div className={styles.sobreMim} id="about">
            <h2>Sobre mim</h2>
            <p>Descrição sobre você.</p>
            <div className={styles.contact}>
                <p>Meu contato: 12 34567890</p>
                <p>Email: xxx@xyz.com</p>
                <div className={styles.social}>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    );
}

export default SobreMim;
