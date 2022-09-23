import { NextPage } from 'next';

const ResearchHome: NextPage = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="font-black text-6xl text-center text-slate-800 pb-10">
        Protocols&amp;Things
      </h1>

      <div className="grid grid-cols-3 gap-10">
        <div className="">
          <img className="rounded-lg" src='https://placeimg.com/640/480/tech' />
        </div>
        <div className="col-span-2 flex items-center">
          <div>
            <p className="text-sm pb-6">
              <span className="font-bold">Business, Travel</span>
              <span> &mdash; July 2, 2022</span>
            </p>
            <h1 className="font-black text-4xl text-slate-800 pb-2">
              Your most unhappy customers are your greatest source of learning.
            </h1>
            <p className="text-lg">
              Far far away, behind the mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right on the coast of the Semantics, a large language ocean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchHome;
