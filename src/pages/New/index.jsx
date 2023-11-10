import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

import { Container, Form, TagsContainer } from "./styles";

export function New() {
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Voltar</h1>
                        <AiOutlineArrowLeft/>
                    </header>

                    <Input
                        placeholder="Título"
                        type="text"
                    />

                    <Input
                        placeholder="Sua nota (de 0 a 5)"
                        type="text"
                    />

                    <Textarea
                        placeholder="Observações"
                        type="text"
                    />

                    <Section title="Marcadores">
                        <TagsContainer  className='tags'>
                            <NoteItem name="Filmes" />
                            <NoteItem isNew placeholder="Novo marcador" />
                        </TagsContainer >
                    </Section>

                    <Button name="Salvar alterações" />
                    <Button name="Excluir filmes" />
                </Form>
            </main>
        </Container>
    )
}