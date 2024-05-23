import Head from 'next/head'; // For metadata
import Landing from './pages/Landing';
import { Analytics } from "@vercel/analytics/react"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Theesafari',
  description:
      'Theesafari is a web app that displays hidden gems in Kenya across various categories. Explore and discover the beauty of Kenya.',
  keywords: "Kenya, safari, travel, explore, hidden gems, categories",
};

export default function Home() {
  return (
      <main>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <title>Theesafari</title>
          <meta name="description" content="Theesafari is a web app that displays hidden gems in Kenya across various categories. Explore and discover the beauty of Kenya." />
        </Head>

        <Landing />
        <Analytics />
      </main>
  );
}