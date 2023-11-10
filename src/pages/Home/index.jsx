import { AiOutlinePlus } from 'react-icons/ai'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai'

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import { Container, Brand, NewNote, Content } from "./styles";

export function Home() {
    return(
        <Container>
            <Header/>

            <main>
                <Content>
                    <Brand> 
                        <h1>Meus filmes</h1>
                        
                        <NewNote>
                            {/* <AiOutlinePlus/> */}
                            <Button name="Adcionar filme" />
                        </NewNote>
                    </Brand>
                    
                    <Section title="Interestellar">
                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/>
                        <p>
                            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, <br />
                            tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se <br />
                            comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de <br />
                            radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. <br />
                        </p>

                        <Tag title="Ficção cientifica" />
                        <Tag title="Drama" />
                        <Tag title="Família" />
            
                    </Section>

                    <Section title="Interestellar">
                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/>
                        <p>
                            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, <br />
                            tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se <br />
                            comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de <br />
                            radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. <br />
                        </p>

                        <Tag title="Ficção cientifica" />
                        <Tag title="Drama" />
                        <Tag title="Família" />
            
                    </Section>

                    <Section title="Interestellar">
                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/>
                        <p>
                            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, <br />
                            tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se <br />
                            comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de <br />
                            radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. <br />
                        </p>

                        <Tag title="Ficção cientifica" />
                        <Tag title="Drama" />
                        <Tag title="Família" />
            
                    </Section>
                </Content>
            </main>
        </Container>
    )
}