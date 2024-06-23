import ImgProject from '../../assets/1.png'
import "./styles.scss";

function CardProjeto() {
    return(
        <div className="card-projeto">
         <div className="img-container">
            <img src={ImgProject} />
         </div>
         <div className="title-card">
            <div className='title-content'>
            <h3>DG-BARBEARIA</h3>
                    <p>
                    Criei este site para oferecer a você uma experiência completa e prática, trazendo todas as informações que você precisa sobre. 
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
                        <a href='#'>
                    
                          Demonstração <img src=''/>


                        </a>

                            
                        
                      </div>
                      </div>

                     
        </div>
        
    )
}

export default CardProjeto;