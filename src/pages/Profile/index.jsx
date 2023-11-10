import { AiOutlineArrowLeft, AiFillCamera, AiOutlineUser, AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
    return(
        <Container>
            <header>
                <a href="#"> 
                    <AiOutlineArrowLeft/>
                    Voltar
                </a>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeHmpWCpQbaL-C1gBB06sa5Oday23xE-rIA&usqp=CAU" 
                        alt="Foto do usuário"                        
                    />

                    <label htmlFor='avatar'>
                        <AiFillCamera/>
                        <input type="file" id='avatar' />
                    </label>
                </Avatar>

                <Input
                    placeholder="Nome"
                    // icon={AiOutlineUser}
                    type="text"
                />

                <Input
                    placeholder="Email"
                    type="text"
                    // icon={AiOutlineMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    // icon={RiLockPasswordFill}
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    // icon={RiLockPasswordFill}
                />

                <Button name="Salvar "/>
            </Form>
        </Container>
    )
}