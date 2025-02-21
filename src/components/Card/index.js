import styles from "./Card.module.css";
import config from "../config/index";

const Card = ({ id, titulo, capa }) => {
  return (
    <div className={styles.container}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img
        src={config.ICONE_FAVORITAR}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
};
export default Card;
