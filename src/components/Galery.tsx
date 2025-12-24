import ImagenCloudinary from "../hooks/imageCloudinary";

function Galery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-black uppercase">
          Compromiso con la Higiene
        </h2>
        <div className="h-1 w-20 bg-red-600 mx-auto mt-4"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <ImagenCloudinary
          publicId="Taco_pastorMMM_a9vjpo"
          anchoDeseado={400}
          aspectRatio="1:1"
          altText="Personal uniformado"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        <ImagenCloudinary
          publicId="Taco_pastorMMM_a9vjpo"
          anchoDeseado={400}
          aspectRatio="1:1"
          altText="Local limpio"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        <ImagenCloudinary
          publicId="Taco_pastorMMM_a9vjpo"
          anchoDeseado={400}
          aspectRatio="1:1"
          altText="Cortes frescos"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        <ImagenCloudinary
          publicId="Taco_pastorMMM_a9vjpo"
          anchoDeseado={400}
          aspectRatio="1:1"
          altText="Platillo servido"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </section>
  );
}

export default Galery;
