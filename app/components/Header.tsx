"use client";

import { useState } from "react";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const closeModal = () => setIsLoginOpen(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex flex-row-reverse items-center justify-between px-4 py-4">
          {/* Logo a la derecha */}
          <div className="text-2xl font-bold text-gray-900 select-none flex items-center space-x-4">
            <span>Caffeine & Strings</span>

            {/* Icono login */}
            <button
              onClick={() => setIsLoginOpen(true)}
              aria-label="Abrir login"
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 focus:outline-none"
              title="Login"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A9 9 0 1118.878 6.196 9 9 0 015.12 17.804z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>

          {/* Enlaces alineados a la izquierda */}
          <ul className="flex space-x-8">
            {["Setup Basic Guitar", "Coffe beans", "Proyectos", "Contacto"].map(
              (item) => (
                <li key={item} className="group relative">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* Modal login */}
      {isLoginOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 relative"
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              aria-label="Cerrar modal"
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 focus:outline-none transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Título */}
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
              Bienvenido
            </h2>

            {/* Formulario */}
            <form className="space-y-6">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-400 transition"
                required
                autoFocus
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-400 transition"
                required
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 text-white font-semibold py-3 rounded-xl shadow-md"
              >
                Iniciar Sesión
              </button>
            </form>

            {/* Opcional: link para registro o recuperar contraseña */}
            <div className="mt-6 text-center text-gray-500 text-sm">
              ¿No tienes cuenta?{" "}
              <a href="#" className="text-indigo-600 hover:underline">
                Regístrate aquí
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
