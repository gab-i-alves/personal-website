export interface Bookmark {
  title: string
  url: string
}

export interface BookmarkCategory {
  name: string
  colorClass: string
  links: Bookmark[]
}

export const categories: BookmarkCategory[] = [
  {
    name: 'design',
    colorClass: 'cat-design',
    links: [
      { title: 'kurnowhere fonts', url: 'https://kurnowhere.com/fonts' },
      { title: 'gorillasun blog', url: 'https://www.gorillasun.de/blog' },
      { title: 'graffioh blog', url: 'https://graffioh.com/blog' }
    ]
  },
  {
    name: 'learning',
    colorClass: 'cat-learning',
    links: [
      { title: 'rabbit hole learning', url: 'https://seated.ro/posts/rabbit-hole-learning.html' },
      { title: 'reading research papers', url: 'https://masonjwang.com/writing/reading-research' },
      { title: 'attention is all you need', url: 'https://arxiv.org/abs/1706.03762' }
    ]
  },
  {
    name: 'tools',
    colorClass: 'cat-tools',
    links: [
      { title: 'awesome OSS', url: 'https://github.com/sereneblue/awesome-oss' },
      { title: 'lelouch.dev', url: 'https://lelouch.dev/blog' }
    ]
  },
  {
    name: 'reading/want to',
    colorClass: 'cat-reading',
    links: [
      { title: 'maintenance', url: 'https://press.stripe.com/maintenance-part-one' },
      { title: '996 is not your competition', url: 'https://writing.nikunjk.com/p/996-is-not-your-competition' }
    ]
  },
  {
    name: 'bioinformatics',
    colorClass: 'cat-bio',
    links: [
      { title: 'rosalind', url: 'https://rosalind.info/problems/locations/' },
      { title: 'bioinformatics algorithms', url: 'https://www.bioinformaticsalgorithms.org/' }
    ]
  },
  {
    name: 'engineering management',
    colorClass: 'cat-engineering',
    links: [
      { title: 'irrational exuberance', url: 'https://lethain.com/' },
      { title: 'the pragmatic engineer', url: 'https://blog.pragmaticengineer.com/' }
    ]
  }
]
