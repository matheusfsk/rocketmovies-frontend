import { Container, Profile, Rocket } from "./styles";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

export function Header({ children }) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const [search, setSearch] = useState([]);

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    const confirm = window.confirm("Tem certeza que deseja sair?");
    if (confirm) {
      navigate("/");
      signOut();
    }
  }

  /* useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]); */

  return (
    <Container>
      <Rocket>
        <h1>RocketMovies</h1>
      </Rocket>

      {children}

      <Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>
          <button onClick={handleSignOut}>sair</button>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}
