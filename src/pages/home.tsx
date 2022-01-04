import Image from "next/image";

import styles from "../../styles/home.module.scss";

import searchIcon from "../../public/icons/searchIcon.svg";
import notificationIcon from "../../public/icons/notificationIcon.svg";
import profileIcon from "../../public/icons/profileIcon.svg";
import classificationFilmIcon from "../../public/icons/classificationFilmIcon.svg";
import clockIcon from "../../public/icons/clockIcon.svg";

import facebookIcon from "../../public/icons/facebookIcon.svg";
import instagramIcon from "../../public/icons/instagramIcon.svg";
import twitterIcon from "../../public/icons/twitterIcon.svg";

import { FilmCard } from "../components/FilmCard";
import { useState } from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { api } from "../services/api";

interface filmProps {
  data: [
    {
      id: string;
      name: string;
      bannerUrl: string;
      duration: string;
    },
  ];
}

export default function Home({ data }: filmProps) {
  const [isMenuAccountOpen, setIsMenuAccountOpen] = useState(false);

  function openAccountMenu() {
    setIsMenuAccountOpen(!isMenuAccountOpen);
  }

  return (
    <div className={styles.body}>
      <title>Kenai | Minha Conta</title>

      <header>
        <div className={styles.container}>
          <p>Kenai</p>

          <nav>
            <ul>
              <li>
                <Image
                  src={searchIcon}
                  alt="Ícone de pesquisa"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Link href="/">
                  <a> Inicio </a>
                </Link>
              </li>
              <li>Minha lista</li>
              <li>
                <Image
                  src={notificationIcon}
                  alt="Ícone de pesquisa"
                  width={30}
                  height={30}
                />
              </li>
              <li onClick={openAccountMenu}>
                <Image
                  src={profileIcon}
                  alt="Ícone de pesquisa"
                  width={30}
                  height={30}
                />

                {isMenuAccountOpen && (
                  <div className={styles.MenuAccount}>
                    <Link href="/">
                      <a> Sair </a>
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.content}>
        <span>Ação</span>

        <div className={styles.info}>
          <Image
            src={classificationFilmIcon}
            alt="Ícone de 5 estrelas representando a classificação do filme"
          />

          <div>
            <Image
              src={clockIcon}
              alt="Ícone de um relogio"
              width={20}
              height={20}
            />
            <p>1h 57m</p>
          </div>
        </div>

        <h1>Batman</h1>
        <p className={styles.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere
          laoreet ante non vulputate. Pellentesque blandit pretium purus, auctor
          gravida nisi varius et.
        </p>

        <a href="#">Assistir agora</a>

        <section className={styles.popularMoviesList}>
          <h2>Populares</h2>

          <div className={styles.filmCardList}>
            {data.map((films) => {
              return (
                <FilmCard
                  key={films.id}
                  image={films.bannerUrl}
                  name={films.name}
                />
              );
            })}
          </div>
        </section>
      </main>

      <footer>
        <p>Kenai</p>

        <div>
          <Image src={facebookIcon} alt="Ícone do facebook" />
          <Image src={instagramIcon} alt="Ícone do instagram" />
          <Image src={twitterIcon} alt="Ícone do twitter" />
        </div>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get("/movies");

  return {
    props: { data },
  };
};
