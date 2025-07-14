import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../components/Layout';
import { HeroSections } from '../components/HeroSections';

export const TermsPage= () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <HeroSections
        title={t('terms_header_title')}
        subtitle={t('terms_header_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">

        <h1 className="text-3xl font-bold text-blue-900 mb-4">{t('title')}</h1>
        <p><strong>{t('effectiveDate')}</strong></p>
        <p>{t('company')}</p>
        <p>{t('address')}</p>
        <p>{t('email')}</p>
        <hr className="my-6" />

        {Array.from({ length: 12 }, (_, idx) => {
          const n = idx + 1;
          const titleKey = `${n}.title`;
          return (
            <section key={n} className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t(titleKey)}</h2>
              {/* Sections avec sous-contenus spécifiques */}
               {n === 1 && (
                <p>{t('1.text')}</p>
              )}
              {n === 2 && (
                <>
                  <p>{t('2.1')}</p>
                  <p>{t('2.2')}</p>
                  <p>{t('2.3')}</p>
                  <ul className="list-disc pl-6 mb-2">
                    {(t('2.3.list', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                  <p>{t('2.4')}</p>
                </>
              )}
              {n === 3 && (
                <>
                  <p>{t('3.1')}</p>
                  <p>{t('3.2')}</p>
                  <p>{t('3.3')}</p>
                  <p>{t('3.4')}</p>
                </>
              )}
              {n === 4 && (
                <>
                  <p>{t('4.1')}</p>
                  <p>{t('4.2')}</p>
                  <p>{t('4.3')}</p>
                </>
              )}
              {n === 5 && (
                <>
                  <p>{t('5.1')}</p>
                  <p>{t('5.2')}</p>
                  <p>{t('5.3')}</p>
                </>
              )}
              {n === 6 && (
                <>
                  <h3 className="font-semibold">{t('6.1.title')}</h3>
                  <p>{t('6.1.text')}</p>
                  <h3 className="font-semibold mt-2">{t('6.2.title')}</h3>
                  <p>{t('6.2.text')}</p>
                  <h3 className="font-semibold mt-2">{t('6.3.title')}</h3>
                  <ul className="list-disc pl-6">
                    {(t('6.3.list', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {n === 7 && (
                <>
                  <p>{t('7.1')}</p>
                  <p>{t('7.2')}</p>
                  <p>{t('7.3')}</p>
                </>
              )}
              {n === 8 && (
                <>
                  <p>{t('8.1')}</p>
                  <p>{t('8.2')}</p>
                  <p>{t('8.3')}</p>
                </>
              )}
              {n === 9 && <p>{t('9.text')}</p>}
              {n === 10 && <p>{t('10.text')}</p>}
              {n === 11 && <p>{t('11.text')}</p>}
              {n === 12 && <p>{t('12.text')}</p>}
            </section>
          );
        })}
      </div>
    </Layout>
  );
}
