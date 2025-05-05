
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Básico",
    price: "$5",
    description: "Ideal para pequeños call centers o startups",
    features: [
      "Un agente activo",
      "120 minutos de conversación personalizada",
      "Doble de memoria de conversaciones",
      "Soporte por email",
    ],
    cta: "Comenzar prueba gratuita",
    mostPopular: false,
  },
  {
    name: "Advanced",
    price: "$10",
    description: "Perfecto para call centers en crecimiento",
    features: [
      "Hasta 5 agentes activos",
      "4 escenarios predefinidos",
      "Análisis avanzado de conversaciones",
    ],
    cta: "Comenzar prueba gratuita",
    mostPopular: true,
  },
  {
    name: "Platinum",
    price: "15",
    description: "Para grandes operaciones con necesidades específicas",
    features: [
      "Hasta 10 agentes activos",
      "4 escenarios predefinidos",
      "Análisis avanzado de conversaciones",
      "Soporte 24/7",,
    ],
    cta: "Comenzar prueba gratuita",
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
            Elige el plan que mejor se adapte a tus necesidades, sin compromisos!
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
      </div>
    </div>
  );
};

export default Pricing;
