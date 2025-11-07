import React from 'react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/logo.jpg"
                  alt="Atelier de ferronnerie"
                  className="w-full h-auto"
                />
                {/* Badge overlay */}
                <div className="absolute top-6 left-6 bg-accent text-primary px-6 py-3 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm">Ans d'expérience</div>
                </div>
              </div>

              {/* Élément décoratif */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-lg -z-10"></div>
            </div>

            {/* Colonne droite - Contenu */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                L'Art de la Ferronnerie
                <span className="block text-accent mt-2">Tradition & Modernité</span>
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Passionné par le travail du fer depuis plus de 25 ans, je mets mon savoir-faire
                artisanal au service de vos projets. Chaque création est unique, pensée et
                réalisée avec soin pour s'intégrer parfaitement à votre environnement.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                De la conception à la pose, je vous accompagne à chaque étape de votre projet.
                Mon atelier, équipé d'outils traditionnels et modernes, me permet de réaliser
                des pièces alliant esthétique et robustesse.
              </p>

              {/* Points forts */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Qualité Artisanale</h3>
                    <p className="text-gray-600">
                      Chaque pièce est forgée à la main avec une attention minutieuse aux détails.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Délais Respectés</h3>
                    <p className="text-gray-600">
                      Engagement sur les délais annoncés pour la réalisation de vos projets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Satisfaction Garantie</h3>
                    <p className="text-gray-600">
                      Votre satisfaction est ma priorité, garantie et suivi après installation.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Parlons de Votre Projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
