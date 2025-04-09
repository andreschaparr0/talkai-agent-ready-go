
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    content:
      "TalkAI ha revolucionado nuestro programa de capacitación. Los nuevos agentes ahora están listos para atender llamadas reales en la mitad del tiempo que antes.",
    author: {
      name: "María García",
      role: "Directora de Capacitación",
      company: "Atento",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
    },
  },
  {
    content:
      "Como estudiante, TalkAI me ha dado la confianza que necesitaba para iniciar mi carrera en call centers. Las simulaciones son tan reales que me siento completamente preparado.",
    author: {
      name: "Carlos Rodríguez",
      role: "Estudiante",
      company: "Universidad de los Andes",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    content:
      "Hemos reducido nuestra rotación de personal en un 35% desde que implementamos TalkAI. Los agentes se sienten mejor preparados y menos estresados durante sus primeras semanas.",
    author: {
      name: "Alejandra Martínez",
      role: "Gerente de RRHH",
      company: "Teleperformance",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo que nuestros clientes dicen
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Descubre cómo TalkAI está transformando el entrenamiento en call centers en toda LATAM.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="h-full flex flex-col">
                  <div className="flex-grow">
                    <svg
                      className="h-12 w-12 text-gray-200 mb-4"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 rounded-full">
                      <img
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </Avatar>
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">{testimonial.author.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.author.role}, {testimonial.author.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 border border-blue-100 rounded-xl bg-blue-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Resultados comprobados
              </h3>
              <div className="mt-8 flex flex-col md:flex-row justify-around items-center gap-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-primary">40%</p>
                  <p className="mt-1 text-base text-gray-500">Reducción en tiempo de entrenamiento</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-primary">65%</p>
                  <p className="mt-1 text-base text-gray-500">Mejora en NPS del cliente</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-primary">35%</p>
                  <p className="mt-1 text-base text-gray-500">Reducción en rotación de personal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
