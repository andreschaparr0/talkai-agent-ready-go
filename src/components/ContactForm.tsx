
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    interest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {  
      setIsSubmitting(false);
      toast({
        title: "Formulario enviado",
        description: "Nos pondremos en contacto contigo pronto. ¡Gracias por tu interés!",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        message: "",
        interest: "",
      });
    }, 1500);
  };

  return (
    <div id="contact" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Contacta con nosotros</h2>
              <p className="mt-4 text-lg text-gray-500">
                ¿Listo para transformar el entrenamiento de tu call center? Completa el formulario 
                y un especialista se pondrá en contacto contigo para una demostración personalizada.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+57 319 2987042</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>TalkAI.Startup@gmail.com</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div>
              <div className="bg-white py-8 px-6 rounded-lg shadow-lg sm:px-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nombre completo
                    </label>
                    <div className="mt-1">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                      Interés principal
                    </label>
                    <Select value={formData.interest} onValueChange={handleSelectChange}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Seleccionar interés" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="training">Capacitación para nuevos empleados</SelectItem>
                        <SelectItem value="improvement">Mejora de habilidades</SelectItem>
                        <SelectItem value="enterprise">Solución empresarial</SelectItem>
                        <SelectItem value="education">Educación/Academia</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <div className="mt-1">
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
