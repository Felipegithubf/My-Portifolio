import React from 'react';
import ImgProject from '../../assets/1.png';
import "./styles.scss";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GitHubIcon from '@mui/icons-material/GitHub';

function CardProjeto() {
    return (
        <div className="card-projeto">
            <div className="img-container">
                <img src={ImgProject} alt="Projeto" />
            </div>
            <div className="title-card">
                <div className='title-content'>
                    <h3>PROJETO</h3>
                    <p>
                        Este é um novo projeto que oferece uma solução inovadora para otimizar processos do dia a dia, proporcionando uma experiência única aos usuários.
                    </p>
                </div>
                <div className="info-projeto">
                    <div className="projeto-detalhes">
                        <h4>Sobre o Projeto</h4>
                    </div>
                    <div className='projeto-detalhes'>
                        <p>Ano</p>
                        <p>2024</p>
                    </div>
                    <div className='projeto-detalhes'>
                        <p>React</p>
                        <p>Front-End</p>
                    </div>
                </div>
                <div className="projeto-git">
                    <a href="https://demo-link.com" target="_blank" rel="noopener noreferrer">
                        <p>Demonstração</p>
                    </a>
                    <a href="https://" target="_blank" rel="noopener noreferrer">
                        <AttachFileIcon />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardProjeto;