import type { FC, ReactElement } from 'react'
import Link from 'next/link'

const RotatingMenu: FC = (): ReactElement => {
  interface MenuEntry {
    key: string,
    label: string,
    href: string
  }

  const menuEntries: MenuEntry[] = [
    { key: 'home', label: 'Home', href: '/' },
    { key: 'about', label: 'About', href: '/about' },
    { key: 'work', label: 'Work', href: '/work' },
    { key: 'experience', label: 'Experience', href: '/experience' },
    { key: 'academic-profile', label: 'Academic Profile', href: '/academic-profile' },
    { key: 'conact', label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {menuEntries.map(({ key, label, href }) => (
        <Link key={key} href={href}>
          <a className="text-4xl font-black -rotate-6 text-neutral-700 hover:rotate-0 ease-linear delay-75 transition-all hover:text-red-500 active:text-red-500">
            {label}
          </a>
        </Link>
      ))}
    </>

  )
}

export default RotatingMenu
