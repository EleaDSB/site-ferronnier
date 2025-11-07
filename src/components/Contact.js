import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    projet: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous intégreriez l'envoi réel du formulaire (API, EmailJS, etc.)
    console.log('Formulaire soumis:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        projet: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-nous
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Un projet en tête ? N'hésitez pas à nous contacter pour un devis gratuit
              et sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne gauche - Informations */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-accent">
                Nos Coordonnées
              </h3>

              <div className="space-y-6">
                {/* Téléphone */}
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Téléphone</h4>
                    <p className="text-gray-300">06 12 34 56 78</p>
                    <p className="text-sm text-gray-400 mt-1">Lun - Ven : 8h - 18h</p>
                  </div>
                </div>

                {/* Email */}
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-300">contact@ferart.fr</p>
                  </div>
                </div>

                {/* Adresse */}
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Atelier</h4>
                    <p className="text-gray-300">123 Rue de l'Artisan</p>
                    <p className="text-gray-300">75000 Paris</p>
                  </div>
                </div>
              </div>

              {/* Zone de service */}
              <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-lg">
                <h4 className="font-bold mb-3 text-accent">Zone d'Intervention</h4>
                <p className="text-gray-300">
                  Nous intervenons en Occitanie et régions limitrophes.
                  N'hésitez pas à nous contacter pour vérifier votre zone.
                </p>
              </div>
            </div>

            {/* Colonne droite - Formulaire */}
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Demande de Devis
              </h3>

              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-6 rounded-lg text-center">
                  <svg
                    className="w-12 h-12 mx-auto mb-3"
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
                  <p className="font-bold">Message envoyé avec succès !</p>
                  <p className="text-sm mt-2">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Type de projet *
                    </label>
                    <select
                      name="projet"
                      value={formData.projet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="portail">Portail</option>
                      <option value="rampe">Rampe d'escalier</option>
                      <option value="garde-corps">Garde-corps</option>
                      <option value="mobilier">Mobilier</option>
                      <option value="reparation">Réparation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900"
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Envoyer la Demande
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
