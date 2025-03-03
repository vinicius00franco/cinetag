import styles from "./Favoritos.module.css";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import { useFavoritoContext } from "context/Favoritos/FavoritosContext";
import config from "components/config";

const Favoritos = () => {
  const favorito = useFavoritoContext();
  return (
    <>
      <Banner imagem={config.BANNER_FAVORITOS} />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.favorito.map((fav) => {
          return (
            <Card
              key={fav.id}
              {...fav}
            />
          );
        })}
      </section>
    </>
  );
};

export default Favoritos;
