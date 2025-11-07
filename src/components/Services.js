import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🚪',
      title: 'Portails & Portillons',
      description: 'Création de portails battants ou coulissants, motorisés ou manuels, adaptés à vos besoins et votre style.',
      features: ['Sur mesure', 'Motorisation', 'Tous styles'],
    },
    {
      icon: '🪜',
      title: 'Rampes d\'Escalier',
      description: 'Rampes intérieures et extérieures alliant sécurité, robustesse et design personnalisé.',
      features: ['Intérieur/Extérieur', 'Normes de sécurité', 'Design moderne'],
    },
    {
      icon: '🏠',
      title: 'Garde-corps',
      description: 'Protection pour balcons, terrasses et mezzanines, conformes aux normes de sécurité en vigueur.',
      features: ['Sécurisé', 'Durable', 'Esthétique'],
    },
    {
      icon: '🪑',
      title: 'Mobilier sur Mesure',
      description: 'Création de tables, chaises, bancs, étagères et autres meubles en fer forgé uniques.',
      features: ['Unique', 'Personnalisable', 'Artisanal'],
    },
    {
      icon: '🔧',
      title: 'Réparation & Restauration',
      description: 'Restauration de ferronneries anciennes et réparation de vos installations existantes.',
      features: ['Expertise', 'Conservation', 'Rénovation'],
    },
    {
      icon: '✨',
      title: 'Décorations',
      description: 'Éléments décoratifs sur mesure : grilles, claustras, pergolas et ornements architecturaux.',
      features: ['Créatif', 'Original', 'Élégant'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un savoir-faire artisanal pour tous vos projets de ferronnerie,
            de la conception à la réalisation.
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icône */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Titre */}
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg
                      className="w-4 h-4 text-accent mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Un projet en tête ? Parlons-en ensemble !
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Demander un Devis Gratuit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
