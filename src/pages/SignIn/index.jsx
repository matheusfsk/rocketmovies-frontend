import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { RotatingLines } from "react-loader-spinner";

import { useAuth } from "../../hooks/auth";
import { Container, Form, Background } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, isLoading } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <motion.div
        className="transitionAnimate"
        initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Faça seu login</h2>

          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />

          {isLoading ? (
            <div className="loading">
              <RotatingLines
                strokeColor="#FF859B"
                strokeWidth="4"
                animationDuration="0.80"
                width="46"
                visible={true}
              />
            </div>
          ) : (
            <>
              <Button title="Entrar" onClick={handleSignIn} />
            </>
          )}

          <Link to="/register">Criar conta</Link>
        </Form>
      </motion.div>
      <Background />
    </Container>
  );
}
