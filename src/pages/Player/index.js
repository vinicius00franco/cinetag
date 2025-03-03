import { useParams } from "react-router-dom";
import styles from "./Player.module.css";
import videos from "../../database/db.json";
import Banner from "../../components/Banner";
import Titulo from "components/Titulo";
import config from "components/config";
import NaoEncontrada from "pages/NaoEncontrada";

const Player = () => {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  });

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <>
      <Banner imagem={config.BANNER_VIDEO_IFRAME} />
      <section className={"container__video"}>
        <Titulo>
          <h1 className={styles.titulo__texto}>Player</h1>
        </Titulo>
        <div className={styles.container__video}>
          <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Player;
