import { useState, useMemo, type ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

export type Category = 'all' | 'flight_booking' | 'helicopter' | 'general';

export type FAQ = {
  category: Exclude<Category, 'all'>;
  question: string;
  answer: string;
};

export function useFaqData() {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: t('faq_category_all') },
    { value: 'flight_booking', label: t('faq_category_flight') },
    { value: 'helicopter', label: t('faq_category_helicopter') },
    { value: 'general', label: t('faq_category_general') },
    ];

  const faqs: FAQ[] = [
    {
      category: 'general',
      question: t('faq_q_trogon'),
      answer: t('faq_a_trogon')
    },
    {
      category: 'general',
      question: t('faq_q_name'),
      answer: t('faq_a_name')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_book_flight'),
      answer: t('faq_a_book_flight')
    },
    {
      category: 'helicopter',
      question: t('faq_q_charter_helicopter'),
      answer: t('faq_a_charter_helicopter')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_payment'),
      answer: t('faq_a_payment')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_baggage'),
      answer: t('faq_a_baggage')
    },
    {
      category: 'helicopter',
      question: t('faq_q_baggage_helicopter'),
      answer: t('faq_a_baggage_helicopter')
    },
    {
      category: 'general',
      question: t('faq_q_contact_support'),
      answer: t('faq_a_contact_support')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_items'),
      answer: t('faq_a_items')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_refunds'),
      answer: t('faq_a_refunds')
    },
    {
      category: 'general',
      question: t('faq_q_routes'),
      answer: t('faq_a_routes')
    },
    {
      category: 'helicopter',
      question: t('faq_q_pets_helicopter'),
      answer: t('faq_a_pets_helicopter')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_early'),
      answer: t('faq_a_early')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_documents'),
      answer: t('faq_a_documents')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_change_flight'),
      answer: t('faq_a_change_flight')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_seat_selection'),
      answer: t('faq_a_seat_selection')
    },
    {
      category: 'general',
      question: t('faq_q_need_account'),
      answer: t('faq_a_need_account')
    },
    {
      category: 'general',
      question: t('faq_q_plan'),
      answer: t('faq_a_plan')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_refunds'),
      answer: t('faq_a_refunds')
    },
     {
      category: 'flight_booking',
      question: t('faq_q_accommodate'),
      answer: t('faq_a_accommodate')
    },
     {
      category: 'flight_booking',
      question: t('faq_q_travel'),
      answer: t('faq_a_travel')
    },
    {
      category: 'flight_booking',
      question: t('faq_q_safety'),
      answer: t('faq_a_safety')
    },
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory =
        activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory, faqs]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return {
    categories,
    filteredFaqs,
    searchTerm,
    handleSearch,
    activeCategory,
    setActiveCategory,
    openIndex,
    toggleOpen,
    t,
  };
}
