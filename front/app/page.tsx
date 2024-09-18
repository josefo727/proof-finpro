import Head from 'next/head';
import Home from '@/home/page';
import Services from '@/services/page';
import Contact from '@/contact/page';
import Testimonials from '@/testimonials/page';

export default function site() {
  return (
    <>
      <Head>
        <title>
          Soluciones Financieras Personalizadas | FinPro
        </title>
        <meta
          name="description"
          content="FinPro ofrece soluciones financieras rápidas, expertas y flexibles. Descubre nuestros productos financieros personalizados."
          key="desc"
        />

        {/* Canonical tag */}
        <link rel="canonical" href="https://finpro.jose-gutierrez.com" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Soluciones Financieras Personalizadas | FinPro" />
        <meta property="og:description" content="FinPro ofrece soluciones financieras rápidas, expertas y flexibles. Descubre nuestros productos financieros personalizados." />
        <meta property="og:image" content="https://finpro.jose-gutierrez.com/images/home-image.jpg" />
        <meta property="og:url" content="https://finpro.jose-gutierrez.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FinPro" />
        <meta name="twitter:title" content="Soluciones Financieras Personalizadas | FinPro" />
        <meta name="twitter:description" content="FinPro ofrece soluciones financieras rápidas, expertas y flexibles. Descubre nuestros productos financieros personalizados." />
        <meta name="twitter:image" content="https://finpro.jose-gutierrez.com/images/home-image.jpg" />
      </Head>
      <section id="site" className="hero bg-background p-4 md:p-8">
        <section id="home">
          <Home />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </section>
    </>
  );
}
