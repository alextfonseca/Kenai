import Image from "next/image";

import styles from "../../styles/home.module.scss";

import searchIcon from "../../public/icons/searchIcon.svg";
import notificationIcon from "../../public/icons/notificationIcon.svg";
import profileIcon from "../../public/icons/profileIcon.svg";
import classificationFilmIcon from "../../public/icons/classificationFilmIcon.svg";
import clockIcon from "../../public/icons/clockIcon.svg";

import shangChiFilmImage from "../../public/images/shangChiFilmImage.png";

export default function home() {
  return (
    <div className={styles.body}>
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
              <li>Inicio</li>
              <li>Minha lista</li>
              <li>
                <Image
                  src={notificationIcon}
                  alt="Ícone de pesquisa"
                  width={30}
                  height={30}
                />
              </li>
              <li>
                <Image
                  src={profileIcon}
                  alt="Ícone de pesquisa"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <span>Ação</span>

        <div>
          <Image
            src={classificationFilmIcon}
            alt="Ícone de 5 estrelas representando a classificação do filme"
          />

          <div>
            <Image src={clockIcon} alt="Ícone de um relogio" />
            <p>1h 57m</p>
          </div>
        </div>

        <h1>Batman</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere
          laoreet ante non vulputate. Pellentesque blandit pretium purus, auctor
          gravida nisi varius et. Fusce ac sollicitudin lacus. Mauris felis est,
          placerat sagittis felis et, imperdiet convallis risus. Ut rutrum
          sodales felis, tempor volutpat magna eleifend in. Morbi sed neque
          interdum, accumsan sem at, consequat tortor. Duis lacus leo, elementum
        </p>

        <a href="#">Assistir agora</a>

        <section>
          <h2>Populares</h2>

          <div>
            <div>
              <Image src={shangChiFilmImage} />

              <div></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
