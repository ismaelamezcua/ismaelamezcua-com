import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Menu from '../components/Menu';

const Home: NextPage = () => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-6"
      >
        <Link href="/">
          <a>
            <h2 className="font-semibold text-lg">Ismael Amezcua.</h2>
          </a>
        </Link>
      </motion.nav>

      <section className="flex flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="container mx-auto px-4 py-10 mb-10"
        >
          <h1 className="text-2xl leading-relaxed lg:leading-relaxed text-stone-600 cursor-pointer lg:text-4xl">
            <span className="hover:text-red-600 delay-100 ease-linear transition-colors">
              The non-unique identifier is Ismael Amezcua.{` `}
            </span>
            <span className="hover:text-amber-600 delay-100 ease-linear transition-colors">
              I&apos;m a Software Engineer and Computer Scientist from M&eacute;xico.{` `}
            </span>
            <span className="text-lime-600 hover:text-lime-700 delay-100 ease-linear transition-colors">
              I really enjoy building great and challenging web applications.{` `}
            </span>
            <span className="hover:text-emerald-600 delay-100 ease-linear transition-colors">
              I teach several computer science courses at Universidad de Colima.{` `}
            </span>
            <span className="hover:text-cyan-600 delay-100 ease-linear transition-colors">
              I do research in my spare time on Wireless Sensor Networks, Industrial Internet of Things, communication protocols, and Web technologies.{` `}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <Menu />
        </motion.div>
      </section>
    </>
  )
};

export default Home;
