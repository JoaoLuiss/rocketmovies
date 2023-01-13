import { Container } from "./styles";

export function MovieTag({ title, ...rest }) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}

