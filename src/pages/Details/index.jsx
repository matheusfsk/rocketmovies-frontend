import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, DivHeader } from "./styles";
import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header/";
import { Tag } from "../../components/Tag/";

export function Details() {
  const [data, setData] = useState(null);
  const user = useAuth();

  const navigate = useNavigate();

  const params = useParams();

  const avatarUrl = user.user.avatar
    ? `${api.defaults.baseURL}/files/${user.user.avatar}`
    : avatarPlaceholder;

  function firstLetterUpperCase(tagName) {
    return tagName.charAt(0).toUpperCase() + tagName.slice(1);
  }

  async function handleRemove() {
    const confirm = window.confirm(
      "Deseja realmente excluir as anotações do filme? Isso não poderá ser desfeito"
    );
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header>
        <input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      {data && (
        <main>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <DivHeader>
              <Link to="/">
                <FiArrowLeft /> Voltar
              </Link>

              <div className="divTitle">
                <h1>{data.title}</h1>
                {[...Array(5)].map((_, index) => {
                  if (index + 1 <= data.rating)
                    return <AiFillStar key={index} />;
                  return <FiStar key={index} />;
                })}
              </div>

              <div className="divAuthor">
                <img src={avatarUrl} alt={user.user.name} />
                <span>Por {user.user.name}</span>
                <FiClock />
                <span>{data.created_at}</span>
              </div>

              {data.tags && (
                <div className="tags">
                  {data.tags.map((tag) => (
                    <Tag
                      key={String(tag.id)}
                      title={firstLetterUpperCase(tag.name)}
                    />
                  ))}
                </div>
              )}

              <p>{data.description}</p>
            </DivHeader>
            <Button
              className="buttonDeleteMovie"
              title="Excluir Filme"
              onClick={handleRemove}
            />
          </motion.div>
        </main>
      )}
    </Container>
  );
}
