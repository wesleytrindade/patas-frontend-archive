import { CSSProperties, useEffect, useState } from 'react'
import styles from './BannerSlideshow.module.scss';
interface BannerSlideshowProps {
    images: string[]
}

export function BannerSlideshow({ images }: BannerSlideshowProps) {

    const imagesSrc = images.map(i => {
        let aux = i.split(',');
        return aux[0];
    });

    
    const position = images.map(i => {
        let aux = i.split(',');
        return aux[1];
    });
    
    const [actualImage, setActualImage] = useState(0);

    const showSlides = () => {
        if (actualImage < imagesSrc.length - 1) {
            setActualImage(() => actualImage + 1);
        }

        else {
            setActualImage(0);
        }
    }

    setTimeout(showSlides, 5000);

    return (
        <div className={styles.bannerSlideshow}>

            <div className={styles.fade} style={
                {
                    backgroundImage: `url(${imagesSrc[actualImage]})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: `${position[actualImage]}`
                } as CSSProperties}>
            </div>
        </div>
    )
}