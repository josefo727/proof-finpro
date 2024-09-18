import { FaClock, FaUserTie, FaHandsHelping } from 'react-icons/fa';

const benefitsData: { id: number; title: string; description: string; icon: IconKey }[] = [
  {
    id: 1,
    title: "Rápido y Fácil",
    description: "Soluciones financieras adaptadas a tus necesidades con trámites sencillos.",
    icon: "FaClock"
  },
  {
    id: 2,
    title: "Asesoría Experta",
    description: "Recibe asesoría financiera de profesionales comprometidos con tu éxito.",
    icon: "FaUserTie"
  },
  {
    id: 3,
    title: "Flexibilidad Total",
    description: "Planes y soluciones personalizadas para cada etapa de tu vida financiera.",
    icon: "FaHandsHelping"
  }
];

type IconKey = 'FaClock' | 'FaUserTie' | 'FaHandsHelping';

const iconsMap: Record<IconKey, React.ComponentType> = {
  FaClock,
  FaUserTie,
  FaHandsHelping,
};

export default function BenefitsSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-12">
      {benefitsData.map((benefit) => {
        const IconComponent = iconsMap[benefit.icon];

        return (
          <div
            key={benefit.id}
            className="bg-gray-800 bg-opacity-60 hover:bg-opacity-80 rounded-lg p-6 text-left flex items-center space-x-4 transition-all duration-300 ease-in-out"
          >
            <span className="text-3xl text-secondary">
              <IconComponent />
            </span>
            <div>
              <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
