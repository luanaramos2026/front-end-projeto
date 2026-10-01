'use client';
import { useState } from "react";
import Header from "../components/header";
import styles from "./page.module.css";

export default function CadAluno() {
    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <section className={styles.formPanel}>
                    <div className={styles.heading}>
                        <h2>Cadastro de Turmas</h2>
                    </div>
                    <form action="" className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="codigo">Código</label>
                            <input id="codigo" type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="nome">Nome</label>
                            <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </div>
                        
                        <button type="submit">Salvar</button>
                    </form>
                </section>
            </main>
        </div>
    )
   }