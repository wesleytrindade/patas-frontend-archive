/* eslint-disable @next/next/no-img-element */
import { InstagramLogo, TwitterLogo, TelegramLogo, FacebookLogo, YoutubeLogo } from '@phosphor-icons/react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__title}>
        <img src='/img/Patas_Logo_White-04.png' alt='pataslogo' />
        <div className={styles.footer__title__text}>
          <p>PATAS 2024</p>
          <p>Sorocaba - SP</p>
          <p>17 a 19 de Maio</p>
        </div>
      </div>

      <div className={styles.footer__socialmedia}>
        <a href='https://www.youtube.com/@Patas_oficial'><YoutubeLogo size={32} color='#ffffff' /></a>
        <a href='https://www.instagram.com/patasoficial_/'><InstagramLogo size={32} color='#ffffff' /></a>
        <a href='https://x.com/patasoficial_?t=A72qRHwyd8GsLa8ORE7-cw&s=09'><TwitterLogo size={32} color='#ffffff' /></a>
        <a href='https://t.me/bananaa2024'><TelegramLogo size={32} color='#ffffff' /></a>
        <a href='https://www.facebook.com/profile.php?id=61555479195474&mibextid=ZbWKwL'><FacebookLogo size={32} color='#ffffff' /></a>
      </div>

      <div className={styles.footer__mascote}>
        <img src='/img/banana06-daieny.png' alt='mascote'/> 

      </div> 
    </footer>
  )
}