import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Footer() {
  return (
    <footer className="bg-[#052b17] text-white border-t border-white/10 relative">
      <div className="max-w-300 mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-mint text-primary flex items-center justify-center font-bold">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.68629 2 6 4.68629 6 8C6 11.0052 8.21208 13.4925 11.1099 13.9317C11.5168 14.8693 12 16.5 12 22C12 16.5 12.4832 14.8693 12.8901 13.9317C15.7879 13.4925 18 11.0052 18 8C18 4.68629 15.3137 2 12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">Dental Twins</span>
            </a>
          </div>

          <div className="text-sm opacity-60">
            © {new Date().getFullYear()} Dental Twins Clinic.
          </div>

        </div>
      </div>
      
      <a
        href="#"
        className="fixed bottom-24 right-6 z-50 bg-linear-to-br from-purple-600 via-pink-500 to-orange-400 text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        aria-label="Síguenos en Instagram"
      >
        <InstagramIcon sx={{ fontSize: 24 }} />
      </a>

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Chat en WhatsApp"
      >
        <WhatsAppIcon sx={{ fontSize: 24 }} />
      </a>
    </footer>
  );
}
