import { Container } from "./styles"

export function Input ( { icon: Icon, ...rest} ) {
  const data = Input[0]
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <input type="text" {...data} {...rest} />
    </Container>
  )
}