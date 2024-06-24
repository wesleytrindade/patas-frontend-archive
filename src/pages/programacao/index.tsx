import Head from 'next/head';
import styles from '../../styles/Programacao.module.scss';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ImageBanner } from '../../components/ImageBanner';
import { useEffect, useState } from 'react';
import { api } from '../../config/axios';
import { AxiosResponse } from 'axios';

export default function Programacao() {

    const [isLoading, setIsLoading] = useState(true);
    const [programacao, setProgramacao] = useState([] as Programacao[]);

    interface Programacao {
        dia: string;
        colunas: string[],
        programacao: string[],
        disclaimer: string
    }
    useEffect(() => {
        const getProgramacao = () => {
            api.get('programacao').then((response: AxiosResponse<Programacao[]>) => {
                setProgramacao(response.data);
                setIsLoading(false);
            });
        }

        getProgramacao();

    }, []);

    return (
        <>
            <Head>
                <title>Patas 2024 | Programação</title>
                <meta name="description" content="Programação do Patas 2024" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main className={styles.programacao}>
                <Header />
                <ImageBanner bannerBackground='/img/programacao_banner.png' />

                {!isLoading &&
                    <>

                        {programacao.map((data, key) => {
                            return <div className={styles.programacao__container} key={key}>
                                <h4>{data.dia}</h4>

                                <table>
                                    <thead>


                                        <tr>
                                            {data.colunas.map((col, key) => {
                                                return <th key={key}>{col}</th>
                                            })}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {data.programacao.map((p, i) => {
                                            let tmp = p.split(',');

                                            return (
                                                <tr key={i}>
                                                    {tmp.map((t, key) => {
                                                        return <td key={key}>{t}</td>
                                                    })}

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {data.disclaimer != "" &&
                                    <p>{data.disclaimer}</p>
                                }
                                <br />
                            </div>
                        })
                        }
                    </>
                }
                

            <Footer />
            </main>

        </>
    )
}