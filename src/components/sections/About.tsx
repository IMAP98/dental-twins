import { Button } from "../ui/Button";

export function About() {
    return (
        <section id="nosotros" className="py-24 bg-surface">
            <div className="max-w-300 mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="rounded-[40px] overflow-hidden aspect-3/4 bg-surface-container max-w-md mx-auto lg:mx-0">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                                alt="Equipo de Dentistas - Dental Twins"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <span className="text-sm font-bold tracking-wider text-primary uppercase">
                            Sobre Nosotros
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Doble experiencia, el mismo compromiso
                        </h2>

                        <div className="flex flex-col gap-4 text-on-surface-variant text-lg">
                            <p>
                                Fundada por dos profesionales apasionados por la
                                salud bucal, nuestra clínica combina experiencia
                                técnica con un enfoque profundamente humano.
                            </p>
                            <p>
                                Creemos que ir al dentista no debe ser una
                                experiencia estresante. Diseñamos cada espacio y
                                cada protocolo pensando en tu tranquilidad,
                                ofreciendo un ambiente relajado y tratamientos
                                transparentes.
                            </p>
                        </div>

                        <div className="mt-4">
                            <Button variant="dark" className="cursor-pointer">
                                Conoce a nuestro equipo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
