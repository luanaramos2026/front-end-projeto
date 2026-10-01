import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <Link className={styles.brand} href='/'>
                    <Image src="/food-bowl.svg" alt="" width={30} height={30} className={styles.brandImage} />
                    <span>NutriData</span>
                </Link>
                <nav className={styles.nav}>
                <ul>
                    <li><Link className={styles.navLink} href='/'>Início</Link></li>
                    <li><Link className={styles.navLink} href='/cadaluno'> Cadastro Turmas</Link></li>
                    <li><Link className={styles.navLink} href='/listaluno'>Pesagem</Link></li>
                    <li><Link className={styles.navLink} href='/semaforo'>Semáforo</Link></li>

                </ul>
                </nav>
            </div>
        </header>
    )
}

