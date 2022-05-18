import type { FC, ReactElement } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import RotatingMenu from './RotatingMenu'

const Navbar: FC = (): ReactElement => {
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

  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="container mx-auto p-2 lg:p-0 border-b border-neutral-200 relative">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className="py-2 lg:py-6 text-lg">
              <Link href="/">
                <a>
                  <span className="text-neutral-700">ismaelamezcua</span>
                  <span className="text-red-500">.com</span>
                </a>
              </Link>
            </div>

            <div className="block lg:hidden cursor-pointer fill-neutral-700" onClick={() => setMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            </div>
          </div>

          <div className="hidden lg:block pb-4">
            <div className="flex space-x-6">
              {menuEntries.map(({ key, label, href }) => (
                <Link key={key} href={href}>
                  <a className="text-neutral-700 hover:text-red-500 active:text-red-500">
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen &&
        <div className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center space-y-2 bg-white lg:hidden" onClick={() => setMenuOpen(false)}>
          <RotatingMenu />
        </div>
      }
    </>
  )
}

export default Navbar
