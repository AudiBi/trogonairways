import React from "react";
import { useTranslation } from 'react-i18next';
import { HeroSections } from "../components/HeroSections";
import { Layout } from "../components/Layout";

export const SupportPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <HeroSections
        title={t('need_help_title')}
        subtitle={t('need_help_content')}
      />
        <div className="bg-white py-8 px-4 md:px-8">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">{t('customer_support_title')}</h1>
      <p className="text-gray-700 mb-2">
        {t('customer_support_content')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* FAQ */}
        <div className="bg-gray-100 p-5 rounded shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-800 mb-1">{t('faq_title')}</h2>
          <p className="text-gray-600 text-sm mb-1">{t('faq_description')}</p>
          <a href="/faq" className="text-blue-600 hover:underline text-sm">{t('view_faq_button')}</a>
        </div>

        {/* Live Chat */}
        <div className="bg-gray-100 p-5 rounded shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-800 mb-1">{t('live_chat_title')}</h2>
          <p className="text-gray-600 text-sm mb-1">{t('live_chat_description')}</p>
          <a href="https://wa.me/message/HMUCTQF2BGWSA1" target="blank" className="text-blue-600 hover:underline text-sm">{t('start_chat_button')}</a>
        </div>

        {/* Email & Call */}
        <div className="bg-gray-100 p-5 rounded shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-blue-800 mb-1">{t('contact_methods_title')}</h2>
          <p className="text-gray-600 text-sm mb-1">
            {t('contact_email_label')} <a href="mailto:contact@trogonairways.com" className="underline">contact@trogonairways.com</a><br />
            {t('contact_phone_label')} <a href="tel:+50933410404" className="underline">+509 3341 0404</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Form Section */}
  <div className="bg-gray-50 py-8 px-4 md:px-8 border-t border-gray-200">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-3 text-center">{t('contact_us_directly_title')}</h2>
      <p className="text-gray-600 mb-6 text-center text-sm">
        {t('contact_us_directly_text')}
      </p>

      <form className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder={t('contact_form_name')}
            className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder={t('contact_form_email')}
            className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <input
          type="text"
          placeholder={t('contact_form_subject')}
          className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          rows={5}
          placeholder={t('contact_form_message')}
          className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        ></textarea>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-900 text-white font-medium text-sm rounded hover:bg-blue-800 transition"
          >
            {t('contact_form_submit')}
          </button>
        </div>
      </form>
    </div>
  </div>
    </Layout>

  )
}
