import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FiPlus } from "react-icons/fi";
import { Container, NewNote, DivHeader } from "./styles";

import { api } from "../../services/api";

import { motion } from "framer-motion";

import { Header } from "../../components/Header";

import { Movie } from "../../components/Movie";

export function Home() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState([]);

  const [tags, setTags] = useState([]);

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
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

      <div>
        <motion.div
          className="motionHome"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <DivHeader>
            <header>
              <h1>Meus filmes</h1>
              <NewNote to="/new">
                <FiPlus />
                Adicionar filme
              </NewNote>
            </header>
          </DivHeader>

          <main>
            {notes.map((note) => (
              <Movie
                key={String(note.id)}
                note={note}
                onClick={() => handleDetails(note.id)}
              />
            ))}
          </main>
        </motion.div>
      </div>
    </Container>
  );
}
