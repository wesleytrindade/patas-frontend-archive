import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './PartnersCarousel.module.scss';

export function PartnersCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1919, min: 1024 },
      items: 5
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

  return (

    <div className={styles.carousel}>

      <div className={styles.carousel__content}>
        <h3>Apoiadores</h3>
        <Carousel autoPlay={true} autoPlaySpeed={2000} rewind={true} rewindWithAnimation={true} className={styles.carousel__content__grid} responsive={responsive}>
          <a href='https://brasilfurfest.com.br'><img src='/img/bff.jpg' alt='bfflogo' /></a>
          <a href='https://furcamp.com.br'><img src='/img/furcamp.png' alt='furcamplogo' /></a>
          <a href='https://www.instagram.com/jhonny.olliveira/'><img src='/img/patrocinador_tatoo.jpg' alt='tatuadorlogo' /></a>
          <a href='https://www.instagram.com/giopotomati.tattoo/'><img src='/img/raykaan-gio.png' alt='tatuador2logo' /></a>
          <a href='https://daieny.com'><img src='/img/daienylogo.jpg' alt='daienylogo' /></a>
          <a href="https://t.me/CookieMWbot"><img src='/img/cookielogo.png' alt='cookiebotlogo' /></a>
          <a href="https://www.instagram.com/animefastore?igsh=MTlhY2ltcTgzdDhtcg=="><img src="/img/animefastore.jpg"/></a>
          <a href='https://bloodlycan.com/'><img src='/img/bloodlycan.gif' alt='bloodlycan' /></a>
          <a href="https://www.facebook.com/furrymachine"><img src='/img/patrocinador_furrymachine.jpg' alt='furrymachinelogo' /></a>
          <a href="https://t.me/FURPique"><img src="/img/furpique.jpg" alt='furpiquelogo' /></a>
          <a href="http://brafurries.carrd.co"><img src="/img/brafurrieslogo.jpg" alt='brafurrieslogo' /></a>
          <a href="https://t.me/furrpark"><img src="/img/furpark.png" alt='furparklogo' /></a>
          <a href="https://t.me/trexfurplayergroup"><img src="/img/trex-furplayer.png" alt="trexfurplayerlogo"/></a>
          <a href="https://fursmeet.wixsite.com/fursmeet"><img src="/img/fursmeet.png" alt="fursmeetlogo"/></a>
          <a href="https://fursitio.com"><img src="/img/fursitio.png" alt="fursitio"/></a>
        </Carousel>
      </div>
    </div>);
}