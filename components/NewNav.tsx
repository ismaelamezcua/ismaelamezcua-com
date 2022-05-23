import type { FC, ReactElement } from 'react'
import Link from 'next/link'

const NewNav: FC = (): ReactElement => {
  interface MenuEntry {
    key: string,
    label: string,
    href: string,
    svg: string,
  }

  const menuEntries: MenuEntry[] = [
    { key: 'home', label: 'Home', href: '/', svg: 'M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z' },
    { key: 'about', label: 'About', href: '/about', svg: 'M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z' },
    { key: 'work', label: 'Work', href: '/work', svg: 'M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z' },
    { key: 'academic-profile', label: 'Academic Profile', href: '/academic-profile', svg: 'M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z' },
    { key: 'contact', label: 'Contact', href: '/contact', svg: 'M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z' }
  ]

  return (
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
  )
}

export default NewNav