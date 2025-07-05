import { Layout } from '../components/Layout';
import { HeroSections } from '../components/HeroSections';
import { useFaqData } from '../hooks/useFaqData'; 

export default function FaqPage() {
  const {
    categories,
    filteredFaqs,
    searchTerm,
    handleSearch,
    activeCategory,
    setActiveCategory,
    openIndex,
    toggleOpen,
    t
  } = useFaqData();

  return (
    <Layout>
      <HeroSections
        title={t('faq_header_title')}
        subtitle={t('faq_header_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">{t('faq_header_title')}</h1>
        <p className="text-gray-600 mb-6">{t('faq_browse_description')}</p>

        <input
          type="text"
          placeholder={t('faq_search_placeholder')}
          value={searchTerm}
          onChange={handleSearch}
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                activeCategory === category.value
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-white text-blue-900 border-blue-300 hover:bg-blue-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {filteredFaqs.length > 0 ? (
          <ul className="space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <li key={idx} className="border border-gray-200 rounded">
                <button
                  onClick={() => toggleOpen(idx)}
                  className="w-full text-left px-4 py-3 font-semibold text-blue-800 hover:bg-blue-50 flex justify-between items-center"
                >
                  {faq.question}
                  <span>{openIndex === idx ? '−' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div className="px-4 pb-4 text-gray-700">
                    {faq.answer}
                    <div className="text-sm text-gray-400 mt-2 italic">
                      {t('faq_label_category')} {t(`faq_category_${faq.category}`)}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">{t('faq_no_results')}</p>
        )}
      </div>
    </Layout>
  );
}
