import ContactForm from '@/components/shared/ContactForm';
import Button from '@/components/shared/Button';

export default function Contact() {
  return (
    <section id="contact" className="bg-background py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">¿Tienes preguntas o necesitas ayuda?</h2>
        <p className="text-lg text-text mb-8">
          En FinPro estamos aquí para ayudarte. Completa el formulario a continuación o
          contáctanos directamente por teléfono o correo electrónico. Nuestro equipo está
          listo para brindarte la mejor atención y solucionar todas tus inquietudes.
        </p>

        <Button>
          ¡Déjanos un mensaje y nos pondremos en contacto!
        </Button>

        <div className="mt-10 max-w-lg mx-auto">
          <ContactForm />
        </div>

        <div className="mt-12 text-left bg-white text-slate-600 p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold">Información de contacto</h3>
          <p className="text-lg text-text mt-4">
            Dirección: Calle 123, Ciudad FinPro, CP 12345
          </p>
          <p className="text-lg text-text mt-2">
            Teléfono: +123 456 789
          </p>
          <p className="text-lg text-text mt-2">
            Correo: contacto@finpro.com
          </p>
          <p className="text-lg text-text mt-4">
            Nuestro equipo responde a todas las solicitudes en un plazo de 24 horas. ¡Déjanos tu mensaje y pronto nos pondremos en contacto contigo!
          </p>
        </div>
      </div>
    </section>
  );
}
