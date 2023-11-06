import { Container } from "./styles"

export function Button ( { name, Loading, ...rest} ) {
  return(
    <Container 
        type="button" 
        disabled={Loading} 
        {...rest}
    >
     { Loading ? 'Carregando...' : name } 
    </Container>
  )
}