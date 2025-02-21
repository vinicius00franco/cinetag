// import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "../CabecalhoLink";
import config from "../config";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <CabecalhoLink url="./">
        <img src={config.LOGO} alt="Logo do cinetag"></img>
      </CabecalhoLink>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
