import { AiOutlineArrowLeft, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import { Container, Content } from "./styles";

export function Datails() {
    return(
        <Container>
            <main>
                <Header/>
        
            
                    <Content>
                        <a href="#">
                            <AiOutlineArrowLeft/>
                            Voltar
                        </a>
                    
                
                
                        <Section title="">
                            <h2>
                                Interestellar
                                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar />
                            </h2>
                            <div>
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeHmpWCpQbaL-C1gBB06sa5Oday23xE-rIA&usqp=CAU" 
                                    alt="Foto do Usuario" 
                                />
                                <span>Por Jordan Sousa </span> 
                                <BiTimeFive/>
                                <span>23/05/22 às 08:00</span>
                            </div>

                            <Tag title="Ficção cientifica" />
                            <Tag title="Drama" />
                            <Tag title="Família" />
                
                            <p>
                                Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, <br />
                                tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se <br />
                                comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de <br />
                                radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. <br />
                            </p>
                        </Section>
                    </Content>
            </main>
        </Container>
    )
}