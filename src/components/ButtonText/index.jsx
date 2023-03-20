import { Container } from "./styles";

export function ButtonText({ title, icon, isActive = false, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {icon}
      {title}
    </Container>
  );
}
