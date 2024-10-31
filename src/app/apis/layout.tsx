import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rest APIs',
}

export default function ApisLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
