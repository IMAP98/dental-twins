import { Button } from "../ui/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";

export function Location() {
    return (
        <section id="ubicacion" className="py-24 bg-surface-bright">
            <div className="max-w-300 mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <span className="text-sm font-bold tracking-wider text-primary uppercase">
                            Ubicación
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                            Visítanos en nuestra clínica
                        </h2>
                        <p className="text-on-surface-variant text-lg max-w-md">
                            Contamos con instalaciones modernas y equipadas con
                            la mejor tecnología para tu comodidad y bienestar.
                        </p>

                        <div className="flex items-start gap-4 mt-4">
                            <div className="mt-1">
                                <LocationOnIcon
                                    className="text-primary"
                                    sx={{ fontSize: 24 }}
                                />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary text-xl">
                                    Clínica Principal
                                </h4>
                                <p className="text-on-surface-variant mt-1">
                                    Av. de los Insurgentes Sur 1234, CDMX
                                </p>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button
                                variant="dark"
                                className="cursor-pointer"
                                icon
                            >
                                Cómo llegar
                            </Button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="bg-surface-container-high rounded-[32px] aspect-square flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#126b43_1px,transparent_1px)] [bg-size16px_16px]"></div>
                            <MapIcon
                                className="text-primary/40 relative z-10 group-hover:scale-110 transition-transform duration-500"
                                sx={{ fontSize: 64 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
