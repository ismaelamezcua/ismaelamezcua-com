import type { FC, ReactElement } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { menuEntries } from '../lib/menuEntries'

const NewNav: FC = (): ReactElement => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: 'easeIn', duration: 1 }}
    >
      <nav className="container mx-auto m-4 px-6 py-4 bg-neutral-100 rounded-lg">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a>
              <div className="p-2 text-lg">
                <span className="text-red-500">ismaelamezcua</span>
                <span className="text-neutral-700">.com</span>
              </div>
            </a>
          </Link>

          <div className="hidden lg:block">
            <ul className="flex flex-rows space-x-4 items-center">
              {menuEntries.map(({ key, label, href, svg }) => (
                <li key={key} className="">
                  <Link href={href}>
                    <a title={label}>
                      <div className="p-2 rounded-lg fill-neutral-700 hover:bg-neutral-200 hover:fill-red-500 ease-linear duration-100 transition-all">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                        >
                          <path d={svg}></path>
                        </svg>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block lg:hidden">
            <div className="p-2 fill-neutral-700 hover:bg-neutral-200 hover:fill-red-500 ease-linear duration-100 transition-all">
              Burger
            </div>
          </div>
        </div>
      </nav>
    </motion.div>
  )
}

export default NewNav
