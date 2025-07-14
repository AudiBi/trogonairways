import { useTranslation } from 'react-i18next';
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { Link } from 'react-router-dom';


interface FlightOffer {
  destination: string;
  price: string;
  image: string;
}

interface Hotel {
  name: string;
  location: string;
  image: string;
}

export const HomePage = () => {
  const { t } = useTranslation();
    const flightOffers: FlightOffer[] = [
        { destination: "Cap Haitien", price: "$199", image: "/assets/offers/flight.jpg" },
        { destination: "Cayes", price: "$189", image: "/assets/offers/flight-1.jpg" },
        { destination: "Port-Au-Prince", price: "$189", image: "/assets/offers/flight-2.jpg" },
    ];

    const hotels: Hotel[] = [
        { name: "Auberge Villa Cana", location: "Cap Haitien", image: "/assets/hotels/hotel-ch.jpg" },
        { name: "Villa Mimosa", location: "Cayes", image: "/assets/hotels/hotel-cayes.jpg" },
        { name: "El Rancho", location: "Port-Au-Prince", image: "/assets/hotels/hotel-ptp.jpg" },
    ];

    const helicopterCharters = [
      {
        image: '/assets/offers/heli.jpg',
        destination: 'Cap Haitien',
        price: '$210',
      },
      {
        image: '/assets/offers/heli.jpg',
        destination: 'Cayes',
        price: '$230',
      },
      {
        image: '/assets/offers/heli.jpg',
        destination: 'Port-Au-Prince',
        price: '$200',
      },
    ];

    return (
        <div>
        <HeroSection />
        
      {/* FEATURED FLIGHT OFFERS */}
      <section className="bg-white py-12 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          {t('featured_flight_offers')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {flightOffers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={offer.image}
                  alt={offer.destination}
                  className="w-full h-48 object-cover"
                />
                {/* Bouton en superposition sans fond sombre */}
                <div className="absolute bottom-2 right-2">
                  <a href='https://booking.trogonairways.com' className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition">
                    {t('book_now')}
                  </a>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold text-blue-900">
                  {offer.destination}
                </h3>
                <p className="text-gray-700">{t('starting_at')} {offer.price}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {t('ready_adventure')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED HELICOPTER CHARTERS */}
      <section className="bg-white py-12 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          {t('featured_helicopter_charters')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {helicopterCharters.map((charter, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={charter.image}
                  alt={charter.destination}
                  className="w-full h-48 object-cover"
                />
                {/* Overlay Button */}
                <div className="absolute bottom-2 right-2">
                  <a href='https://booking.trogonairways.com' className="bg-blue-600 text-white px-3 py-1 text-sm rounded hover:bg-blue-700 transition">
                    {t('charter_now')}
                  </a>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold text-blue-900">
                  {charter.destination}
                </h3>
                <p className="text-gray-700">{t('from')} {charter.price}</p>
                <p className="mt-2 text-sm text-gray-600">
                  {t('experience_helicopter')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* RECOMMENDED HOTELS */}
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">{t('recommended_hotels')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900">{hotel.name}</h3>
                <p className="text-gray-700">{hotel.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
     
        {/* NEED HELP SECTION */}
        <section className="bg-white py-16 px-4 md:px-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t('need_help_booking')}</h2>
            <p className="text-gray-600 mb-8">
              {t('support_message')}
            </p>

            <form
              action="/faq"
              method="GET"
              className="flex justify-center"
              role="search"
              aria-label="Search FAQs"
            >
              <div className="flex w-full sm:w-2/3 max-w-xl">
                <input
                  type="text"
                  name="q"
                  placeholder={t('search_faqs')}
                  aria-label="Search FAQs"
                  className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link to="/faq"
                  type="submit"
                  aria-label="Submit search"
                  className="flex items-center justify-center px-5 py-3 bg-blue-900 text-white rounded-r-md hover:bg-blue-800 transition"
                >
                  <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                </Link>
              </div>
            </form>

            <div className="mt-8 text-sm text-gray-500">
              {t('still_need_help')}{' '}
              <Link to="/support" className="text-blue-600 hover:underline">
                {t('contact_support_team')}
              </Link>
            </div>
          </div>
        </section>


      <Footer />
        </div>
    );
}