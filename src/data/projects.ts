// Projects shown in the left rail.
//
// Pulled from github.com/gab-i-alves on 2026-07-24 (public, non-fork repos).
// The blurbs are shortened versions of each repo's own description — the rail is
// 190px wide, so the full text does not fit. Refresh with:
//   gh api "users/gab-i-alves/repos?per_page=100&sort=updated" \
//     --jq '.[] | select(.fork==false) | "\(.name)|\(.description)|\(.language)"'
//
// This site's own repo is deliberately absent: it already sits under "find me".
export interface Project {
  name: string
  blurb: string
  lang: string
  href: string
  /** Optional live deployment, when the repo has one. */
  live?: string
}

export const projects: Project[] = [
  {
    name: 'parkinson-check',
    blurb: 'computer vision to track parkinson symptoms — my undergrad thesis',
    lang: 'HTML',
    href: 'https://github.com/gab-i-alves/parkinson-check',
    live: 'https://www.gabi-alves.com/parkinson-check'
  },
  {
    name: 'bantads',
    blurb: 'internet banking on microservices: gateway, saga, cqrs',
    lang: 'Java',
    href: 'https://github.com/gab-i-alves/bantads'
  },
  {
    name: 'reverie',
    blurb: 'letters to your future self',
    lang: 'Astro',
    href: 'https://github.com/gab-i-alves/reverie'
  },
  {
    name: 'spectra-notes',
    blurb: 'lualatex template for textbook-style notes',
    lang: 'TeX',
    href: 'https://github.com/gab-i-alves/spectra-notes'
  }
]
