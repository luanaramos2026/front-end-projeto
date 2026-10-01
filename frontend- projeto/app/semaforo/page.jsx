import Header from "../components/header";
import styles from "./page.module.css";

export default function Semaforo() {
  const nivel = "amarelo"; // verde | amarelo | vermelho

  return (
    <>
      <Header />

      <main className={styles.container}>
        <h1>Semáforo de Desperdício</h1>

        <div className={styles.botoes}>
          <button>Diário</button>
          <button>Semanal</button>
        </div>

        <div className={styles.card}>
          <div className={styles.semaforo}>
            <div
              className={`${styles.luz} ${
                nivel === "vermelho" ? styles.vermelho : ""
              }`}
            ></div>

            <div
              className={`${styles.luz} ${
                nivel === "amarelo" ? styles.amarelo : ""
              }`}
            ></div>

            <div
              className={`${styles.luz} ${
                nivel === "verde" ? styles.verde : ""
              }`}
            ></div>
          </div>

          <h2>Nível Atual</h2>
          <p>{nivel.toUpperCase()}</p>
        </div>

        <div className={styles.cards}>
          <div className={styles.info}>
            <h3>Total de desperdício</h3>
            <p>2 kg</p>
          </div>

          <div className={styles.info}>
            <h3>Turma</h3>
            <p>3º A</p>
          </div>

          <div className={styles.info}>
            <h3>Pesagens</h3>
            <p>25</p>
          </div>
        </div>
      </main>
    </>
  );
}