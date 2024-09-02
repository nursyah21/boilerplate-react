import type { ReactNode } from 'react'

type Props = Readonly<{
  children?: ReactNode
}>

export function DashboardLayout(prop: Props) {
  return (
    <>
      asd2
      <div className="p-2">{prop.children}</div>
    </>
  )
}
