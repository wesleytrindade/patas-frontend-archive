import styles from './Banner.module.scss';

interface BannerProps {
    bannerBackground: string;
    bannerLabel: string;
}
export function Banner({ bannerBackground, bannerLabel}: BannerProps) {
    return (
        <section className={styles.banner} style={{ background: `url(${bannerBackground})` }}>

            <div className={styles.banner__content}>
                <p>{bannerLabel}</p>
            </div>


        </section>
    )
}