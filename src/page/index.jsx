import "./style.scss";
import PhotoBanner from "../assets/profile.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardProjeto from "../components/CardProjeto";
import { TypeAnimation } from "react-type-animation";


function Home() {

    const handleScroll = (event, id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home">
            <header>
                <h2>Felipe Carvalho</h2>
                <nav>
                    <a href="#meus-projetos" onClick={(e) => handleScroll(e, 'meus-projetos')}>Meus Projetos</a>
                    <a href="#sobre-mim" onClick={(e) => handleScroll(e, 'sobre-mim')}>Sobre mim</a>
                    <a href="#contato" onClick={(e) => handleScroll(e, 'contato')}>Contato</a>
                </nav>
            </header>

            <main>
                <div className="section-hero">
                    <div className="BANNER">
                        <h1 className="primeiro-texto">
                            <TypeAnimation
                                sequence={[
                                    ' OLÁ, ',
                                    1000,
                                    'SOU FELIPE CARVALHO ',
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '63px', display: '' }}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="paragrafo">
                            Meu nome é Felipe e sou um entusiasta da programação. Estou animado para compartilhar
                            minha jornada como programador iniciante.
                            Sou apaixonado por tecnologia e estou sempre em busca de novos desafios.
                        </p>

                        <div className="contact-me">
                        
                            <a href="https://github.com/Felipegithubf" target="_blank" rel=""><GitHubIcon /></a>
                            <a href="https://wa.me/21993222068" target="_blank" rel=""><WhatsAppIcon /></a>
                        </div>
                        
                    </div>
                    <img src={PhotoBanner} alt="Banner" />
                   
                </div>

                <section id="meus-projetos" className="projetos">
                    <div className="title-projeto">
                        <h2>Meus Projetos</h2>
                    </div>
                    <div className="all-projetos">
                        <CardProjeto />
                        <CardProjeto  />
                        <CardProjeto  />
                        <CardProjeto  />
                    </div>
                </section>

                

                <section id="sobre-mim" className="sobre-mim">
                    <h2>Sobre mim</h2>
                    <div className="descricao">
                        <h1>Olá, meu nome é Felipe e sou um desenvolvedor front-end iniciante.</h1>
                        <h3>Minha paixão por tecnologia e design me levou a explorar o mundo do desenvolvimento web, e desde então, fiquei completamente viciado em codar!</h3>
                        <h4>Atualmente, estou me aprofundando nas seguintes tecnologias e conceitos:</h4>
                    </div>
                </section>

                <section id="contato" className="contato">
                    <h1>Contato</h1>
                    <form action="mailto:seu-email@dominio.com" method="post" enctype="text/plain">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="mensagem">Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Home;