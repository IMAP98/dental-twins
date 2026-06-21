import PhoneIcon from "@mui/icons-material/Phone";

export function CallToAction() {
    return (
        <section className="bg-primary text-white py-24">
            <div className="max-w-300 mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    ¿Listo para mejorar tu sonrisa?
                </h2>

                <p className="text-brand-mint text-lg max-w-2xl mx-auto mb-12">
                    Agenda tu primera consulta hoy mismo y da el primer paso
                    hacia una salud bucal óptima.
                </p>

                <div className="inline-flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-colors cursor-pointer group">
                    <span className="text-sm font-semibold tracking-wider uppercase opacity-80 mb-2">
                        Llama para agendar
                    </span>
                    <div className="flex items-center gap-4">
                        <PhoneIcon
                            className="group-hover:rotate-12 transition-transform"
                            sx={{ fontSize: 32 }}
                        />
                        <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            (555) 123-4567
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
