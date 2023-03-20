import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

import { motion } from "framer-motion";

import { FiArrowLeft } from "react-icons/fi";

import { Container, Form } from "./styles";

import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function limitBetweenZeroAndFive(value) {
    if (value < 0) return 0;
    if (value > 5) return 5;
    return value;
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleBackButton() {
    return navigate(-1);
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título do filme");
    }
    if (!rating) {
      return alert("Insira uma nota para seu filme");
    }
    if (newTag) {
      return alert("Confirme o gênero do filme no campo indicado, ou remova");
    }
    try {
      await api.post("/notes", {
        title,
        rating,
        description,
        tags,
      });
      alert("Nota criada com sucesso!");
      navigate(-1);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }

  return (
    <Container>
      <Header>
        <input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

      <main>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Form>
            <Link to="/">
              <FiArrowLeft /> Voltar
            </Link>
            <header>
              <h1>Novo Filme</h1>
            </header>

            <div className="containerTitle">
              <Input
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                type="number"
                value={rating}
                placeholder="Sua nota (de 0 a 5)"
                onChange={(e) =>
                  setRating(limitBetweenZeroAndFive(e.target.value))
                }
              />
            </div>

            <Textarea
              placeholder="Observações"
              onChange={(e) => setDescription(e.target.value)}
            />

            <Section title="Marcadores">
              <div className="tags">
                {tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                <NoteItem
                  isNew
                  placeholder="Novo marcador"
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </Section>
            <div className="buttons">
              <Button
                className="buttonDeleteMovie"
                variant="secondary"
                title="Cancelar"
                onClick={handleBackButton}
              />
              <Button title="Salvar alterações" onClick={handleNewNote} />
            </div>
          </Form>
        </motion.div>
      </main>
    </Container>
  );
}
