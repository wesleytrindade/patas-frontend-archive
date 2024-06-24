import Head from 'next/head'
import styles from '../styles/Home.module.scss';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useEffect, useState } from 'react';
import { api } from '../config/axios';
import { Ticket } from './api/ticket';
import { BannerSlideshow } from '../components/BannerSlideshow';
import { GridContent } from '../components/GridContent';
import { PartnersCarousel } from '../components/PartnersCarousel';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
export default function Home() {

  const imagesSlideShow = [
    `/img/patas_slideshow_1.jpg,right`,
    `/img/patas_slideshow_2.jpg,right`,
    `/img/patas_slideshow_3.jpg,center`,
    `/img/patas_slideshow_4.jpg,center`,
    `/img/patas_slideshow_5.jpg,right`,
    `/img/patas_slideshow_6.jpg,center`,
    `/img/patas_slideshow_7.jpg,right`,
    `/img/patas_slideshow_8.jpg,right`,
    `/img/patas_slideshow_9.jpg,center`,
    `/img/patas_slideshow_10.jpg,center`,
    `/img/patas_slideshow_11.jpg,center`,
    `/img/patas_slideshow_12.jpg,center`,
    `/img/patas_slideshow_13.jpg,center`,
  ];

  const imagesMascote = [
    '/img/banana01-daieny.png,center',
    '/img/banana02-daieny.png,center',
    '/img/banana03-daieny.png,center',
    '/img/banana04-daieny.png,center',
    '/img/banana05-daieny.png,center',
    '/img/banana06-daieny.png,center',
    '/img/banana07-daieny.png,center',
    '/img/banana08-daieny.png,center',
    '/img/banana09-daieny.png,center',
  ]


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1910, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [ticketTypeFilter, setTicketTypeFilter] = useState("social");
  const [tickets, setTickets] = useState([] as Ticket[]);

  useEffect(() => {
    api.get('ticket').then((res) => setTickets((res.data)));
  }, [])

  return (
    <>
      <Head>
        <title>Patas 2024 | Home</title>
        <meta name="description" content="Patas 2024 - Seu novo evento furry de hotel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>


      <Header />

      <main className={styles.main}>
        <div className={styles.main__bannerbanana}>
          <div className={styles.main__bannerbanana__content}>
            {/* <div className={styles.main__bannerbanana__content__fruits}>
              <img src="/img/laranja.png" alt="laranja" />
              <img src="/img/morango.png" alt="morango" />
              <img src="/img/banana.png" alt="banana" />
            </div> */}
            {/* <h3><strong>PATAS 2024</strong></h3>
            <h4>SOROCABA PARK HOTEL</h4>
            <h4>17 a 19 de Maio</h4> */}
          </div>
        </div>

        <div id="tickets" className={styles.main__bannerbemvindo}>
          <div className={styles.main__bannerbemvindo__content}>
            <div className={styles.main__bannerbemvindo__content__title}>
              <h2>Pronto para o <strong>PATAS?</strong></h2>
              <h3>O seu novo evento furry de hotel</h3>
              <h3>SOROCABA PARK HOTEL</h3>
              <h3>17 a 19 de Maio</h3>
              <h3>Rua Professor Joaquim Silva, 205, Sorocaba, CEP 18085-000, Brasil</h3>
              <br />
              <br />
            </div>
          </div>
        </div>


        <div className={styles.main__bannerAtividades}>
          <h3 className={styles.main__bannerAtividades__title}>Convidados</h3>
          <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true} className={styles.main__atividades}>
          <GridContent imageSrc="/img/eddykhaos.jpg" contentTitle="Eddy Khaos" contentText="Eddy Khaos, um mestre de cerimônias renomado e ganhador de diversos concursos de Cosplay, estará presente no evento como apresentador!" />
            <GridContent imageSrc="/img/batman_sorocaba.jpg" contentTitle="Batman de Sorocaba" contentText="Edelson Sales, cosplayer e cosmaker do Batman, está há mais de dois anos realizando sonhos e fazendo a alegria de crianças e adultos em festas e eventos com o personagem." />
            <GridContent imageSrc="/img/lobo_cosplay.jpg" contentTitle="Yuri Rolli" contentText="O cosplayer Yuri Rolli, mais conhecido por seu cosplay de Rengar, do jogo League of Legends, também é presença confirmada no Patas 2024!" />
            <GridContent imageSrc="/img/edelcio_ipanema.jpg" contentTitle="Edelcio Ipanema" contentText="Edélcio Ipanema é desenhista, ilustrador e historiador de história em quadrinhos. Além de ser Embaixador das Américas nas artes plásticas, integrante da Academia dos Intelectuais e Escritores do Brasil e vencedor do prêmio Ativista Cultural 2023" />
            <GridContent imageSrc="/img/frank_henrique.jpg" contentTitle="Frank Henrique" contentText="O Frank Henrique ele é produtor musical, participou da 5ª temporada de Canta Comigo na TV Record, canta a primeira abertura do anime Inuyasha em português: Mudar o Mundo" />
            <GridContent imageSrc="/img/anisio_mello.jpg" contentTitle="Anísio Mello Junior" contentText="O Anísio Mello Júnior é um nome que está intimamente ligado à história da música em produções de animação. Sua contribuição no campo da música para desenhos animados é inestimável ele compôs às aberturas de Dragon Ball e Dragon Ball Z." />
            <GridContent imageSrc="/img/rogerio_ferraz.jpg" contentTitle="Rogério Ferraz" contentText={`Rogério Ferraz trabalha com animação 2D e desenhos animados, participou das animaçãos "A Princesa e o Sapo da Disney", "Show da Luna", "Peixonauta" e atualmente trabalhando no "Medalha Zero".`} />
            <GridContent imageSrc="/img/raul.jpg" contentTitle="Raul Schlosser" contentText="Raul Schlosser é um ator, dublador e diretor de dublagem brasileiro. É conhecido por ser um dos dubladores do Wolverine no Brasil. É conhecido por emprestar sua voz à Jiraiya em Naruto, Wolverine em os X-Men e Marik no Yu-gi-oh" />
          </Carousel>
        </div>

        <div className={styles.main__video}>
          <div className={styles.main__video__content}>
            <iframe src="https://www.youtube.com/embed/0HDd4k-LIco?si=UN6my1eTQ8JwL8c1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className={styles.main__video__content__title}>
              <h3>O que é o evento?</h3>
              <br />
              <div className={styles.main__video__content__description}>
                <p>O Patas é um evento beneficente em formato de convenção para promover e celebrar a cultura de apreciação animais antropomórficos na região de Sorocaba.
                  O evento foi criado para ajudar as entidades que prestam apoio aos idosos da região.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main__bannerAtividades}>
        <h3 className={styles.main__bannerAtividades__title}>Atrações e Palestras</h3>
          <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true} className={styles.main__atividades}>
            <GridContent imageSrc="/img/balada_foto3.png" contentTitle="Balada com DJ" contentText="Venha aproveitar a balada com o nosso DJ! Só cuidado para não super aquecer sua fursuit no passinho haha" />
            <GridContent imageSrc="/img/pool_party.png" contentTitle="Pool Party" contentText="Venha aproveitar a nossa Pool Party com muitos brinquedos de piscina!" />
            <GridContent imageSrc="/img/banda-theklau.jpg" contentTitle="Banda The Klau" contentText="O evento Patas tem a honra de receber a banda The Klau. Uma banda de metal que irá tocar várias músicas do rock clássico" />
            <GridContent imageSrc="/img/mercadinho.png" contentTitle="Mercadinho Furry" contentText="O mercadinho furry já está aberto para as inscrições, se você quiser participar se registre no link abaixo" hasLink={true} linkTitle='Quero me registrar' linkUrl='https://forms.gle/3nseXcmRkW8pu5tn8' />
            <GridContent imageSrc="/img/just-dance-3.jpg" contentTitle="Campeonato de Just Dance" contentText="Venha participar do nosso campeonato de Just Dance, bote o esqueleto para chacoalhar e se divirta na nossa competição!" />
            <GridContent imageSrc="/img/tatuador_01.png" contentTitle="Estúdio de Tatuagem" contentText="Venha aproveitar para fazer uma tatuagem com o Jhonny Oliveira! Se quiser tatuar a sua fursona, essa é uma oportunidade de ouro" />
            <GridContent imageSrc="/img/patake.png" contentTitle="Patakê" contentText="Venha soltar a sua voz com o sistema customizado de karaokê do Patas! Só cuidado para não ficar rouco de tanto cantar" />
            <GridContent imageSrc="/img/jhonny2.jpg" contentTitle="Palestra: Criação de personagens" contentText="Venha participar da palestra de criação de personagens com o Johnny Yume" />
            <GridContent imageSrc="/img/havannawolf.png" contentTitle="Palestra: Venda de arte furry online" contentText="Venha aprender como vender arte furry online com o Havanna Wolf" />
            <GridContent imageSrc="/img/patas_banner_3.gif" contentTitle="E muito mais..." contentText={`Clique no botão abaixo para saber mais sobre a programação do Patas 2024!`} hasLink={true} linkTitle='Saiba Mais' linkUrl='programacao' />
          </Carousel>
        </div>

        <div className={styles.main__bannerslideshow}>
          <BannerSlideshow images={imagesSlideShow} />
        </div>



        <div className={styles.main__mascote}>
          <div className={styles.main__mascote__content}>
            <div className={styles.main__mascote__content__container}>
              <div className={styles.main__mascote__content__container__image}>
                <BannerSlideshow images={imagesMascote} />
              </div>
            </div>
            <div className={styles.main__mascote__content__text}>
              <h3>CONHEÇA O NICO, O MICO!</h3>
              <h4>O Nico com a sua fofura e simpatia, representa o sentimento que a nossa equipe quer passar para você, participante do PATAS.</h4>
              <h4>Uma felicidade contagiante após uma experiência inesquecível neste final de semana!</h4>
            </div>
          </div>
        </div>

        <PartnersCarousel />

        <Footer />
      </main>



    </>
  )
}
