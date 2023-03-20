import { useState } from "react";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { motion } from "framer-motion";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  function handleBack() {
    navigate("/");
  }
  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Container>
        <header>
          <ButtonText
            onClick={handleBack}
            icon={<FiArrowLeft />}
            title="Voltar"
          />
        </header>

        <Form>
          <Avatar>
            <img src={avatar} alt="Foto do usuário" />
            <label htmlFor="avatar">
              <FiCamera />
              <input id="avatar" type="file" onChange={handleChangeAvatar} />
            </label>
          </Avatar>
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="E-mail"
            type="text"
            icon={FiMail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
            onChange={(e) => setPasswordOld(e.target.value)}
          />

          <Input
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
            onChange={(e) => setPasswordNew(e.target.value)}
          />

          <Button title="Salvar" onClick={handleUpdate} />
        </Form>
      </Container>
    </motion.div>
  );
}
