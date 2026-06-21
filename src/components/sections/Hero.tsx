import StarIcon from "@mui/icons-material/Star";

export function Hero() {
    return (
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 max-w-300 mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-8">
                    <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-extrabold text-primary tracking-tight">
                        Tu camino hacia <br />
                        una sonrisa <br />
                        perfecta comienza <br />
                        aquí.
                    </h1>

                    <p className="text-lg text-on-surface-variant max-w-md">
                        En Dental Twins, estamos dedicados a ayudarte a lograr y
                        mantener una sonrisa hermosa y saludable que te dé la
                        confianza para brillar.
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                        <span className="text-sm font-semibold text-on-surface-variant">
                            Confiado por 5K+ Pacientes
                        </span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon
                                    key={star}
                                    sx={{ fontSize: 16, color: "#fbbc04" }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="rounded-[40px] overflow-hidden aspect-4/3 bg-surface-container relative">
                        <img
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
                            alt="Close up of a perfect healthy smile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-70">
                        <h3 className="font-bold text-primary mb-2 text-sm">
                            Tu comodidad, nuestra prioridad.
                        </h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                            Experiencia dental suave y personalizada diseñada
                            para tu tranquilidad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
