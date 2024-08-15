import React from 'react';
import styles from './Project.module.css';

function Project() {
    const projects = [
        {
            id: 1,
            title: 'Consumo de api para previsao do tempo',
            description: 'Sistema completo para gerenciamento de estoque utilizando React e Node.js.',
            image: 'gestao-estoque.png'
        },
        {
            id: 2,
            title: 'Plataforma em P.Y para cadastro de pedidos',
            description: 'E-commerce desenvolvido com React, Redux e integração com APIs RESTful.',
            image: 'ecommerce.png'
        },
        {
            id: 3,
            title: 'Aplicativo mobile cardapio, delivery e controle de estoque',
            description: 'Aplicativo de entregas desenvolvido com React Native e Firebase.',
            image: 'entregas-app.png'
        },
        {
            id: 4,
            title: 'Dashboard de Análise de Dados',
            description: 'Dashboard interativo para visualização de dados com D3.js e Chart.js.',
            image: 'dashboard.png'
        },
        {
            id: 5,
            title: 'Sistema de Reservas Online',
            description: 'Sistema de reservas online com integração de banco de dados MySQL e Express.js.',
            image: 'reservas-online.png'
        },
        {
            id: 6,
            title: 'Blog Pessoal',
            description: 'Blog pessoal desenvolvido com Gatsby.js e GraphQL.',
            image: 'blog.png'
        }
    ];

    return (
        <div className={styles.projects} id="projects">
            <h2>Projetos</h2>
            <div className={styles.projectList}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.project}>
                        <img src={project.image} alt={`Projeto ${project.title}`} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button>Saber mais</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
