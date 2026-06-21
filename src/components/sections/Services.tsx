import { SERVICES } from "../../lib/data";
import AddIcon from "@mui/icons-material/Add";

export function Services() {
    return (
        <section id="servicios" className="bg-[#0b3d24] py-24 text-white">
            <div className="max-w-300 mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Nuestros{" "}
                        <span className="text-brand-mint">Servicios</span>{" "}
                        Integrales
                    </h2>
                    <p className="text-surface-container opacity-80">
                        Ofrecemos una gama completa de soluciones dentales
                        modernas para satisfacer todas tus necesidades.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white text-on-surface rounded-2xl p-8 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="w-10 h-10 rounded-full border border-surface-dim flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <AddIcon sx={{ fontSize: 20 }} />
                                </div>
                                <span className="text-sm font-semibold text-on-surface-variant font-mono">
                                    {service.id}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-primary mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
