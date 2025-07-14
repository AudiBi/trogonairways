import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout';
import { HeroSections } from '../components/HeroSections';

export const CookiePolicy= () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <HeroSections
        title={t('cookie_header_title')}
        subtitle={t('cookie_header_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">

        <h1 className="text-3xl font-bold text-blue-900 mb-4">{t('cookie_title')}</h1>
        <p><strong>{t('cookie_effectiveDate')}</strong></p>
        <p>{t('cookie_intro')}</p>
        <hr className="my-6" />

        {Array.from({ length: 5 }, (_, idx) => {
          const n = idx + 1;
          const titleKey = `cookie.${n}.title`;
          const textKey = `cookie.${n}.text`;
          const listKey = `cookie.${n}.list`;

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
