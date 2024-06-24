/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './GridContent.module.scss';

interface GridContentProps{
    imageSrc:string;
    contentText:string;
    contentTitle:string;
    hasLink?:boolean;
    linkTitle?:string;
    linkUrl?:string;
}
export function GridContent(props: GridContentProps) {
    return (
        <div className={styles.grid}>
            <div className={styles.grid__container}>
                <div className={styles.grid__container__image}>
                    <img 
                        src={props.imageSrc} 
                        alt='img'
                        style={{ width: '100%', height: 'auto', aspectRatio: '3/2' }}
                    />
                </div>
                <div className={styles.grid__container__title}>
                    <h3>{props.contentTitle}</h3>
                </div>
                <div className={styles.grid__container__content}>
                    <p>{props.contentText}</p>
                    {props.hasLink && props.linkUrl &&
                        <Link href={props.linkUrl}>{props.linkTitle}</Link>
                    }
                </div>
            </div>
        </div>
    );
}

