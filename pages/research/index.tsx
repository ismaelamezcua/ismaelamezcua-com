import { NextPage } from 'next';

import AboretoFont from '../../components/fonts/Aboreto';

const ResearchHome: NextPage = () => {
  return (
    <>
      <AboretoFont />

      <section className="container mx-auto">
        {/* Blog title */}
        <p className="text-center py-20 text-2xl font-aboreto">
          <span className="font-black text-slate-800">Protocols</span>
          <span className="text-indigo-600">&amp;</span>
          <span className="font-black text-slate-800">Things</span>
        </p>

        {/* Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:m-10 bg-gray-100">
          <div className=" bg-red-100">
            <img className="w-full h-full" src="https://placeimg.com/720/480/tech" alt="Placeholder" />
          </div>
          <div className="flex items-center">
            <div className="flex flex-col px-8 lg:py-8">
              <p className="italic pb-2">In <span className="text-indigo-400">Art &amp; Design</span></p>
              <h1 className="font-aboreto text-3xl sm:text-4xl pb-2">Assure polite his really and others figure though</h1>
              <p className="text-lg">Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together happy feelings... </p>

              <div className="py-6">
                <hr className="text-slate-400 pb-4" />

                <a href="/research/articles/1">
                  <p className="bg-slate-200 text-slate-800 hover:bg-slate-800 hover:text-white hover:fill-white px-3 py-2 inline-flex transition-all duration-500">
                    <span>Continue reading</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                  </p>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ResearchHome;
