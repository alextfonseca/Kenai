import type { GetServerSideProps } from "next";

import { FormEvent, useState } from "react";

import styles from "../../styles/index.module.scss";
import { ProfileLogin } from "../components/ProfileLogin";
import { api } from "../services/api";

interface profileProps {
  data: [
    {
      name: string;
    },
  ];
}

const Home = ({ data }: profileProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProfileName, setNewProfileName] = useState("");

  // abrir menu
  function openModalNewProfile() {
    setIsModalOpen(!isModalOpen);
  }

  // obter o horário atualizado
  const getActualHours = new Date().getHours();
  const getActualMinutes = new Date().getMinutes();
  const actualTime = String(getActualHours) + " : " + String(getActualMinutes);

  // adicionar novo usuário
  async function handleCreateNewProfile(event: FormEvent) {
    const newProfile = { name: newProfileName };

    try {
      await api.post("/addNewProfile", newProfile);
    } catch (error) {
      console.log(error);
    }

    event.preventDefault();
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <title>Kenai | Entrar</title>
          <header className={styles.header}>
            <p className={styles.logo}>Kenai</p>

            <time>{actualTime}</time>
          </header>

          <main>
            <h1>Bem-vindo de volta ao Kenai</h1>
            <p>Quem está usando ?</p>

            <section className={styles.profiles}>
              {data.map((profile) => {
                return (
                  <ProfileLogin name={`${profile.name}`} key={profile.name} />
                );
              })}
            </section>
            <button
              className={styles.createNewProfile}
              onClick={openModalNewProfile}
            >
              Adicionar perfil
            </button>
          </main>
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.addNewProfile}>
          <div className={styles.formContainer}>
            <form onSubmit={handleCreateNewProfile}>
              <label id="userName">Nome do novo usuário</label>
              <input
                type="text"
                onChange={(e) => setNewProfileName(e.target.value)}
              />
              <button type="submit">Adicionar usuário</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get("/profiles");

  return {
    props: { data },
  };
};
