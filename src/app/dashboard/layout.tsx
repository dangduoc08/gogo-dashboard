import SidebarNavigation from '@/components/sidebar-navigation/SidebarNavigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarNavigation />
      {children}
    </div>
  )
}
