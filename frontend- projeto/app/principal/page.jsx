import Header from "../components/header";
import styles from "./page.module.css";


export default function Principal(){
    return(
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.dashboard}>
                    <section className={styles.content}>
                        <span className={styles.eyebrow}>SESI MIRANDÓPOLIS <span aria-hidden="true">/</span> NUTRIDATA</span>
                        <h2>Sistema de controle de desperdícios alimentares - Sesi Mirandópolis</h2>
                        <p>Acompanhe os dados de alimentação da escola e transforme informação em escolhas mais sustentáveis.</p>
                        <div className={styles.heroMark} aria-hidden="true">⌁</div>
                    </section>
                    <section className={styles.stats} aria-label="Indicadores do sistema">
                        <article className={styles.statCard}>
                            <span className={styles.statIcon} aria-hidden="true">◒</span>
                            <div><span className={styles.statLabel}>Total de desperdício</span><strong>2 kg</strong></div>
                        </article>
                        <article className={styles.statCard}>
                            <span className={styles.statIcon} aria-hidden="true">▦</span>
                            <div><span className={styles.statLabel}>Turmas cadastradas</span><strong>1 turma</strong></div>
                        </article>
                        <article className={styles.statCard}>
                            <span className={`${styles.statIcon} ${styles.alertIcon}`} aria-hidden="true">!</span>
                            <div><span className={styles.statLabel}>Nível de alerta</span><strong>Amarelo</strong></div>
                        </article>
                    </section>
                </div>
            </main>
        </div>
    )
}