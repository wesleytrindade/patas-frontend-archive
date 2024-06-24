/* eslint-disable @next/next/no-img-element */
import { CaretDown, CaretUp, List } from '@phosphor-icons/react';
import styles from './Header.module.scss';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export function Header() {

    const [scrollNavbarSize, setScrollNavbarSize] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (show) {
                setScrollNavbarSize(true);
            } else {
                setScrollNavbarSize(false)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [aboutOpened, setAboutMenuOpened] = useState(false);

    const mobileContainerRef = useRef<HTMLDivElement>(null);

    const closeNavigationMenu = () => {
        setMobileMenuOpened(!setMobileMenuOpened);
        setAboutMenuOpened(false);
    }
    const closeOpenMenus = (e: any) => {
        if (mobileContainerRef.current && mobileMenuOpened && !mobileContainerRef.current?.contains(e.target)) {
            closeNavigationMenu();
        }
    }

    if (typeof window !== "undefined") {
        document.addEventListener('mousedown', closeOpenMenus)
    }


    return (
        <>
            <nav className={`slideInDown ${styles.header} ${scrollNavbarSize == true ? styles.header__scroll : ''}`}>

                <div className={styles.header__logo}>
                    <Link href="/"><img src="/img/Patas_Logo_Monochrome-03.svg" alt='patas' /></Link>
                </div>

                <div className={styles.mobile__logo}>
                    <Link href="/"><img src="/img/Patas_Logo_Monochrome_trspt-04.png" alt='patas' /></Link>
                </div>
                <ul className={styles.header__menu}>
                    <li><Link href='/ingresso'>Compre aqui o seu ingresso!</Link></li>
                    <li><div><Link href='/hospedagem'>Garanta sua hospedagem </Link></div></li>
                    <li><div><Link href='/programacao'>Programação</Link></div></li>
                    <li><div>
                        <div className={styles.header__menu__dropdown}>
                            <div className={styles.header__menu__dropdown__button}>Sobre</div>
                            <div className={styles.header__menu__dropdown__content}>
                                <Link href='/about'>Conheça a Staff</Link>
                                <Link href='/termos'>Termos e condições</Link>
                                <Link href='/regulamento'>Regulamento</Link>
                            </div>
                        </div>
                    </div></li>
                </ul>

                <button type="button" className={styles.mobile__button} onClick={() => setMobileMenuOpened(!mobileMenuOpened)}>
                    <List color="#ffffff" size={32} />
                </button>
            </nav>

            {mobileMenuOpened &&

                <div className={styles.mobile__menu}>
                    <div className={styles.mobile__menu__container} ref={mobileContainerRef}>
                        <ul className={styles.mobile__menu__container__list}>
                            <li>
                                <Link href={`${process.env.BASE_SITE_URL}/ingresso`}>
                                    <a onClick={closeNavigationMenu}>Compre aqui o seu ingresso!</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/hospedagem">
                                    <a onClick={closeNavigationMenu}>Garanta sua hospedagem </a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/programacao">
                                    <a onClick={closeNavigationMenu}>Programação</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a onClick={() => setAboutMenuOpened(!aboutOpened)}>Sobre {aboutOpened ? <CaretUp size={16} /> : <CaretDown size={16} />} </a>
                                </Link>
                            </li>
                            {aboutOpened &&
                                <>
                                    <li><Link href='/about'>Conheça a Staff</Link></li>
                                    <li><Link href='/termos'>Termos e condições</Link></li>
                                    <li><Link href='/regulamento'>Regulamento</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            }

        </>
    )
}