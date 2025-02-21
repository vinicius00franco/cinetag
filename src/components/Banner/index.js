import styles from "./Banner.module.css";

const Banner = ({ imagem }) => {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('${imagem}')` }}
    ></div>
  );
};

export default Banner;
