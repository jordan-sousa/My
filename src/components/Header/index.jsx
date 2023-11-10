import React from "react";
import { RiLogoutCircleRLine } from "react-icons/ri"; // Ícone de logout
import { Container, Profiler, Search, Input, User, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profiler>
        <h1>My Movies</h1>
      </Profiler>

      <Search>
        <Input type="search" placeholder="Pesquisar pelo título" />
      </Search>

      <User>
        <div>
          <span>Jordan Sousa</span>

          <Logout>
            Sair
          </Logout>
        </div>
        
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeHmpWCpQbaL-C1gBB06sa5Oday23xE-rIA&usqp=CAU"
          alt="Foto do Usuário"
        />
        
      </User>
    </Container>
  );
}
