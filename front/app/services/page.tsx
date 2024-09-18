const servicesData = [
  {
    id: 1,
    title: "Préstamos Personales",
    description: "Obten el financiamiento que necesitas con tasas accesibles y plazos flexibles. Ideal para proyectos personales.",
    icon: "💸"
  },
  {
    id: 2,
    title: "Tarjetas de Crédito",
    description: "Accede a nuestras tarjetas de crédito con beneficios exclusivos y facilidades de pago adaptadas a tus necesidades.",
    icon: "💳"
  },
  {
    id: 3,
    title: "Cuentas de Ahorro",
    description: "Aumenta tus ahorros con nuestras cuentas que ofrecen excelentes tasas de interés y facilidad de acceso.",
    icon: "🏦"
  },
  {
    id: 4,
    title: "Créditos Hipotecarios",
    description: "Adquiere tu vivienda soñada con nuestros planes hipotecarios con intereses competitivos y plazos a tu medida.",
    icon: "🏠"
  },
  {
    id: 5,
    title: "Créditos Vehiculares",
    description: "Compra tu auto con nuestro crédito vehicular, que ofrece tasas especiales y procesos rápidos.",
    icon: "🚗"
  },
  {
    id: 6,
    title: "Inversiones a Plazo",
    description: "Invierte a mediano y largo plazo con tasas de retorno garantizadas y seguridad financiera.",
    icon: "📈"
  }
];

export default function Services() {
  return (
    <section className="services bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-slate-500 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="text-6xl">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-400 mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
