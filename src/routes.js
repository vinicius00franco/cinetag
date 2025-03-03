import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import FavoritosProvider from "context/Favoritos/FavoritosContext";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="/video/:id" element={<Player />}></Route>
            <Route path="*" element={<NaoEncontrada />}></Route>
          </Routes>
        </Container>
      </FavoritosProvider>
      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
