import React, { useState, useRef } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedImage, setSelectedImage] = useState(null);
  const carouselRef = useRef(null);

  const categories = [
    { id: 'tous', name: 'Tous' },
    { id: 'portails', name: 'Portails' },
    { id: 'rampes', name: 'Rampes' },
    { id: 'garde-corps', name: 'Garde-corps' },
    { id: 'mobilier', name: 'Mobilier' },
  ];

  // Images de démonstration (utilisant placeholder.com pour l'exemple)
  const projects = [
    {
      id: 1,
      title: 'Portail en Fer Forgé Classique',
      category: 'portails',
      image: '/portail.jpg',
      description: 'Portail double battant avec ornements floraux',
    },
    {
      id: 2,
      title: 'Rampe d\'Escalier Moderne',
      category: 'rampes',
      image: '/rampe.jpg',
      description: 'Design contemporain avec lignes épurées',
    },
    {
      id: 3,
      title: 'Pergola',
      category: 'pergola',
      image: '/pergola.jpg',
      description: 'Designe contemporain',
    },
    {
      id: 4,
      title: 'Table Basse en Fer',
      category: 'mobilier',
      image: '/table.jpg',
      description: 'Mobilier sur mesure pour intérieur',
    },
    {
      id: 5,
      title: 'Portail Contemporain',
      category: 'portails',
      image: 'https://via.placeholder.com/600x400/2c3e50/ecf0f1?text=Portail+2',
      description: 'Style moderne avec motifs géométriques',
    },
    {
      id: 6,
      title: 'Rampe Extérieure',
      category: 'rampes',
      image: 'https://via.placeholder.com/600x400/34495e/ecf0f1?text=Rampe+2',
      description: 'Rampe résistante aux intempéries',
    },
    {
      id: 7,
      title: 'Garde-corps Terrasse',
      category: 'garde-corps',
      image: 'https://via.placeholder.com/600x400/2c3e50/ecf0f1?text=Garde-corps+2',
      description: 'Protection élégante pour terrasse',
    },
    {
      id: 8,
      title: 'Banc de Jardin',
      category: 'mobilier',
      image: 'https://via.placeholder.com/600x400/34495e/ecf0f1?text=Banc+1',
      description: 'Mobilier d\'extérieur durable',
    },
  ];

  const filteredProjects = selectedCategory === 'tous'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="realisations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Réalisations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos créations en fer forgé,
            chaque projet est unique et réalisé avec passion.
          </p>
        </div>

        {/* Filtres catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent text-primary shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Carousel avec flèches */}
        <div className="relative">
          {/* Flèche gauche */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-yellow-500 text-primary p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Précédent"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 px-12 py-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group relative flex-shrink-0 w-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => setSelectedImage(project)}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flèche droite */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-yellow-500 text-primary p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Suivant"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
              >
                &times;
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />
              <div className="text-white mt-4 text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
