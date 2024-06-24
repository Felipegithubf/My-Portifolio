import "./style.scss"
import PhotoBanner  from "../assets/profile.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardProjeto from "../components/CardProjeto";
import { TypeAnimation } from "react-type-animation";


function Home () {
    return (
        <div className="home">
            <header>
            <h2>Felipe Carvalho</h2>

            <nav>
                <a href="#">Meus Projetos</a>
                <a href="#">Sobre mim</a>
                <a href="#">Contato</a>
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
                    </div>


                 
                   <div className="all-projetos">
                    <CardProjeto/>
                    <CardProjeto/>
                    <CardProjeto/>
                    <CardProjeto/>
                    
                   </div>
                   </section>

                   
                

                <section className="sobre-mim">
                  <h2>
                    Sobre mim 
                  </h2>
                  <div className="descricao">
                    <h3>Olá, meu nome é Felipe e sou um desenvolvedor front-end iniciante. Minha paixão por tecnologia e design me levou a explorar o mundo do desenvolvimento web, e desde então, fiquei completamente viciado em codar!

                    </h3>
                    <h4>
                    Atualmente, estou me aprofundando nas seguintes tecnologias e conceitos:

                    </h4>
                      <p>Recentemente, comecei a aprender React e estou fascinado pelo poder e pela flexibilidade deste framework. Já criei alguns componentes simples e estou começando a entender como trabalhar com estados, props e o ciclo de vida dos componentes. Estou ansioso para explorar mais sobre hooks e a construção de aplicações mais complexas.</p>
                  </div>
                </section>


            </main>
            
        </div>
    )
}

export default Home;