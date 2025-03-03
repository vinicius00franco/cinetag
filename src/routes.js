import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import FavoritosProvider from "context/Favoritos/FavoritosContext";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
          </Routes>
        </Container>
      </FavoritosProvider>
      <Rodape />
    </BrowserRouter>
  );
};

export default AppRoutes;
