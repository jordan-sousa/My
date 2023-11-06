import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profiler, Logout, Input } from "./styles";

export function Header () {
  return(
    <Container> 
        <Profiler>
          <h1>My Movies</h1>

          <Input type="search" placeholder="Pesquisar pelo título" />
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeHmpWCpQbaL-C1gBB06sa5Oday23xE-rIA&usqp=CAU" 
            alt="Foto do Usuário" 
          />

          <div>
            <span>Jordan Sousa</span>
          </div>
          <Logout>
            <a href='#'>Sair</a>
          </Logout>
        </Profiler>

    </Container>
  )
}