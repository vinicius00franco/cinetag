import styles from "./Card.module.css";
import config from "../config/index";
import { useFavoritoContext } from "context/Favoritos/FavoritosContext";
import iconeFavoritar from "./favoritar.png";
import iconeDesfavoritar from "./desfavoritar.png";
import { Link } from "react-router-dom";

const Card = ({ id, titulo, capa }) => {
  console.log(id, titulo, capa);

  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.container}>
      <Link className={styles.Link} to={`/video/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>

      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => adicionarFavorito({ id, titulo, capa })}
      />
    </div>
  );
};
export default Card;
