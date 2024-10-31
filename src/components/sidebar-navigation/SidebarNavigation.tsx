import { ISidebarNavigationProps } from './interfaces'

export default function SidebarNavigation(props: ISidebarNavigationProps) {
  const { children } = props

  return (
    <nav className="pr-2">
      <ul className="list-none flex flex-col space-y-2">{children}</ul>
    </nav>
  )
}
