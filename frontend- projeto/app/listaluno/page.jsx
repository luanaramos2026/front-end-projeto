'use client';
import Header from "../components/header";
import styles from "./page.module.css";

export default function ListAluno() {
   
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <section className={styles.listPanel}>
                    <h2>Pesagem</h2>
                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nome</th>
                                    <th>Pesagem</th>
                                    <th>Nível (verde, amarelo, vermelho)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>3A</td>
                                    <td className={styles.weight}><span aria-hidden="true">◒</span>2kg</td>
                                    <td><span className={`${styles.badge} ${styles.warning}`}><span aria-hidden="true">●</span> Amarelo</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div> 
    )
   }