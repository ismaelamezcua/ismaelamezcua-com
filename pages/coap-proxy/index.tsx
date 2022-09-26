import { NextPage } from "next";
import Head from "next/head";

const ProxyHome: NextPage = () => (
  <>
    <Head>
      <title>CoAP Proxy implementation for Contiki-NG and 6LoWPAN</title>
    </Head>

    <section className="pt-20 bg-cyan-800">
      <div className="absolute w-full top-0 left-0 bg-transparent">
        <nav className="container mx-auto py-6">
          <div className="flex flex-row justify-between text-white text-xl">
            <p className="font-semibold">CoAP Proxy for Contiki-NG</p>
            <div className="flex flex-row space-x-12">
              <p>About</p>
              <p>Features</p>
              <p>Results</p>
            </div>
          </div>
        </nav>
      </div>

      <div className="container mx-auto">
        Hero
      </div>
    </section>
  </>
);

export default ProxyHome;
