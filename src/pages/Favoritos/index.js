import styles from "./Favoritos.module.css";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import { useFavoritoContext } from "context/Favoritos/FavoritosContext";

const Favoritos = () => {
  const favorito = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {console.log(favorito)}
        {console.log(typeof favorito)}
        {console.log("Favoritos antes da operação:", favorito)}
        {console.log("Tipode favoritos:", typeof favorito)}
        {console.log("É um array?",Array.isArray(favorito))}
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
