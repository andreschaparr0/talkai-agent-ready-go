
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Básico",
    price: "$299",
    description: "Ideal para pequeños call centers o startups",
    features: [
      "Hasta 10 agentes activos",
      "20 escenarios predefinidos",
      "Análisis básico de conversaciones",
      "Soporte por email",
      "Actualizaciones mensuales",
    ],
    cta: "Comenzar prueba gratuita",
    mostPopular: false,
  },
  {
    name: "Profesional",
    price: "$599",
    description: "Perfecto para call centers en crecimiento",
    features: [
      "Hasta 50 agentes activos",
      "40 escenarios predefinidos",
      "Creación de escenarios personalizados",
      "Análisis avanzado de conversaciones",
      "Integraciones con CRM",
      "Soporte prioritario",
      "Actualizaciones semanales",
    ],
    cta: "Comenzar prueba gratuita",
    mostPopular: true,
  },
  {
    name: "Empresarial",
    price: "Personalizado",
    description: "Para grandes operaciones con necesidades específicas",
    features: [
      "Agentes ilimitados",
      "Escenarios ilimitados y personalizados",
      "Análisis en tiempo real",
      "Integraciones avanzadas",
      "API completa",
      "Soporte 24/7",
      "Gerente de cuenta dedicado",
    ],
    cta: "Contactar ventas",
    mostPopular: false,
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Planes flexibles para cada necesidad
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades, sin compromisos a largo plazo.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={`flex flex-col ${
                tier.mostPopular 
                  ? "border-primary shadow-lg scale-105 relative z-10" 
                  : "border-gray-200"
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-primary rounded-full text-white text-xs font-semibold">
                  Más popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.price !== "Personalizado" && (
                    <span className="ml-1 text-xl font-medium text-gray-500">/mes</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-gray-500">{tier.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={tier.mostPopular ? "default" : "outline"}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">¿Tienes más preguntas?</h3>
            <p className="mt-4 text-lg text-gray-500">
              Nuestro equipo está listo para ayudarte a encontrar la solución perfecta para tu negocio.
            </p>
            <div className="mt-6">
              <Button variant="outline" className="mx-auto">
                Contactar con ventas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
