import React from 'react';
import Rodape from "components/Rodape";
import Cabecalho from "../../components/Cabecalho";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import config from "../../components/config";
import Card from "../../components/Card";
import videos from '../../database/db.json';
import styles from './Inicio.module.css';

const Inicio = () => {
  return (
    <>
      <Cabecalho />
      <Banner imagem={config.BANNER_HOME} />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
      <Rodape />
    </>
  );
};

export default Inicio;
