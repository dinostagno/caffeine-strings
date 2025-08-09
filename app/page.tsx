import React from "react";

const Home = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 mt-5 text-gray-800 bg-[#e0f2f1] bg-opacity-40 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h1 className="text-3xl font-bold mb-6">
        Ajuste de Altura de Cuerdas (String Height)
      </h1>

      <section className="mb-10">
        <p className="mb-4">
          La altura de cuerdas, también conocida como <strong>string height</strong> o <strong>acción</strong>, es uno de los ajustes más importantes para lograr una guitarra cómoda y fácil de tocar. Consiste en la distancia entre la parte superior del traste y la parte inferior de la cuerda.
        </p>
        <p className="mb-4">
          Una acción muy alta puede hacer que la guitarra se sienta dura y fatigante, mientras que una acción muy baja puede provocar trasteos o buzz. Por eso es fundamental encontrar un equilibrio adecuado según tu estilo de tocar.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Alturas recomendadas</h2>
        <p className="mb-4">
          Las siguientes medidas son un punto de partida estándar para guitarras eléctricas. Se miden en el traste 12, desde la parte superior del traste hasta la parte inferior de la cuerda:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Cuerda más grave (6ª): <strong>4/64&quot;</strong> (~1.6 mm)
          </li>
          <li>
            Cuerda más aguda (1ª): <strong>3/64&quot;</strong> (~1.2 mm)
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          *Estas medidas pueden variar según el tipo de guitarra, calibre de cuerdas y técnica del guitarrista.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">¿Cómo medir correctamente?</h2>
        <p className="mb-4">
          Para medir la acción, lo ideal es usar una regla calibrada en fracciones de pulgada o en milímetros. Coloca la regla justo encima del traste 12, perpendicular al diapasón, y mide desde el traste hasta la cuerda.
        </p>
        <p>
          Existen también herramientas específicas como el medidor de acción de cuerdas de StewMac, que facilitan mucho esta tarea.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Ajuste del puente</h2>
        <p className="mb-4">
          El ajuste de la altura de cuerdas suele hacerse a través del puente. Guitarras con puentes tipo Fender (con saddles individuales) permiten ajustar cada cuerda por separado, mientras que puentes tipo Gibson Tune-O-Matic ajustan la altura de todo el puente.
        </p>
        <p>
          Haz ajustes pequeños, prueba y vuelve a medir. Siempre verifica que el mástil esté correctamente ajustado antes de modificar la acción.
        </p>
      </section>
    </main>
  );
};

export default Home;
