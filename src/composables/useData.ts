import { ICard } from "../types"

const aboutlives = [
  {
    icon: 'estrategia.png',
    title: 'Estratégias Valiosas',
    content: /* html */`Vou revelar dicas valiosas para <b><i>tomar decisões inteligentes</i></b> com seu dinheiro, 
    aproveitar as melhores oportunidades e minimizar riscos.`
  },
  {
    icon: 'cerebro.png',
    title: 'Mentalidade de Sucesso',
    content: /* html */`Acredito que o sucesso financeiro começa na mente. Vou te mostrar como desenvolver uma <b><i>mentalidade de sucesso</i></b>, superar crenças limitantes e alinhar seus pensamentos com a prosperidade.`
  },
  {
    icon: 'live.png',
    title: 'Entradas ao Vivo',
    content: /* html */`Vou compartilhar minhas estratégias, para você pode <b><i>lucrar comigo na mesma hora em Opções Binárias e Forex</i></b>, te ajudando a aproveitar as melhores oportunidades de lucro.`
  },
  {
    icon: 'comunidades.png',
    title: 'Comunidade Engajada',
    content: /* html */`Valorizo a <b><i>conexão com a comunidade</i></b> e estarei presente para responder suas perguntas, compartilhar experiências e criar um ambiente colaborativo de aprendizado.`
  }
] as ICard[];

const aboutCourse = [
  {
    icon: 'analise.png',
    title: /* html */`<span class="text-sm">Análises gráficas + Estratégias rentáveis</span>`,
  }, 
  {
    icon: 'debate.png',
    title: /* html */`<span class="text-sm"><b>Mentalidade</b> obrigatória para atrair resultados consistentes</span>`,
  }, 
  {
    icon: 'lucros.png',
    title: /* html */`<span class="text-sm">Forex lucrativo<br> e simples</span>`,
  }, 
  {
    icon: 'lucro.png',
    title: /* html */`<span class="text-sm"><b>Educação financeira</b> para <br> sair das dívidas</span>`,
  }
] as ICard[];

const aboutLessons = [
  { 
    number: 0,
    title: "Como configurar a plataforma"
  },
  { 
    number: 1,
    title: "Gerenciamento Financeiro"
  },
  { 
    number: 2,
    title: "Suporte e Resistência"
  },
  { 
    number: 3,
    title: "Pullback"
  },
  { 
    number: 4,
    title: "Indicadores"
  },
  { 
    number: 5,
    title: "Confluências"
  },
  { 
    number: 6,
    title: "Pivô"
  },
  { 
    number: 7,
    title: "Fibonacci"
  },
  { 
    number: 8,
    title: "Thevaztadora"
  },
  { 
    number: 9,
    title: "Figuras gráficas"
  },
  { 
    number: 10,
    title: "Projeção de canal"
  },
  { 
    number: 11,
    title: "Operacionais em M1"
  },
  { 
    number: 12,
    title: "Caixa"
  },
  { 
    number: 13,
    title: "Você está pronto para prosperar?"
  },
  { 
    number: 14,
    title: "Base e introdução no mercado de Forex"
  },
  { 
    number: 15,
    title: "Estratégias de Negociação no Mercado de Forex"
  },
  { 
    number: 16,
    title: "Estratégias de Negociação no Mercado de Forex"
  },
  { 
    number: 17,
    title: "Saúde Financeira - Como organizar suas finanças"
  }
];

const aboutAccess = [
  {
      number: 1,
      title: "Certificado de conclusão ao finalizar a MasterClass"
  },
  {
      number: 2,
      title: "Apostila para acompanhar todas as aulas"
  },
  {
      number: 3,
      title: "Sorteio de livros indicados"
  },
  {
      number: 4,
      title: "Acesso à planilhas para te ajudar a organizar sua vida financeira"
  },
  {
      number: 5,
      title: "PDFs de apoio ao seu estudo"
  },
  {
      number: 6,
      title: "Suporte no WhatsApp para tirar todas as suas dúvidas"
  },
  {
      number: 7,
      title: "Acesso à plataforma exclusiva durante 1 ano"
  }
];

export const useData = () => {
  return {
    aboutlives, aboutCourse, aboutLessons, aboutAccess
  }
}
