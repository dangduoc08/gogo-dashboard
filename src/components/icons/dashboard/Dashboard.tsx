import Image from 'next/image'

export default function Dashboard() {
  return (
    <Image
      width={0}
      height={0}
      className="size-8"
      src={'/icons/dashboard.svg'}
      alt="dashboard-icon"
    />
  )
}
