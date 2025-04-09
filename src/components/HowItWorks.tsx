
import { MessageSquare, Headphones, BarChart4, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    name: "Configuración del agente",
    description:
      "Personaliza el agente virtual según tus necesidades específicas con nuestros 3 modos: tipo de industria, escenarios comunes y objetivos de entrenamiento.",
    icon: MessageSquare,
  },
  {
    id: 2,
    name: "Sesiones de práctica",
    description:
      "Los agentes interactúan con el sistema mediante llamadas simuladas, enfrentando situaciones reales sin riesgo para el negocio.",
    icon: Headphones,
  },
  {
    id: 3,
    name: "Análisis y retroalimentación",
    description:
      "Recibe análisis detallados después de cada sesión, con métricas claras y recomendaciones específicas.",
    icon: BarChart4,
  },
  {
    id: 4,
    name: "Mejora continua",
    description:
      "El sistema adapta los escenarios según el progreso, aumentando gradualmente la dificultad y complejidad.",
    icon: CheckCircle,
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Proceso simplificado
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            ¿Cómo funciona TalkAI?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Implementa TalkAI en tu centro de llamadas en cuatro simples pasos y comienza a ver resultados rápidamente.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {steps.map((step) => (
              <div key={step.name} className="relative">
                <div className="relative">
                  <div className="absolute flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-lg font-bold">
                    {step.id}
                  </div>
                  <div className="pl-20">
                    <dt className="text-xl leading-6 font-medium text-gray-900">{step.name}</dt>
                    <dd className="mt-2 text-base text-gray-500">{step.description}</dd>
                    <div className="mt-5 flex items-center text-primary">
                      <step.icon className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">Ver más detalles</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-12 sm:px-12 sm:py-16 text-center">
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Tecnología de última generación
              </h3>
              <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                TalkAI utiliza los modelos más avanzados de IA para crear una experiencia de entrenamiento ultrarrealista.
              </p>
            </div>
            <div className="px-6 py-8 sm:py-12 sm:px-12 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="text-center">
                <div className="mt-2 flex flex-col items-center justify-center">
                  <h3 className="text-5xl font-extrabold text-primary">98%</h3>
                  <p className="mt-1 text-lg font-medium text-gray-500">
                    Precisión de reconocimiento de voz
                  </p>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 text-center">
                <div className="mt-2 flex flex-col items-center justify-center">
                  <h3 className="text-5xl font-extrabold text-primary">87%</h3>
                  <p className="mt-1 text-lg font-medium text-gray-500">
                    Mejora en habilidades comunicativas
                  </p>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 text-center">
                <div className="mt-2 flex flex-col items-center justify-center">
                  <h3 className="text-5xl font-extrabold text-primary">+60%</h3>
                  <p className="mt-1 text-lg font-medium text-gray-500">
                    Aumento en satisfacción del cliente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
