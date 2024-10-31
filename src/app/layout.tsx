import RootNavigation from './RootNavigation'
import RootContainer from './RootContainer'
import './global.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={'dark'}>
      <body className="flex dark:bg-neutral-950 p-2">
        <header className="w-1/5">
          <RootNavigation />
        </header>
        <main className="w-4/5">
          <RootContainer>{children}</RootContainer>
        </main>
      </body>
    </html>
  )
}
