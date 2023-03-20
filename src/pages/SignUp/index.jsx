import { useState } from "react";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import { api } from "../../services/api";

import { Button } from "../../components/Button";
import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Container, Form, Background } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    setLoading(true);
    api
      .post("/users", { name, email, password })
      .then(() => {
        setLoading(false);
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          setLoading(false);
          alert(error.response.data.message);
        } else {
          setLoading(false);
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <motion.div
        className="transitionAnimate"
        initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>

          <h2>Crie sua conta</h2>

          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />

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

          {loading ? (
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
              <Button title="Cadastrar" onClick={handleSignUp} />
              <Link to="/">
                <FiArrowLeft />
                Voltar para o login
              </Link>
            </>
          )}
        </Form>
      </motion.div>
      <Background />
    </Container>
  );
}
