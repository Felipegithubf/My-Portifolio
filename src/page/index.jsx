import "./style.scss"
import PhotoBanner  from "../assets/profile.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardProjeto from "../components/CardProjeto";

function Home () {
    return (
        <div className="home">
            <header>
            <h2>Felipe Carvalho</h2>

            <nav>
                <a href="#">Projeto</a>
                <a href="#">Sobre mim</a>
                <a href="#">Contato</a>
            </nav>
            </header>

            <main>
                <div className="section-hero">
                    <div className="BANNER">
                        <h1 className="primeiro-texto">
                            Oi, eu sou 
                            <br/>
                            Felipe Carvalho
                        </h1>
                        <p className="paragrafo">
                        Meu nome é Felipe e sou um entusiasta da programação. Estou animado para compartilhar<br/> minha jornada como programador iniciante.<br/> Sou apaixonado por tecnologia e estou sempre em busca de novos desafios.
                        </p>

                        <div className="contact-me">
                            <button>Entre em Contato</button>
                        <a href="#"><GitHubIcon />
                        </a>  

                        <a href="#"><WhatsAppIcon /></a>

                        </div>

                    </div>

                    <img src={PhotoBanner} />
                </div>

                <section className="projetos">
                   <div className="title-projeto">
                    <h2>Meus Projetos</h2>
                    <p>Em breve, disponibilizarei meus projetos aqui para que vocês possam dar uma olhada. Fiquem à vontade para me chamar na DM se tiverem interesse Gostei bastante de criar esses projetos com calma e dedicação.</p>
                   </div>

                   <div className="all-projetos">
                    <CardProjeto/>
                    <CardProjeto/>
                   </div>


                   
                </section>
            </main>
            
        </div>
    )
}

export default Home;