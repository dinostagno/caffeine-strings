const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Información */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Mi Sitio</h2>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-medium mb-3">Enlaces</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#" className="hover:text-white transition">Servicios</a></li>
            <li><a href="#" className="hover:text-white transition">Contacto</a></li>
            <li><a href="#" className="hover:text-white transition">Política de privacidad</a></li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div>
          <h3 className="text-lg font-medium mb-3">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.63 9.88v-7H8v-3h2.37V9.5a3.34 3.34 0 013.56-3.68 14.54 14.54 0 012.07.18v2.28h-1.17c-1.15 0-1.51.72-1.51 1.45v1.74H16l-.48 3h-2.12v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.29 4.29 0 001.88-2.37 8.55 8.55 0 01-2.7 1.03 4.26 4.26 0 00-7.27 3.89 12.08 12.08 0 01-8.77-4.45 4.25 4.25 0 001.32 5.68A4.21 4.21 0 012 9.71v.05a4.26 4.26 0 003.42 4.17 4.28 4.28 0 01-1.92.07 4.27 4.27 0 003.98 2.96A8.55 8.55 0 012 19.54a12.06 12.06 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0022.46 6z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.95.25 2.41.42a4.9 4.9 0 011.79 1.17 4.9 4.9 0 011.17 1.79c.17.46.364 1.24.42 2.41.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.25 1.95-.42 2.41a4.9 4.9 0 01-1.17 1.79 4.9 4.9 0 01-1.79 1.17c-.46.17-1.24.364-2.41.42-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.95-.25-2.41-.42a4.9 4.9 0 01-1.79-1.17 4.9 4.9 0 01-1.17-1.79c-.17-.46-.364-1.24-.42-2.41C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.25-1.95.42-2.41A4.9 4.9 0 014.86 2.95a4.9 4.9 0 011.79-1.17c.46-.17 1.24-.364 2.41-.42C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.51.012-4.74.07-1.02.05-1.57.22-1.94.37a3.1 3.1 0 00-1.13.74 3.1 3.1 0 00-.74 1.13c-.15.37-.32.92-.37 1.94-.058 1.23-.07 1.59-.07 4.74s.012 3.51.07 4.74c.05 1.02.22 1.57.37 1.94.18.46.43.87.74 1.13.26.3.67.56 1.13.74.37.15.92.32 1.94.37 1.23.058 1.59.07 4.74.07s3.51-.012 4.74-.07c1.02-.05 1.57-.22 1.94-.37.46-.18.87-.43 1.13-.74.3-.26.56-.67.74-1.13.15-.37.32-.92.37-1.94.058-1.23.07-1.59.07-4.74s-.012-3.51-.07-4.74c-.05-1.02-.22-1.57-.37-1.94a3.1 3.1 0 00-.74-1.13 3.1 3.1 0 00-1.13-.74c-.37-.15-.92-.32-1.94-.37-1.23-.058-1.59-.07-4.74-.07zm0 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.8a3.7 3.7 0 100 7.4 3.7 3.7 0 000-7.4zm5.75-1.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
