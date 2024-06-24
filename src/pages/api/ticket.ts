// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface Ticket {
  ticketId: number,
  gridColor: 'bronze' | 'silver' | 'gold' | 'diamond';
  title: string;
  price: string;
  description: string;
  prizesList: string[];
  ticketType: 'social' | 'student' | 'full' | 'vip',
  ingresseLink: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Ticket[]>
) {
  return res.status(200).json([{
    ticketId: 1,
    gridColor: 'bronze',
    title: 'Pata Bronze - Social',
    price: '200',
    description: 'A experiência bronze do patas (Necessita a doação de 1Kg de alimento)***',
    prizesList: [
      'Entrada de 3 dias de evento',
      'Badge do evento',
      'Cordão de badge padrão',
      'Chaveiro',
      'Garrafinha',
      'Button',
      'Caneta',
      'Brinde (Não Perturbe)',
      'Patabook'
    ],
    ticketType: 'social',
    ingresseLink: "https://www.ingresse.com/patas-2024#comprar",
  },

  {
    ticketId: 2,
    gridColor: 'silver',
    title: 'Pata Prata - Social',
    price: '400',
    description: 'A experiência prata do patas (Necessita a doação de 1Kg de alimento)***',
    prizesList: [
      'Entrada de 3 dias de evento',
      'Badge do evento',
      'Cordões de badge padrão e especial',
      'Garrafinha',
      'Button',
      'Caneta',
      'Bloquinho',
      'Chaveiro',
      'Brinde (Não Perturbe)',
      'Patabook',
      'Camiseta Mascote do tema',
      'Credenciamento preferencial',
      'Brinde especial'
    ],
    ticketType: 'social',
    ingresseLink: "https://www.ingresse.com/patas-2024#comprar",
  },

  {
    ticketId: 3,
    gridColor: 'gold',
    title: 'Pata Ouro - Social',
    price: '600',
    description: 'A experiência ouro do patas (Necessita a doação de 1kg de alimento)***',
    prizesList: [
      'Entrada de 3 dias de evento',
      'Badge do evento Gold',
      'Cartela de adesivos',
      'Cordões de badge padrão e especial',
      'Garrafinha',
      'Button',
      'Caneta',
      'Bloquinho',
      'Chaveiro',
      'Brinde (Não Perturbe)',
      'Patabook',
      'Camiseta Mascote no tema',
      'Credenciamento preferencial',
      'Acesso adiantado ao Mercadinho Furry',
      'Brinde especial',
      'Brinde especial Gold',
      'Assentos nas primeiras fileiras',
    ],
    ticketType: 'social',
    ingresseLink: "https://www.ingresse.com/patas-2024#comprar",
  },

  {
    ticketId: 4,
    gridColor: 'bronze',
    title: 'Pata Bronze - Meia Entrada',
    price: '200',
    description: 'Meia entrada da experiência bronze do patas*',
    prizesList: [
      'Entrada de 3 dias de evento',
      'Badge do evento',
      'Cordão de badge padrão',
      'Chaveiro',
      'Garrafinha',
      'Button',
      'Caneta',
      'Brinde (Não Perturbe)',
      'Patabook'
    ],
    ticketType: 'student',
    ingresseLink: "https://www.ingresse.com/patas-2024#comprar",
  },

  {
    ticketId: 5,
    gridColor: 'silver',
    title: 'Pata Prata - Meia Entrada',
    price: '400',
    description: 'Meia entrada da experiência prata do patas**',
    prizesList: [
      'Entrada de 3 dias de evento',
      'Badge do evento',
      'Cordões de badge padrão e especial',
      'Garrafinha',
      'Button',
      'Caneta',
      'Bloquinho',
      'Chaveiro',
      'Brinde (Não Perturbe)',
      'Patabook',
      'Camiseta Mascote do tema',
      'Credenciamento preferencial',
      'Brinde especial'
    ],
    ticketType: 'student',
    ingresseLink: "https://www.ingresse.com/patas-2024#comprar",
  },

  {
    ticketId: 6,
    gridColor: 'gold',
    title: 'Pata Ouro - Meia Entrada',
    price: '600',
    description: 'Meia entrada da experiência ouro do patas**',
    prizesList: [
      'Entrada de 3 dias de evento',
      'Badge do evento Gold',
      'Cartela de adesivos',
      'Cordões de badge padrão e especial',
      'Garrafinha',
      'Button',
      'Caneta',
      'Bloquinho',
      'Chaveiro',
      'Brinde (Não Perturbe)',
      'Patabook',
      'Camiseta Mascote no tema',
      'Credenciamento preferencial',
      'Acesso adiantado ao Mercadinho Furry',
      'Brinde especial',
      'Brinde especial Gold',
      'Assentos nas primeiras fileiras',
    ],
    ticketType: 'student',
    ingresseLink: "https://www.ingresse.com/patas-2024#comprar",
  },
  {
    ticketId: 7,
    gridColor: 'bronze',
    title: 'Pata Bronze - Inteira',
    price: '400',
    description: 'A experiência bronze do patas',
    prizesList: [
      'Entrada de 3 dias de evento',
      'Badge do evento',
      'Cordão de badge padrão',
      'Chaveiro',
      'Garrafinha',
      'Button',
      'Caneta',
      'Brinde (Não Perturbe)',
      'Patabook'
    ],
    ticketType: 'full',
    ingresseLink: "https://www.ingresse.com/patas-2024#comprar",
  },


  {
    ticketId: 8,
    gridColor: 'silver',
    title: 'Pata Prata - Inteira',
    price: '800',
    description: 'A experiência prata do patas',
    prizesList: [
      'Entrada de 3 dias de evento',
      'Badge do evento',
      'Cordões de badge padrão e especial',
      'Garrafinha',
      'Button',
      'Caneta',
      'Bloquinho',
      'Chaveiro',
      'Brinde (Não Perturbe)',
      'Patabook',
      'Camiseta Mascote do tema',
      'Credenciamento preferencial',
      'Brinde especial'
    ],
    ticketType: 'full',
    ingresseLink: "https://www.ingresse.com/patas-2024#comprar",
  },

  {
    ticketId: 9,
    gridColor: 'gold',
    title: 'Pata Ouro - Inteira',
    price: '1200',
    description: 'A experiência ouro do patas',
    prizesList: [
      'Entrada de 3 dias de evento',
      'Badge do evento Gold',
      'Cartela de adesivos',
      'Cordões de badge padrão e especial',
      'Garrafinha',
      'Button',
      'Caneta',
      'Bloquinho',
      'Chaveiro',
      'Brinde (Não Perturbe)',
      'Patabook',
      'Camiseta Mascote no tema',
      'Credenciamento preferencial',
      'Acesso adiantado ao Mercadinho Furry',
      'Brinde especial',
      'Brinde especial Gold',
      'Assentos nas primeiras fileiras',
    ],
    ticketType: 'full',
    ingresseLink: "https://www.ingresse.com/patas-2024#comprar",
  },

  ])
}
