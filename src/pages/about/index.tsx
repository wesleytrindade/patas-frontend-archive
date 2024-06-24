import Head from 'next/head';
import styles from '../../styles/Sobre.module.scss';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner';
import { GridItem } from '../../components/Grid/GridItem';
import { Footer } from '../../components/Footer';
export default function Sobre() {
    return (
        <>
            <Head>
                <title>Patas 2024 | Conheça a Staff</title>
                <meta name="description" content="Conheça a Staff" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>


            <main className={styles.main}>
                <Header />
                <Banner bannerLabel="Conheça a Staff" bannerBackground='/img/patas_banner.jpg' />
                <div className={styles.main__content__staff}>
                    <h2>STAFF DO PATAS 2024</h2>
                    <div className={styles.main__content__staff__grid}>
                        <GridItem imageSrc='/img/kastiel.jpg' title='Chairman' name='Kastiel' telegramLink='https://t.me/Kastiel_fur' />
                        <GridItem imageSrc='/img/zeng.jpg' title='Vice-Chairman' name='Zeng Tiger' telegramLink='https://t.me/Zengtiger' />
                        <GridItem imageSrc='/img/felisson.jpg' title='Diretor' name='Felisson' telegramLink='https://t.me/Felisson' />
                        <GridItem imageSrc='/img/jack.png' title='Desenvolvedor' name='Jack Whitefield' telegramLink='https://t.me/JackWhitefield' />
                        <GridItem imageSrc='/img/mekhy.jpg' title='Desenvolvedor' name='Mekhy!' telegramLink='https://t.me/MekhyW' />
                        <GridItem imageSrc='/img/daieny.jpg' title='Artista' name='Daieny Schuttz' telegramLink='https://t.me/daienykyoki' />
                        <GridItem imageSrc='/img/nina.jpg' title='Artista' name='Nina Barrionovsky' telegramLink='https://t.me/Barrionovsky' />
                        <GridItem imageSrc='/img/aluada.jpg' title='Artista' name='Aluada' telegramLink='https://t.me/Aluada' />
                        <GridItem imageSrc='/img/gab.jpg' title='Artista' name='Gabriela R.' telegramLink='https://t.me/awesome_gabs' />
                        <GridItem imageSrc='/img/miink.jpg' title='Redes Sociais' name='Miink' telegramLink='https://t.me/Miink_furry' />
                        <GridItem imageSrc='/img/sopero.jpg' title='Balada' name='Sopero' telegramLink='https://t.me/sopero_racc' />
                        <GridItem imageSrc='/img/everton.jpg' title='Marketing' name='Everton Campos' telegramLink='https://t.me/ewertoncam' />
                        <GridItem imageSrc='/img/suu.jpg' title='Organizadora' name='SU' telegramLink='https://t.me/CELLY_SU' />
                        <GridItem imageSrc='/img/kel.jpg' title='Organizador' name='Kel' telegramLink='https://t.me/k3llneko' />
                        <GridItem imageSrc='/img/nick.jpg' title='Organizador' name='Nick Mackinlane' telegramLink='https://t.me/Titioderg'/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )

}