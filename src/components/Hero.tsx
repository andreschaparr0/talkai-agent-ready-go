
import { Button } from "@/components/ui/button";
import { Headphones, Video, MessageSquare } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative hero-gradient overflow-hidden pt-24 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                Entrenamiento para Call Centers
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="gradient-text">Entrena a tu equipo</span>
                <span className="block text-gray-900"> con inteligencia artificial</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              TalkAI es un agente virtual que simula llamadas reales para entrenar 
              a jóvenes y nuevos empleados en call centers, mejorando sus habilidades 
              de comunicación y atención al cliente.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8">
                  Prueba Gratis
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Demostración
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                No se requiere tarjeta de crédito para la prueba gratuita.
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center p-8 sm:p-12">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white max-w-xs mx-auto shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                        <Headphones size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">Agente de Entrenamiento</p>
                        <p className="text-xs text-blue-100">En línea</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/20 rounded-lg p-3 float-animation">
                        <p className="text-sm">
                          "Bienvenido al servicio de atención al cliente. ¿En qué puedo ayudarte hoy?"
                        </p>
                      </div>
                      <div className="bg-blue-700/50 rounded-lg p-3 ml-6">
                        <p className="text-sm">
                          "Hola, tengo un problema con mi pedido reciente..."
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <div className="flex space-x-2">
                        <MessageSquare size={18} />
                        <Video size={18} />
                      </div>
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
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

export default Hero;
