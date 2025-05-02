
import { Headphones, Users, Video, Mic, MessageSquare, CheckCircle, BookOpen } from "lucide-react";

const features = [
  {
    name: "Simulación de llamadas reales",
    description:
      "TalkAI recrea escenarios reales de atención al cliente para que los agentes practiquen en un entorno seguro.",
    icon: Headphones,
  },
  {
    name: "Entrenamiento personalizado",
    description:
      "Adaptamos los escenarios según el nivel y necesidades específicas de cada agente o equipo.",
    icon: Users,
  },
  {
    name: "Voz  interactiva",
    description:
      "Integración completa con audio para una experiencia de entrenamiento inmersiva y realista.",
    icon: Video,
  },
  {
    name: "Reconocimiento de voz avanzado",
    description:
      "Nuestro sistema entiende y responde a las entradas de voz con precisión, adaptándose al discurso del agente.",
    icon: Mic,
  },
  {
    name: "Análisis de conversaciones",
    description:
      "Evaluación detallada de cada interacción con métricas específicas para mejorar las habilidades de comunicación.",
    icon: MessageSquare,
  },
  {
    name: "Escenarios predefinidos",
    description:
      "Biblioteca de casos comunes en call centers para practicar situaciones frecuentes y complejas.",
    icon: BookOpen,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-16 bg-white overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Mejora las habilidades de tu equipo
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            TalkAI ofrece un entrenamiento completo para call centers con un agente virtual que utiliza inteligencia artificial avanzada.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Entrena a tus agentes como nunca antes
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Con TalkAI, cada conversación es una oportunidad de aprendizaje. Nuestro agente virtual proporciona retroalimentación inmediata y detallada.
            </p>

            <dl className="mt-10 space-y-10">
              {features.slice(0, 3).map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <div className="relative mx-auto rounded-lg shadow-lg lg:max-w-md overflow-hidden">
              <div className="relative block w-full bg-white p-6 sm:p-8">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-800">Progreso del entrenamiento</h4>
                    <span className="text-sm text-blue-600">85% completado</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-700">Manejo de objeciones</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-700">Escucha activa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-gray-700">Resolución de problemas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 border border-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Manejo de escalaciones</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Analiza y mejora constantemente
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Con análisis detallados, identifica áreas de mejora y adapta el entrenamiento a las necesidades específicas de tu equipo.
              </p>

              <dl className="mt-10 space-y-10">
                {features.slice(3, 6).map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <div className="relative mx-auto rounded-lg shadow-lg overflow-hidden">
                <div className="relative mx-auto rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                  <div className="relative block w-full bg-white p-6 sm:p-8">
                    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-4">Análisis de rendimiento</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Tono de voz</span>
                            <span className="font-medium">92%</span>
                          </div>
                          <div className="w-full bg-white rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Claridad en explicaciones</span>
                            <span className="font-medium">78%</span>
                          </div>
                          <div className="w-full bg-white rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Solución al primer contacto</span>
                            <span className="font-medium">85%</span>
                          </div>
                          <div className="w-full bg-white rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Empatía con el cliente</span>
                            <span className="font-medium">90%</span>
                          </div>
                          <div className="w-full bg-white rounded-full h-2">
                            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
