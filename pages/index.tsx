import type { NextPage } from 'next'
import Link from 'next/link'
import { menuEntries } from '../lib/menuEntries'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="p-4 lg: grid grid-cols-2 pt-20">
        <div>
          <h1 className="text-6xl font-black text-stone-800">Welcome</h1>
          <p className="text-lg">The non-unique identifier is Ismael Amezcua Valdovinos. I'm a Software Engineer</p>
        </div>
        <div className="flex flex-col space-y-2 text-center px-6">
          {menuEntries.map(({ key, label, href }) => (
            <Link key={key} href={href}>
              <a className="text-4xl font-black text-stone-800 hover:text-stone-600 -rotate-6 hover:rotate-0 ease-linear duration-100 transition-transform">{label}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
