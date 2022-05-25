import type { FC, ReactElement } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import RotatingMenu from './RotatingMenu'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: FC = (): ReactElement => {
  interface MenuEntry {
    key: string,
    label: string,
    href: string
  }

  const menuEntries: MenuEntry[] = [
    { key: 'about', label: 'About', href: '/about' },
    { key: 'work', label: 'Work', href: '/work' },
    { key: 'academic-profile', label: 'Academic Profile', href: '/academic-profile' },
    { key: 'contact', label: 'Contact', href: '/contact' },
  ]

  const [isMenuOpen, setMenuOpen] = useState(false)

  function renderMobileMenu(): ReactElement {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col space-y-2">
            {menuEntries.map(({ key, label, href }) => (
              <Link key={key} href={href}>
                <a>{label}</a>
              </Link>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <>
      <nav className="container mx-auto py-6 text-lg px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl">
            <Link href="/">
              <a>Ismael Amezcua.</a>
            </Link>
          </div>

          <div className="block lg:hidden cursor-pointer" onClick={() => setMenuOpen(!isMenuOpen)}>
            <svg className="fill-stone-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>


          <div className="hidden lg:block space-x-4 text-stone-700">
            {menuEntries.map(({ key, label, href }) => (
              <Link key={key} href={href}>
                <a className={`px-4 py-2  ${key === 'contact' ? 'bg-stone-800 hover:bg-stone-700 text-white rounded-md' : 'hover:text-stone-600 hover:underline'}`}>{label}</a>
              </Link>
            ))}
          </div>
        </div>

        {isMenuOpen && renderMobileMenu()}
      </nav>
    </>
  )
}

export default Navbar
