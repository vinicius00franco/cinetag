import React from "react";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import videos from "../../database/db.json";
import styles from "./Inicio.module.css";
import config from "../../components/config/index.js";

//src/components/config/index.jsb
const Inicio = () => {
  return (
    <>
      <Banner imagem={config.BANNER_HOME} />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
};

export default Inicio;
