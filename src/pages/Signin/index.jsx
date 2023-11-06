import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Background, Container, Form } from "./styles";

export function Signin() {
    return(
        <Container>
            <Form>
                <h1>My Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                />

                <Input
                    placeholder="Senha"
                    type="password"
                />

                <Button name="Entrar" />

                <a href="#">Criar conta</a>
            </Form>

            <Background/>
        </Container>
    )
}