import React from "react";

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githubLogo from "../../assets/imagens/github-logo.svg";

export default function MainPage() {
  return (
    <Container>
      <Logo src={githubLogo} alt="API Github"/>
      <Title>API Github</Title>
      <Form>
        <Input placeholder="usuário" />
        <Button>

        </Button>
      </Form>

    </Container>
  );
}
