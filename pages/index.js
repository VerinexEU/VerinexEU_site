import Head from 'next/head';
import Hero from '../components/Hero';
import Manifesto from '../components/Manifesto';
import Pillars from '../components/Pillars';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <div className="bg-white text-gray-800 scroll-smooth">
      <Head>
        {}
        <title>Verinex - A Social Network for Europe</title>
        <meta name="description" content="A new social network built on European values of privacy, transparency, and community." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Manifesto />
        <Pillars />
        <CallToAction />
      </main>
    </div>
  );
}