import Image from "next/image";

import styles from "./style.module.scss";

import classificationFilmIconWhite from "../../../public/icons/classificationFilmIconWhite.svg";
import Link from "next/link";

interface FilmCardProps {
  image: string;
  name: string;
}

export const FilmCard = ({ image, name }: FilmCardProps) => {
  return (
    <div className={styles.container}>
      <Image
        src={image}
        alt={`banner do filme ${name}`}
        width={200}
        height={300}
      />

      <div className={styles.filmInfo}>
        <span>Categoria</span>

        <Image
          className={styles.filmPhoto}
          src={classificationFilmIconWhite}
          alt="Ícones de estrelas representando a classificação do filme"
        />
        <p>{name}</p>
      </div>
    </div>
  );
};
