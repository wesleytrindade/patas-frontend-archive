import Head from 'next/head'
import styles from '../../styles/Ingresso.module.scss';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Grid } from '../../components/Grid';
import { GridTicket } from '../../components/Grid/GridTicket';
import { useEffect, useState } from 'react';
import { api } from '../../config/axios';
import { Ticket } from '.././api/ticket';
import { Banner } from "../../components/Banner";
import { TicketTypeOptions } from '../../Enuns/TicketType';
import "react-multi-carousel/lib/styles.css";
export default function Ingresso() {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1910, min: 1024 },
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

  const [ticketTypeFilter, setTicketTypeFilter] = useState("social");
  const [tickets, setTickets] = useState([] as Ticket[]);

  useEffect(() => {
    api.get('ticket').then((res) => setTickets((res.data)));
  }, [])

  return (
    <>
      <Head>
        <title>Patas 2024 | Home</title>
        <meta name="description" content="Compre aqui o seu ingresso!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <Banner bannerBackground="/img/foto_hotel_04.jpg" bannerLabel="Ingresso" />

      <main className={styles.main}>

        <div id="tickets" className={styles.main__bannerbemvindo}>
          <div className={styles.main__bannerbemvindo__content}>

            {tickets &&
              <div className={styles.main__bannerbemvindo__content__ingressos}>
                <div className={styles.main__bannerbemvindo__content__ingressos__}>
                  <div className={styles.main__bannerbemvindo__content__ingressos__filter}>
                    <label htmlFor="ticketFilter">Tipo do Ingresso</label>
                    <select name="ticketFilter" value={ticketTypeFilter} onChange={(e) => setTicketTypeFilter(e.target.value)}>
                      {TicketTypeOptions.map((tt, i) => {
                        return (
                          <option key={i} value={tt.type} label={tt.label} />
                        )
                      })}
                    </select>
                  </div>
                  <Grid background='transparent'>
                    {[...tickets.filter(x => x.ticketType === ticketTypeFilter)].map((ticket) => {
                      return (
                        <GridTicket key={ticket.ticketId} title={ticket.title} description={ticket.description} gridColor={ticket.gridColor} prizesList={ticket.prizesList} price={ticket.price} ingresseLink={ticket.ingresseLink} />
                      )
                    })}
                  </Grid>
                  <div className={styles.main__bannerbemvindo__content__ingressos__regras}>
                    <p>* A plataforma Ingresse cobra uma taxa de 10% no valor do ingresso, sendo o valor informado no site sem a taxa inclusa</p>
                    <p>** Meia-entrada válida para estudantes, professores da rede pública, idosos, pessoas com deficiência e jovens de baixa renda. Obrigatória a apresentação de um comprovante na porta do evento, junto com documento com foto.</p>
                    <p>*** A meia-entrada social é válida para todos que doarem 1kg de alimento não perecível no dia do evento.Ao adquirir o ingresso você declara estar de acordo com as regras que se encontram no site do evento.</p>
                  </div>
                </div>
              </div>

            }
          </div>
        </div>

        <Footer />        
      </main>
      

      
    </>
  )
}
