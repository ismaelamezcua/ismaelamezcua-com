import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container mx-auto px-4 py-10 mb-10"
      >
        <h1 className="text-2xl leading-relaxed lg:leading-relaxed text-stone-600 cursor-pointer lg:text-4xl">
          <span className="hover:text-red-600 delay-100 ease-linear transition-colors">
            The non-unique identifier is Ismael Amezcua.{` `}
          </span>
          {/* <a href="/iav-resume.pdf" download> */}
          <span className="hover:text-amber-600 delay-100 ease-linear transition-colors">
            I&apos;m a Software Engineer and Computer Scientist from M&eacute;xico.{` `}
          </span>
          {/* </a> */}
          <a>
            {/* <Link href="/work"> */}
            <span className="text-lime-600 hover:text-lime-700 delay-100 ease-linear transition-colors">
              I really enjoy building great and challenging web applications.{` `}
            </span>
            {/* </Link> */}
          </a>
          <a href="//www.ucol.mx">
            <span className="hover:text-emerald-600 delay-100 ease-linear transition-colors">
              I teach several computer science courses at Universidad de Colima.{` `}
            </span>
          </a>
          <a href="https://scholar.google.com/citations?user=lTngftoAAAAJ">
            {/* <Link href="/research"> */}
            <span className="hover:text-cyan-600 delay-100 ease-linear transition-colors">
              I do research in my spare time on Wireless Sensor Networks, Industrial Internet of Things, communication protocols, and Web technologies.{` `}
            </span>
            {/* </Link> */}
          </a>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute top-0 left-0 w-full text-center text-slate-600 p-6"
      >
        This site is under construction. Comeback sometime in the future for the full experience.
      </motion.div>
    </div>
  );
};

export default Home;
