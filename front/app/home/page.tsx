import BenefitsSection from '@/components/shared/BenefitsSection';

export default function Home() {
  return (
    <section className="relative bg-gray-900 text-white py-24 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url('/images/home-image.jpg')` }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative container mx-auto px-6 text-center z-10">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          <span className="text-secondary">Soluciones Financieras</span> que Impulsan tu Futuro
        </h1>

        <p className="text-lg lg:text-2xl mb-10 text-gray-200">
          Confía en FinPro para obtener los mejores productos financieros, desde asesoría personalizada hasta soluciones innovadoras.
        </p>

        <BenefitsSection />

        <a
          href="#services"
          className="inline-block bg-teal-900 bg-opacity-60 hover:bg-teal-950 hover:bg-opacity-80 text-white font-semibold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
        >
          Descubre Nuestros Servicios
        </a>
      </div>
    </section>
  );
}
