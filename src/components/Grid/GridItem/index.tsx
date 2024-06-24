import { TelegramLogo } from '@phosphor-icons/react';
import styles from './GridItem.module.scss';

interface GridItemProps {
    imageSrc: string;
    name: string;
    title: string;
    telegramLink:string;

}
export function GridItem(props: GridItemProps) {

    return (
        <div className={styles.gridItem}>
            <div className={styles.gridItem__image}>
                <img src={props.imageSrc} alt={props.title} />
            </div>

            <div className={styles.gridItem__content}>
                <h2>{props.name}</h2>
                <h3>{props.title}</h3>
            </div>

            <div className={styles.gridItem__social}>
                <a href={props.telegramLink}><TelegramLogo size={24} color="#ffffff" weight="fill"/></a>
            </div>

        </div>
    )
}