import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import styles from "../../styles/index.module.scss";

const Home: NextPage = () => {
  // const [time, setTime] = useState("");

  // setInterval(() => {
  //   const getActualHours = new Date().getHours();
  //   const getActualMinutes = new Date().getMinutes();

  //   const actualTime =
  //     String(getActualHours) + " : " + String(getActualMinutes);

  //   setTime(actualTime);
  // }, 1000);

  return (
    <div className={styles.container}>
      <title>Kenai | Entrar</title>
      <header className={styles.header}>
        <p>Kenai</p>

        <time>14: 48</time>
      </header>

      <main className={styles.content}>
        <h1>Bem-vindo de volta ao Kenai</h1>
        <p>Quem está usando ?</p>

        <section className={styles.profiles}>
          <Link href="/home">
            <div className={styles.profile}>
              <div></div>

              <span>Alex Teixeira</span>
            </div>
          </Link>

          <Link href="/home">
            <div className={styles.profile}>
              <div></div>

              <span>Fabio Teixeira</span>
            </div>
          </Link>

          <Link href="/home">
            <div className={styles.profile}>
              <div></div>

              <span>José Ricardo</span>
            </div>
          </Link>
        </section>
        <button className={styles.createNewProfile}>Adicionar perfil</button>
      </main>
    </div>
  );
};

export default Home;
