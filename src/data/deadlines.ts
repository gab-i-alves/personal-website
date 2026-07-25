// Hard dates I owe someone. One source, used by the rail counter and by the
// study page, so the two can never disagree about what's next.
export interface Deadline {
  label: string
  /** ISO date it's due, end of day */
  iso: string
  note?: string
  href?: string
}

export const deadlines: Deadline[] = [
  {
    label: 'projeto de spark',
    iso: '2026-08-24',
    note: 'disciplina 3',
    href: '/curriculum/d3-spark'
  }
]

/** The soonest deadline that hasn't passed, or the last one if they all have. */
export function nextDeadline(now = new Date()): Deadline | undefined {
  const upcoming = deadlines
    .filter((d) => new Date(`${d.iso}T23:59:59`) >= now)
    .sort((a, b) => a.iso.localeCompare(b.iso))
  return upcoming[0] ?? deadlines[deadlines.length - 1]
}
