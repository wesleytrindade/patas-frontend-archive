import Head from 'next/head';
import styles from '../styles/NotFound.module.scss';
import { Header } from '../components/Header';

export default function NotFound() {
    return (
        <>
            <Header />
            <div className={styles.main}>
                <Head>
                    <title>Página não encontrada</title>
                </Head>

                <div className={styles.main__container}>
                    <div className={styles.main__container__title}>
                        <h2>404</h2>
                    </div>

                    <div className={styles.main__container__content}>
                        <h3>Seja bem-vindo à ilha da Banana!</h3>
                    </div>
                </div>
            </div>
        </>
    )
}