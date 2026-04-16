import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  site: {
    website: 'https://gabi-alves.com/',
    title: 'GABI ALVES',
    author: 'GABI ALVES',
    description: 'Minimal blog built for sharing stuff',
    language: 'en-US'
  },

  general: {
    fadeAnimation: true
  },

  date: {
    dateFormat: 'DD-MM-YYYY',
    dateSeparator: '.',
    dateOnRight: true
  },

  post: {
    readingTime: true,
    toc: false,
    imageViewer: true,
    copyCode: true
  }
}
