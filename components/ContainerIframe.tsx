import Head from 'next/head';
import Footer from './Footer.bs';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../components/Header'), {
  ssr: false
});

const Container = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <section className="flex flex-col flex-nowrap pt-24 w-full min-h-screen items-center justify-between bg-white dark:bg-zinc-900">
        <Header />
        <main className="grid grid-cols-2 gap-y-4 gap-x-4">
          {children}
        </main>
        <Footer />
      </section>
    </>
  );
};

export default Container;