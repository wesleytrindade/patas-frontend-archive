/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from 'next/link';
import styles from '../../styles/Hospedagem.module.scss';
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";

export default function Hospedagem() {
    return (
        <>
            <Head>
                <title>Patas 2024 | Hospedagem</title>
                <meta name="description" content="Garanta a sua hospedagem" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.main}>
                <Header />

                <Banner bannerBackground="/img/foto_hospedagem_01.jpg" bannerLabel="Hospedagem" />

                <div className={styles.main__hospedagem}>
                    <div className={styles.main__hospedagem__grid}>
                        <div className={styles.main__hospedagem__grid__item}>
                            <h1>O EVENTO PATAS VAI OCORRER NO SOROCABA PARK HOTEL</h1>
                            <p>Quem procura conforto e comodidade para hospedar-se em Sorocaba, encontra o Sorocaba Park Hotel como uma das melhores opções da região.Prezamos pela qualidade e serviço prestado aos nossos hóspedes, agregando aptidões para atender simultaneamente aqueles que se deslocam a trabalho ou a lazer.</p>
                            <p>O Sorocaba Park Hotel oferece uma localização estratégica, a 2 km do centro da cidade de Sorocaba e a 2,4 km do Parque das Águas.</p>
                            <p> As comodidades incluem piscina ao ar livre e quartos agradáveis com WiFi gratuito. O Estádio Municipal Walter Ribeiro de Sorocaba fica a 2,9 km de distância.</p>
                            <p>Os quartos do Sorocaba Park Hotel possuem comodidades modernas, incluindo ar-condicionado, TV e frigobar. Todos são decorados com piso em carpete neutro e roupa de cama colorida.</p>
                            <p>O restaurante do Sorocaba Park serve cozinha internacional requintada, e você pode desfrutar de um coquetel tropical no bar. Um buffet de café da manhã diário com frutas da estação, bolos frescos e pães está disponível.</p>
                            <p>O Hotel Sorocaba Park está situado a 3,2 km da Padaria Real e a 4,6 km do Shopping Pátio Ciane. O aeroporto mais próximo é o Aeroporto de Viracopos, a 61 km da propriedade. A recepção está aberta 24 horas. O estacionamento está disponível por um custo adicional.</p>

                            <h3>QUARTOS</h3>

                            <h4>Quarto Deluxe com Cama Queen-size {"(1 Cama de casal para duas pessoas)"} </h4>
                            <h4>Quarto Deluxe com 2 Camas de Solteiro {"(Para 2 pessoas)"}</h4>
                            <h4>Quarto Grande com 2 Camas de Solteiro {"(Para 2 pessoas)"}</h4>
                            <h4>Suíte Família com 2 Camas de Solteiro a uma de casal, ou quatro camas de solteiro {("Para 4 Pessoas")}</h4>
                            <h4>Suíte Presidencial {("Para 2 Pessoas")}</h4>

                            <div className={styles.grid__container__content}>
                                <Link href="https://atlantica.letsbook.com.br/D/Busca?hotel=141&adultos=1&promocode=PATAS2024">Reserve aqui</Link>
                            </div>

                            <p>Na sua hospedagem o café da manhã e WiFi são cortesia.</p>
                            <p>Check in a partir das <strong>14:00h</strong> e Check out até as <strong>12:00h</strong></p>
                            <p>Estacionamento <strong>R$ 15,00</strong> a diária por veículo.</p>

                            <p><strong>Reservas:</strong> Desconto válido somente para as reservas feitas através no site da Altantica. Reservas feitas
                                através de outros canais (Booking, Decolar, Hotéis.com, etc não será concedido desconto). Os contatos
                                de reservas estão no rodapé deste documento.</p>
                            <p><strong>Forma de Pagamento:</strong> Será solicitado os dados do cartão como garantia, porém, o pagamento será feito
                                somente no check in. Aceitamos todos os cartões de débito, crédito (a vista ou parcelado em até 5x s/
                                juros)</p>
                            <p><strong>Cancelamento:</strong> Sem cobrança até 24 horas antes do check in. Cancelamento fora do prazo será cobrado
                                o valor da 1ª diária.
                                No Show: em caso de No Show (não comparecimento) será cobrado o valor da 1ª diária.
                            </p>

                            <p>Em caso de dúvidas, entre em contato pelo e-mail <a href="mailto:patas_oficial@outlook.com">patas_oficial@outlook.com</a> ou chat no Telegram <a href="https://t.me/bananaa2024">t.me/bananaa2024</a></p>

                        </div>

                        <div className={styles.main__hospedagem__grid__item}>
                            <h1>SOROCABA PARK HOTEL</h1>
                            <div className={styles.main__hospedagem__grid__item__image}>
                                <img src="/img/patas_banner.jpg" alt="SOROCABA PARK HOTEL" />
                            </div>
                            <p><strong>Telefone / WhatsApp: </strong>(15) 2101-2800</p>
                            <p><strong>Central de Reservas: </strong>(15) 2101-2800</p>
                            <p>reservas@parkhotel.com.br</p>
                            <p>Rua Professor Joaquim Silva, 205, Sorocaba, CEP 18085-000, Brasil</p>

                            <div className={styles.main__hospedagem__grid__item__map}>
                                <iframe
                                    src="https://maps.google.com/maps?q=sorocaba%20park%20hotel&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    width={480}
                                    height={480}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />

        </>
    )
}