const testimonialsData = [
  {
    id: 1,
    name: "Carlos Hernández",
    feedback:
      "Gracias a FinPro, pude obtener el préstamo que necesitaba para comenzar mi negocio. El proceso fue rápido y sencillo, y me brindaron un excelente servicio.",
    role: "Emprendedor"
  },
  {
    id: 2,
    name: "María González",
    feedback:
      "FinPro me ayudó a obtener una tarjeta de crédito con beneficios que nunca había visto antes. Recomiendo completamente sus servicios.",
    role: "Profesora"
  },
  {
    id: 3,
    name: "Juan Pérez",
    feedback:
      "El equipo de FinPro me brindó una atención increíble. Con su ayuda, pude adquirir mi primera vivienda sin problemas.",
    role: "Ingeniero"
  },
  {
    id: 4,
    name: "Ana Martínez",
    feedback:
      "Gracias a los servicios de FinPro, logré organizar mis finanzas personales y aumentar mis ahorros. Estoy muy agradecida con ellos.",
    role: "Diseñadora"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-slate-500 mb-12">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-10 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <blockquote className="relative text-gray-700 italic mb-4">
                <span className="absolute text-3xl text-secondary" style={{ top: "-10px", left: "10px" }}>
                </span>
                <p className="mt-6 mb-6">{testimonial.feedback}</p>
                <span className="absolute text-3xl text-secondary" style={{ bottom: "-10px", right: "10px" }}>
                </span>
              </blockquote>
              <h3 className="text-lg font-semibold text-slate-400">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
