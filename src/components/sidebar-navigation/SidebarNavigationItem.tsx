import { ISidebarNavigationItemProps } from './interfaces'

export default function SidebarNavigationItem(props: ISidebarNavigationItemProps) {
  const { children, active } = props

  const itemTextColor = active ? 'dark:text-white' : 'dark:text-gray-300'
  const itemBgColor = active ? 'dark:bg-white/10' : ''
  const itemFilter = active ? 'filter-none' : 'grayscale'

  return (
    <li
      className={`cursor-pointer subpixel-antialiased text-sm rounded-md transition duration-150 ease-in-out dark:hover:bg-white/10 dark:hover:text-white hover:filter-none flex align-left ${itemTextColor} ${itemBgColor} ${itemFilter}`}
    >
      {children}
    </li>
  )
}
