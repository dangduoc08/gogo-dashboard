export default function RootContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-zinc-900 dark:ring-1 dark:ring-white/10 rounded-lg">{children}</div>
  )
}
