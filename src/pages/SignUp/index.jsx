import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Background, Container, Form } from "./styles";

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>My Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                />

<               Input
                    placeholder="E-mail"
                    type="text"
                />

                <Input
                    placeholder="Senha"
                    type="password"
                />

                <Button name="Cadastrar" />

                <a href="#">Voltar para o login</a>
            </Form>

            <Background/>
        </Container>
    )
}