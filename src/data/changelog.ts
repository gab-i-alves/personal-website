// What actually changed on this site, newest first.
//
// This is also what drives "last touched" in the rail, so it has to stay
// honest: an entry here is a claim that something shipped on that date.
export type ChangeKind = 'add' | 'change' | 'remove' | 'fix'

export interface ChangeEntry {
  /** ISO date the change shipped */
  date: string
  items: { kind: ChangeKind; text: string }[]
}

export const changelog: ChangeEntry[] = [
  {
    date: '2026-07-24',
    items: [
      {
        kind: 'add',
        text: 'seção study: o MBA em Engenharia de Dados como ficha de biblioteca, uma marca por etapa concluída'
      },
      { kind: 'add', text: 'este changelog, que agora é o que move o "last touched" do rail' },
      { kind: 'add', text: 'contador d-day no rail, com a próxima entrega contada no navegador' },
      { kind: 'add', text: 'charm pendurado no canto do frame, balançando pela argola' },
      { kind: 'add', text: 'cursor novo, e um smiley preso no canto do retrato' },
      { kind: 'add', text: 'sparkles animados no banner do topo, em todas as páginas' },
      { kind: 'change', text: 'retrato novo, em halftone, sem a moldura ornamental' },
      {
        kind: 'change',
        text: 'dividers da home: só a faixa de sparkles, sem a banda escura atrás'
      },
      {
        kind: 'change',
        text: 'redesenho geral: frame old-web de três colunas, estante virtual e paleta paper'
      },
      { kind: 'remove', text: 'currículo autodirigido sai do site (segue no repo, fora do ar)' },
      { kind: 'remove', text: 'páginas por disciplina: a aba study virou o painel único' },
      { kind: 'remove', text: 'link "all of them, laid out" do rail de bookmarks' }
    ]
  },
  {
    date: '2026-06-24',
    items: [
      { kind: 'add', text: 'seção curriculum com o programa de formação autodirigida' },
      { kind: 'add', text: 'plasma ascii animado e borboleta na landing' },
      { kind: 'change', text: 'paleta roxa: fundo #373044, texto claro #D7D0DF' },
      { kind: 'change', text: 'starfield em camadas, com estrela cadente ocasional' },
      { kind: 'remove', text: 'página library, absorvida pela estante' }
    ]
  },
  {
    date: '2026-04-20',
    items: [
      { kind: 'add', text: 'daily log de 20.04 e a entrada de Out of the Tar Pit na estante' }
    ]
  }
]

/** Newest date in the log, as a Date. Used by the rail. */
export const lastChange = new Date(`${changelog[0].date}T12:00:00Z`)
