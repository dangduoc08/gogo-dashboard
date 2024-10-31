'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SidebarNavigation from '@/components/sidebar-navigation/SidebarNavigation'
import SidebarNavigationItem from '@/components/sidebar-navigation/SidebarNavigationItem'
import ApiIcon from '@/components/icons/api/Api'
import DashboardIcon from '@/components/icons/dashboard/Dashboard'

const NAVS = [
  {
    href: '/dashboard',
    icon: <DashboardIcon />,
    title: 'Dashboard',
  },
  {
    href: '/apis',
    icon: <ApiIcon />,
    title: 'Rest APIs',
  },
]

export default function RootNavigation() {
  const pathname = usePathname()

  const renderSidebarNavigationItem = (item) => (
    <SidebarNavigationItem key={item.href} active={pathname === item.href}>
      <Link className="flex justify-left items-center w-full h-full space-x-5 p-3" href={item.href}>
        {item.icon}
        <span>{item.title}</span>
      </Link>
    </SidebarNavigationItem>
  )

  return <SidebarNavigation>{NAVS.map(renderSidebarNavigationItem)}</SidebarNavigation>
}
