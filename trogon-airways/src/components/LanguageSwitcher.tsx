import { useTranslation } from 'react-i18next';
import Select, { type SingleValue, type OptionProps } from 'react-select';

type LanguageOption = {
  value: string;
  label: string;
  flag: string;
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const options: LanguageOption[] = [
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'fr', label: 'Français', flag: '🇫🇷' },
    { value: 'es', label: 'Español', flag: '🇪🇸' },
    { value: 'ht', label: 'Kreyòl Ayisyen', flag: '🇭🇹' },
  ];

  const handleChange = (
    selectedOption: SingleValue<LanguageOption> | null
  ) => {
    if (selectedOption) {
      i18n.changeLanguage(selectedOption.value);
    }
  };

  const customSingleValue = ({ data }: { data: LanguageOption }) => (
    <div className="flex items-center">
      <span className="mr-2">{data.flag}</span>
      {data.label}
    </div>
  );

  const customOption = (props: OptionProps<LanguageOption>) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div ref={innerRef} {...innerProps} className="flex items-center p-2 hover:bg-gray-200">
        <span className="mr-2">{data.flag}</span>
        {data.label}
      </div>
    );
  };

  return (
    <div style={{ width: 200 }}>
      <Select
        options={options}
        onChange={(newValue) => handleChange(newValue as SingleValue<LanguageOption>)}
        defaultValue={options.find(option => option.value === i18n.language)}
        components={{
          SingleValue: customSingleValue,
          Option: customOption,
        }}
        styles={{
          control: (base) => ({ ...base, borderRadius: '8px', padding: '4px' }),
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;
