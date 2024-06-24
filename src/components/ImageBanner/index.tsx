import styles from './ImageBanner.module.scss';

interface ImageBannerProps {
    bannerBackground: string;
}
export function ImageBanner({ bannerBackground}: ImageBannerProps) {
    return (
        <section className={styles.banner} style={{ background: `url(${bannerBackground})` }}>
        </section>
    )
}