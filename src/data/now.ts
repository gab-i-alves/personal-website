// "What i'm up to", shown in the right rail. There is no /now page any more:
// the list lives in the rail, on every page.
export interface NowEntry {
  label: string
  value: string
  glyph: string
}

export const currently: NowEntry[] = [
  { label: 'reading', value: 'about apache spark', glyph: '❒' },
  { label: 'working on', value: 'finishing post-grad thesis', glyph: '✎' },
  { label: 'studying', value: 'data engineering', glyph: '✳' }
]

// The "find me" rail, grouped into subsections. The tab strip already covers
// the pages of this site, so this list points outward.
//
// TODO(gabi): every entry without an `href` renders as a placeholder — greyed
// out, no link, so nothing dead-links while you decide. Fill in the handles you
// actually use and delete the rest; the group disappears on its own once it has
// no items left.
export interface FindLink {
  label: string
  /** Omit to render as a placeholder instead of a link. */
  href?: string
  note?: string
}

export interface FindGroup {
  label: string
  items: FindLink[]
}

export const findMe: FindGroup[] = [
  {
    label: 'code',
    items: [
      { label: 'github', href: 'https://github.com/gab-i-alves', note: 'profile' },
      { label: 'this site', href: 'https://github.com/gab-i-alves/personal-website', note: 'source' }
    ]
  },
  {
    label: 'talk to me',
    items: [
      { label: 'email', note: 'soon' },
      { label: 'instagram', note: 'soon' },
      { label: 'tumblr', note: 'soon' },
      {
        label: 'linkedin',
        href: 'https://www.linkedin.com/in/gabriele-alves-97889727b/',
        note: 'profile'
      }
    ]
  },
  {
    label: 'what i consume',
    items: [
      { label: 'letterboxd', note: 'soon' },
      { label: 'goodreads', note: 'soon' },
      { label: 'skoob', note: 'soon' },
      { label: 'spotify', note: 'soon' }
    ]
  },
  {
    label: 'this site',
    items: [
      { label: 'sitemap', href: '/sitemap-index.xml', note: 'every page' },
      { label: 'changelog', href: '/changelog', note: 'what shipped' }
    ]
  }
]
