import { PawPrint } from '@phosphor-icons/react';
import styles from './GridTicket.module.scss';
import { isSafari } from 'react-device-detect';

export interface GridTicketProps{
    gridColor: 'bronze'|'silver'|'gold'|'diamond';
    title:string;
    price:string;
    description:string;
    prizesList:string[];
    ingresseLink:string;
}
export function GridTicket({gridColor,title,price,description,prizesList,ingresseLink}:GridTicketProps){

    const borderColor = `border__${gridColor}`;
    const priceColor = `price__${gridColor}`;

    const safari = isSafari ? 'safari':'';

    return(
        <div className={`${styles.ticket} ${styles[borderColor]} ${styles.fadeIn}`}>
        <div className={`${styles[gridColor]} ${styles.ticket__header}`}>
          <p>{title}*</p>
        </div>

        <div className={`${styles.ticket__price} ${styles[safari]}`}>
          <h4>R$</h4>
          <h3 className={styles[priceColor]}>{price}</h3>
        </div>

        <div className={styles.ticket__description}>
          <p>{description}</p>
        </div>

        <div className={styles.ticket__list}>
          <ul>
            {prizesList && prizesList.map((x,i)=>{
                return(
                    <li key={i}><PawPrint fill='fill' size={16}/> {x}</li>
                )
            })}
          </ul>
        </div>

        <div className={styles.ticket__button}>
          <a href={ingresseLink} className={styles[gridColor]}>Comprar agora</a>
        </div>
      </div>
    )
}