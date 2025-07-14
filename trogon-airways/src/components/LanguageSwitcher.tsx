import { useTranslation } from 'react-i18next';
import Select, { type SingleValue, type OptionProps } from 'react-select';
import { useEffect, useState } from 'react';

type LanguageOption = {
  value: string;
  label: string;
  flag: string;
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState<string>(i18n.language);

  const options: LanguageOption[] = [
    { value: 'en', label: 'English', flag: '/assets/flag/us.png' },
    { value: 'fr', label: 'Français', flag: '/assets/flag/fr.png' },
    { value: 'es', label: 'Español', flag: '/assets/flag/es.png' },
    { value: 'ht', label: 'Kreyòl Ayisyen', flag: '/assets/flag/ht.png' },
  ];

  const currentLang = selected.split('-')[0];
  const selectedOption = options.find((opt) => opt.value === currentLang) || options[0];

  useEffect(() => {
    const updateLang = (lng: string) => setSelected(lng);
    i18n.on('languageChanged', updateLang);
    return () => i18n.off('languageChanged', updateLang);
  }, [i18n]);

  const handleChange = (option: SingleValue<LanguageOption> | null) => {
    if (option) {
      i18n.changeLanguage(option.value);
      setSelected(option.value);
    }
  };

  const customSingleValue = ({ data }: { data: LanguageOption }) => (
    <div className="flex items-center">
      <img src={data.flag} alt={data.label} className="w-5 h-5 mr-2" />
      {data.label}
    </div>
  );

  const customOption = (props: OptionProps<LanguageOption>) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="flex items-center p-2 text-blue-900 hover:bg-blue-900 hover:text-white"
        onMouseDown={innerProps.onMouseDown}
      >
        <img src={data.flag} alt={data.label} className="w-5 h-5 mr-2" />
        {data.label}
      </div>
    );
  };

  return (
    <div style={{ width: 150 }}>
      <Select
        options={options}
        value={selectedOption}
        onChange={(value) => handleChange(value as SingleValue<LanguageOption>)}
        components={{
          SingleValue: customSingleValue,
          Option: customOption,
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (base) => ({
            ...base,
            border: 'none',
            boxShadow: 'none',
            padding: '4px',
            minHeight: 'unset',
            backgroundColor: 'transparent',
          }),
          valueContainer: (base) => ({
            ...base,
            padding: 0,
          }),
          singleValue: (base) => ({
            ...base,
            color: 'inherit',
          }),
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;
