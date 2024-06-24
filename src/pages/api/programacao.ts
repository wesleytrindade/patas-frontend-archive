import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json([
    {
      dia: 'Sexta-feira - 17 de Maio',
      colunas: ['Horário', 'Salão Panorâmico', 'Balcão do Corredor', 'Sala Bandeirantes', 'Piscina'],
      disclaimer: '*Crendenciamento antecipado à partir as 15:00h',
      programacao: [`19:00,Cerimônia de Abertura,Credenciamento / Balcão do Staff,,Piscina`,
        `20:00,Cerimônia de Abertura,Credenciamento / Balcão do Staff,,Piscina`,
        `21:00,Pausa/Montagem da Baloon Party,Credenciamento / Balcão do Staff,,Piscina`,
        `22:00,Balloon Party com DJ,Credenciamento / Balcão do Staff,,Piscina`,
        `23:00,Balloon Party com DJ,Credenciamento / Balcão do Staff,,Piscina`,
        `00:00,Balloon Party com DJ,Credenciamento / Balcão do Staff,,Piscina`,
        `01:00,Fim das Atividades do Dia,,,`],
    },

    {
      dia: 'Sábado - 18 de Maio',
      colunas: ['Horário', 'Salão Panorâmico', 'Balcão do Corredor', 'Sala Bandeirantes', 'Piscina', 'Sala de Jogos', 'Sala 01'],
      disclaimer: '',
      programacao: [`10:00,Atividade de Integração,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Entrevista com Pulim e Vega`,
      `11:00,Atividade de Integração,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Palestra:Origem da furry fandom com Pulim e Vega`,
      `12:00,Pausa para o Almoço,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Pausa para o Almoço`,
      `13:00,Abertura do Tente não rir ,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Palestra:Como vender arte furry online com The Havana Wolf`,
      `14:00,Tente não rir ,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Palestra: Livro Guardiao imortal com Bardo`,
      `15:00,Raul Schlosser (dublador),Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Palestra: Criação de personagem e roteiro com Johnny Yume`,
      `16:00,Rogério (Medalha Zero),Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Palestra: Mundo dos super heróis e suas curiosidades com Edelcio Ipanema`,
      `17:00,Fursuit Parade,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Patakê/ TTG (Card Games)`,
      `18:00,Fursuit Parade,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Patakê/ TTG (Card Games)`,
      `19:00,Pausa para a Janta,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Patakê/ TTG (Card Games)`,
      `20:00,Palestra: Bate papo com o tatuador Jhonny,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Patakê/ TTG (Card Games)`,
      `21:00,Palestra: Bate papo com o tatuador Jhonny,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Patakê/ TTG (Card Games)`,
      `22:00,Fim das Atividades normais,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Sala de Jogos,Patakê/ TTG (Card Games)`,
      `23:00,After Patas (+18) - Mini-shopping,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,,`,
      `00:00,After Patas (+18) - Palestra Cass Moon,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,,`,
      `01:00,After Patas (+18) - Palestra Red Panda,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,,`,
      `02:00,Fim das Atividades do dia,,,,,`,]
    },
    {
    dia: 'Domingo - 19 de Maio',
    colunas: ['Horário', 'Salão Panorâmico', 'Balcão do Corredor', 'Sala Bandeirantes','Piscina', 'Sala Ipanema','Sala de Jogos','Sala 01'],
    disclaimer: '*A grade da programação está sujeita a alterações',
    programacao: [
      `10:00,Gincana,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Mercadinho Furry,Jogos,Just Dance / TTG (Card Games)`,
      `11:00,Gincana,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Mercadinho Furry,Jogos,Just Dance / TTG (Card Games)`,
      `12:00,Pausa para o Almoço,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Mercadinho Furry,Jogos,Just Dance / TTG (Card Games)`,
      `13:00,Cantadas e Patadas,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Mercadinho Furry,Jogos,Just Dance / TTG (Card Games)`,
      `14:00,Leilão,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Mercadinho Furry,Jogos,Just Dance / TTG (Card Games)`,
      `15:00,Anísio Mello Júnior,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Mercadinho Furry,Jogos,Just Dance / TTG (Card Games)`,
      `16:00,Frank Henrique (cantor da abertura de inuyasha),Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Mercadinho Furry,Jogos,Just Dance / TTG (Card Games)`,
      `17:00,The Klau ,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,,Jogos,Just Dance / TTG (Card Games)`,
      `18:00,Cerimônia de Encerramento,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,,Jogos,Just Dance / TTG (Card Games)`,
      `19:00,Cerimônia de Encerramento,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Torneio de Magic e Pokémon TCG,Jogos,Just Dance / TTG (Card Games)`,
      `20:00,Pausa / Montagem da Balada,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Torneio de Magic e Pokémon TCG,Jogos,Just Dance / TTG (Card Games)`,
      `21:00,Balada com DJ,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Torneio de Magic e Pokémon TCG,Jogos,Just Dance / TTG (Card Games)`,
      `22:00,Balada com DJ,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Torneio de Magic e Pokémon TCG,Jogos,Just Dance / TTG (Card Games)`,
      `23:00,Balada com DJ,Credenciamento / Balcão do Staff,Fursuit Lounge,Piscina,Torneio de Magic e Pokémon TCG,Jogos,Just Dance / TTG (Card Games)`,
      `00:00,Fim das Atividades,,,,,,`],
    }
    
  ])
}