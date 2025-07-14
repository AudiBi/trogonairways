import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout';
import { HeroSections } from '../components/HeroSections';

export const PrivacyPage= () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <HeroSections
        title={t('privacy_header_title')}
        subtitle={t('privacy_header_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">

        <h1 className="text-3xl font-bold text-blue-900 mb-4">{t('privacy_title')}</h1>
        <p><strong>{t('privacy_effectiveDate')}</strong></p>
        <p>{t('privacy_intro')}</p>
        <hr className="my-6" />

        {Array.from({ length: 10 }, (_, idx) => {
          const n = idx + 1;
          const titleKey = `privacy.${n}.title`;
          const textKey = `privacy.${n}.text`;
          const listKey = `privacy.${n}.list`;

          const hasText = t(textKey, { defaultValue: '', returnObjects: false });
          const hasList = t(listKey, { defaultValue: [], returnObjects: true }) as string[];

          return (
            <section key={n} className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t(titleKey)}</h2>
              {hasText && <p className="mb-2">{t(textKey)}</p>}
              {hasList.length > 0 && (
                <ul className="list-disc pl-6">
                  {hasList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </Layout>
  );
}
