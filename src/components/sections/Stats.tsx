
export function Stats() {
    return (
        <div className="max-w-300 mx-auto px-4 md:px-6 pb-16">
            <div className="bg-[#0f4b2f] rounded-[32px] p-8 md:p-12 relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="bg-brand-mint text-primary rounded-2xl p-8 max-w-sm shrink-0 shadow-lg relative -top-12 md:top-0 md:-ml-4">
                    <h2 className="text-4xl font-extrabold mb-2">#1</h2>
                    <h3 className="text-xl font-bold mb-3">
                        Elección del Paciente
                    </h3>
                    <p className="text-sm font-medium opacity-90">
                        Estamos dedicados a tu comodidad y salud, haciéndonos tu
                        mejor opción.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-16 w-full text-white">
                    <div>
                        <h3 className="text-4xl md:text-5xl font-extrabold mb-2">
                            5K+
                        </h3>
                        <p className="text-sm text-surface opacity-80 max-w-37.5">
                            Pacientes felices logrando sonrisas más sanas.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-4xl md:text-5xl font-extrabold mb-2">
                            {new Date().getFullYear() - 2021}+
                        </h3>
                        <p className="text-sm text-surface opacity-80 max-w-37.5">
                            Años de experiencia y tratamientos exitosos.
                        </p>
                    </div>
                    <div className="col-span-2 md:col-span-1 hidden md:block">
                        <h3 className="text-4xl md:text-5xl font-extrabold mb-2">
                            2
                        </h3>
                        <p className="text-sm text-surface opacity-80 max-w-37.5">
                            Especialistas expertos a tu disposición.
                        </p>
                    </div>
                </div>

                <div className="md:hidden text-white text-center mt-4">
                    <h3 className="text-4xl font-extrabold mb-2">2</h3>
                    <p className="text-sm text-surface opacity-80">
                        Especialistas expertos a tu disposición.
                    </p>
                </div>
            </div>
        </div>
    );
}
