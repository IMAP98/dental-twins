import { NAV_LINKS } from "../../lib/data";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md border-b border-surface-container-highest">
            <div className="max-w-300 mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-brand-mint text-primary flex items-center justify-center font-bold text-xl">
                        
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 2C8.68629 2 6 4.68629 6 8C6 11.0052 8.21208 13.4925 11.1099 13.9317C11.5168 14.8693 12 16.5 12 22C12 16.5 12.4832 14.8693 12.8901 13.9317C15.7879 13.4925 18 11.0052 18 8C18 4.68629 15.3137 2 12 2Z"
                                fill="currentColor"
                            />
                            <path
                                d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
                                fill="var(--color-surface)"
                            />
                        </svg>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-on-surface">
                        Dental Twins
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-8 bg-surface-container-low px-6 py-2 rounded-full">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
