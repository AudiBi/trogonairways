import React from "react";
import { useTranslation } from 'react-i18next';
import { Layout } from "../components/Layout";
import { HeroSections } from "../components/HeroSections";

export const TravelInfoPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <HeroSections
        title={t('travel_info_title')}
        subtitle={t('travel_info_subtitle')}
      />

      <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 text-gray-800">
        <section>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-suitcase-rolling text-blue-700" aria-hidden="true"></i>
            {t('baggage_policy_title')}
          </h2>
          <p>{t('baggage_policy_content')}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-clock text-blue-700" aria-hidden="true"></i>
            {t('checkin_guidelines_title')}
          </h2>
          <p>{t('checkin_guidelines_content')}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-ban text-blue-700" aria-hidden="true"></i>
            {t('travel_restrictions_title')}
          </h2>
          <p>{t('travel_restrictions_content')}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-id-card text-blue-700" aria-hidden="true"></i>
            {t('id_and_docs_title')}
          </h2>
          <p>{t('id_and_docs_content')}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-cloud-sun-rain text-blue-700" aria-hidden="true"></i>
            {t('weather_and_delays_title')}
          </h2>
          <p>{t('weather_and_delays_content')}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-blue-700" aria-hidden="true"></i>
            {t('security_procedures_title')}
          </h2>
          <p>{t('security_procedures_content')}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-child-reaching text-blue-700" aria-hidden="true"></i>
            {t('children_and_minors_title')}
          </h2>
          <p>{t('children_and_minors_content')}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <i className="fa-solid fa-wheelchair text-blue-700" aria-hidden="true"></i>
            {t('special_assistance_title')}
          </h2>
          <p>{t('special_assistance_content')}</p>
        </section>
      </div>
    </Layout>
  )
}

