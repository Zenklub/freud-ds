import { Story, applicationConfig } from '@storybook/angular';
import { FreudSelectComponent } from '@freud-ds/web-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const items = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM', disabled: true },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
];

const countries = [
  {
    code: 'AS',
    name: 'American Samoa',
  },
  {
    code: 'AD',
    name: 'Andorra',
  },
  {
    code: 'AO',
    name: 'Angola',
  },
  {
    code: 'AI',
    name: 'Anguilla',
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
  },
  {
    code: 'AR',
    name: 'Argentina',
  },
  {
    code: 'AW',
    name: 'Aruba',
  },
  {
    code: 'AU',
    name: 'Australia',
  },
  {
    code: 'AZ',
    name: 'Azərbaycan',
  },
  {
    code: 'BS',
    name: 'Bahamas',
  },
  {
    code: 'BB',
    name: 'Barbados',
  },
  {
    code: 'BE',
    name: 'Belgien',
  },
  {
    code: 'BZ',
    name: 'Belize',
  },
  {
    code: 'BM',
    name: 'Bermuda',
  },
  {
    code: 'BA',
    name: 'Bosna i Hercegovina',
  },
  {
    code: 'BW',
    name: 'Botswana',
  },

  {
    code: 'BR',
    name: 'Brasil',
  },
  {
    code: 'IO',
    name: 'British Indian Ocean Territory',
  },
  {
    code: 'VG',
    name: 'British Virgin Islands',
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
  },
  {
    code: 'BI',
    name: 'Burundi',
  },
  {
    code: 'BJ',
    name: 'Bénin',
  },
  {
    code: 'CV',
    name: 'Cabo Verde',
  },
  {
    code: 'CM',
    name: 'Cameroon',
  },
  {
    code: 'CA',
    name: 'Canada',
  },
  {
    code: 'BQ',
    name: 'Caribisch Nederland',
  },
  {
    code: 'KY',
    name: 'Cayman Islands',
  },
  {
    code: 'CL',
    name: 'Chile',
  },
  {
    code: 'CX',
    name: 'Christmas Island',
  },
  {
    code: 'CC',
    name: 'Cocos (Keeling) Islands',
  },
  {
    code: 'CO',
    name: 'Colombia',
  },
  {
    code: 'CK',
    name: 'Cook Islands',
  },
  {
    code: 'CR',
    name: 'Costa Rica',
  },
  {
    code: 'CU',
    name: 'Cuba',
  },

  {
    code: 'CI',
    name: `Côte d'Ivoire`,
  },
  {
    code: 'DK',
    name: 'Danmark',
  },
  {
    code: 'DE',
    name: 'Deutschland',
  },
  {
    code: 'DM',
    name: 'Dominica',
  },
  {
    code: 'EC',
    name: 'Ecuador',
  },
  {
    code: 'EE',
    name: 'Eesti',
  },
  {
    code: 'SV',
    name: 'El Salvador',
  },
  {
    code: 'ES',
    name: 'España',
  },
  {
    code: 'SZ',
    name: 'Eswatini',
  },
  {
    code: 'FK',
    name: 'Falkland Islands',
  },
  {
    code: 'FJ',
    name: 'Fiji',
  },
  {
    code: 'FR',
    name: 'France',
  },
  {
    code: 'FO',
    name: 'Færøerne',
  },
  {
    code: 'GA',
    name: 'Gabon',
  },
  {
    code: 'GM',
    name: 'Gambia',
  },
  {
    code: 'GH',
    name: 'Ghana',
  },
  {
    code: 'GI',
    name: 'Gibraltar',
  },
  {
    code: 'GD',
    name: 'Grenada',
  },
  {
    code: 'GP',
    name: 'Guadeloupe',
  },
  {
    code: 'GT',
    name: 'Guatemala',
  },
  {
    code: 'GG',
    name: 'Guernsey',
  },
  {
    code: 'GW',
    name: 'Guiné-Bissau',
  },
  {
    code: 'GN',
    name: 'Guinée',
  },
  {
    code: 'GQ',
    name: 'Guinée équatoriale',
  },
  {
    code: 'GY',
    name: 'Guyana',
  },
  {
    code: 'GF',
    name: 'Guyane française',
  },
  {
    code: 'GU',
    name: 'Guåhån',
  },
  {
    code: 'HT',
    name: 'Haïti',
  },
  {
    code: 'HN',
    name: 'Honduras',
  },
  {
    code: 'HK',
    name: 'Hong Kong',
  },
  {
    code: 'HR',
    name: 'Hrvatska',
  },
  {
    code: 'IN',
    name: 'India',
  },
  {
    code: 'ID',
    name: 'Indonesia',
  },
  {
    code: 'IE',
    name: 'Ireland',
  },
  {
    code: 'IM',
    name: 'Isle of Man',
  },
  {
    code: 'IT',
    name: 'Italia',
  },
  {
    code: 'JM',
    name: 'Jamaica',
  },
  {
    code: 'JE',
    name: 'Jersey',
  },
  {
    code: 'GL',
    name: 'Kalaallit Nunaat',
  },
  {
    code: 'KE',
    name: 'Kenya',
  },
  {
    code: 'KI',
    name: 'Kiribati',
  },
  {
    code: 'XK',
    name: 'Kosova',
  },
  {
    code: 'KH',
    name: 'Kâmpŭchéa',
  },
  {
    code: 'RE',
    name: 'La Réunion',
  },
  {
    code: 'LV',
    name: 'Latvija',
  },
  {
    code: 'LS',
    name: 'Lesotho',
  },
  {
    code: 'LR',
    name: 'Liberia',
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
  },
  {
    code: 'LT',
    name: 'Lietuva',
  },
  {
    code: 'LU',
    name: 'Luxemburg',
  },
  {
    code: 'MO',
    name: 'Macau',
  },
  {
    code: 'MG',
    name: 'Madagascar',
  },
  {
    code: 'HU',
    name: 'Magyarország',
  },
  {
    code: 'MW',
    name: 'Malawi',
  },
  {
    code: 'MY',
    name: 'Malaysia',
  },
  {
    code: 'ML',
    name: 'Mali',
  },
  {
    code: 'MT',
    name: 'Malta',
  },
  {
    code: 'MH',
    name: 'Marshall Islands',
  },
  {
    code: 'MQ',
    name: 'Martinique',
  },
  {
    code: 'MU',
    name: 'Mauritius',
  },
  {
    code: 'YT',
    name: 'Mayotte',
  },
  {
    code: 'FM',
    name: 'Micronesia',
  },
  {
    code: 'MD',
    name: 'Moldova',
  },
  {
    code: 'MC',
    name: 'Monaco',
  },
  {
    code: 'MS',
    name: 'Montserrat',
  },
  {
    code: 'MZ',
    name: 'Moçambique',
  },
  {
    code: 'MX',
    name: 'México',
  },
  {
    code: 'NA',
    name: 'Namibië',
  },
  {
    code: 'NR',
    name: 'Nauru',
  },
  {
    code: 'NL',
    name: 'Nederland',
  },
  {
    code: 'BN',
    name: 'Negara Brunei Darussalam',
  },
  {
    code: 'NZ',
    name: 'New Zealand',
  },
  {
    code: 'NI',
    name: 'Nicaragua',
  },
  {
    code: 'NE',
    name: 'Niger',
  },
  {
    code: 'NG',
    name: 'Nigeria',
  },
  {
    code: 'NU',
    name: 'Niue',
  },
  {
    code: 'NO',
    name: 'Noreg',
  },
  {
    code: 'NF',
    name: 'Norfolk Island',
  },
  {
    code: 'MP',
    name: 'Northern Mariana Islands',
  },
  {
    code: 'NC',
    name: 'Nouvelle-Calédonie',
  },
  {
    code: 'PK',
    name: 'Pakistan',
  },
  {
    code: 'PW',
    name: 'Palau',
  },
  {
    code: 'PA',
    name: 'Panamá',
  },
  {
    code: 'PG',
    name: 'Papua New Guinea',
  },
  {
    code: 'PY',
    name: 'Paraguái',
  },
  {
    code: 'PH',
    name: 'Philippines',
  },
  {
    code: 'PE',
    name: 'Piruw',
  },
  {
    code: 'PN',
    name: 'Pitcairn Islands',
  },
  {
    code: 'PL',
    name: 'Polska',
  },
  {
    code: 'PF',
    name: 'Polynésie française',
  },
  {
    code: 'PT',
    name: 'Portugal',
  },
  {
    code: 'PR',
    name: 'Puerto Rico',
  },
  {
    code: 'CD',
    name: 'RD Congo',
  },
  {
    code: 'DO',
    name: 'República Dominicana',
  },
  {
    code: 'RO',
    name: 'România',
  },
  {
    code: 'RW',
    name: 'Rwanda',
  },
  {
    code: 'CF',
    name: 'République centrafricaine',
  },
  {
    code: 'CG',
    name: 'République du Congo',
  },
  {
    code: 'SH',
    name: 'Saint Helena, Ascension and Tristan da Cunha',
  },
  {
    code: 'KN',
    name: 'Saint Kitts and Nevis',
  },
  {
    code: 'LC',
    name: 'Saint Lucia',
  },
  {
    code: 'VC',
    name: 'Saint Vincent and the Grenadines',
  },
  {
    code: 'BL',
    name: 'Saint-Barthélemy',
  },
  {
    code: 'MF',
    name: 'Saint-Martin',
  },
  {
    code: 'PM',
    name: 'Saint-Pierre-et-Miquelon',
  },
  {
    code: 'WS',
    name: 'Samoa',
  },
  {
    code: 'SM',
    name: 'San Marino',
  },
  {
    code: 'SC',
    name: 'Sesel',
  },
  {
    code: 'AL',
    name: 'Shqipëria',
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
  },
  {
    code: 'SX',
    name: 'Sint Maarten',
  },
  {
    code: 'SI',
    name: 'Slovenija',
  },
  {
    code: 'SK',
    name: 'Slovensko',
  },
  {
    code: 'SB',
    name: 'Solomon Islands',
  },
  {
    code: 'ZA',
    name: 'South Africa',
  },
  {
    code: 'GS',
    name: 'South Georgia',
  },
  {
    code: 'SS',
    name: 'South Sudan',
  },
  {
    code: 'CH',
    name: 'Suisse',
  },
  {
    code: 'FI',
    name: 'Suomi',
  },
  {
    code: 'SR',
    name: 'Suriname',
  },
  {
    code: 'SJ',
    name: 'Svalbard og Jan Mayen',
  },
  {
    code: 'SE',
    name: 'Sverige',
  },
  {
    code: 'ST',
    name: 'São Tomé e Príncipe',
  },
  {
    code: 'SN',
    name: 'Sénégal',
  },
  {
    code: 'TZ',
    name: 'Tanzania',
  },
  {
    code: 'TF',
    name: 'Terres australes et antarctiques françaises',
  },
  {
    code: 'TL',
    name: 'Timor-Leste',
  },
  {
    code: 'TG',
    name: 'Togo',
  },
  {
    code: 'TK',
    name: 'Tokelau',
  },
  {
    code: 'TO',
    name: 'Tonga',
  },
  {
    code: 'TT',
    name: 'Trinidad and Tobago',
  },
  {
    code: 'TC',
    name: 'Turks and Caicos Islands',
  },
  {
    code: 'TV',
    name: 'Tuvalu',
  },
  {
    code: 'TR',
    name: 'Türkiye',
  },
  {
    code: 'UG',
    name: 'Uganda',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
  },
  {
    code: 'US',
    name: 'United States',
  },
  {
    code: 'UM',
    name: 'United States Minor Outlying Islands',
  },
  {
    code: 'VI',
    name: 'United States Virgin Islands',
  },
  {
    code: 'UY',
    name: 'Uruguay',
  },
  {
    code: 'VU',
    name: 'Vanuatu',
  },
  {
    code: 'VA',
    name: 'Vaticano',
  },
  {
    code: 'VE',
    name: 'Venezuela',
  },
  {
    code: 'VN',
    name: 'Việt Nam',
  },
  {
    code: 'WF',
    name: 'Wallis et Futuna',
  },
  {
    code: 'EH',
    name: 'Western Sahara',
  },
  {
    code: 'BO',
    name: 'Wuliwya',
  },
  {
    code: 'ZM',
    name: 'Zambia',
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
  },
  {
    code: 'AX',
    name: 'Åland',
  },
  {
    code: 'IS',
    name: 'Ísland',
  },
  {
    code: 'AT',
    name: 'Österreich',
  },
  {
    code: 'CZ',
    name: 'Česko',
  },
  {
    code: 'GR',
    name: 'Ελλάδα',
  },
  {
    code: 'CY',
    name: 'Κύπρος',
  },
  {
    code: 'BY',
    name: 'Белару́сь',
  },
  {
    code: 'BG',
    name: 'България',
  },
  {
    code: 'KG',
    name: 'Кыргызстан',
  },
  {
    code: 'MK',
    name: 'Македонија',
  },
  {
    code: 'MN',
    name: 'Монгол улс',
  },
  {
    code: 'RU',
    name: 'Россия',
  },
  {
    code: 'RS',
    name: 'Србија',
  },
  {
    code: 'TJ',
    name: 'Таджикистан',
  },
  {
    code: 'TM',
    name: 'Туркмения',
  },
  {
    code: 'UZ',
    name: 'Узбекистан',
  },
  {
    code: 'UA',
    name: 'Україна',
  },
  {
    code: 'ME',
    name: 'Црна Гора',
  },
  {
    code: 'KZ',
    name: 'Қазақстан',
  },
  {
    code: 'AM',
    name: 'Հայաստան',
  },
  {
    code: 'ER',
    name: 'إرتريا‎',
  },
  {
    code: 'IL',
    name: 'إسرائيل',
  },
  {
    code: 'AF',
    name: 'افغانستان',
  },
  {
    code: 'JO',
    name: 'الأردن',
  },
  {
    code: 'DZ',
    name: 'الجزائر',
  },
  {
    code: 'SD',
    name: 'السودان',
  },
  {
    code: 'SO',
    name: 'الصومال‎‎',
  },
  {
    code: 'IQ',
    name: 'العراق',
  },
  {
    code: 'SA',
    name: 'العربية السعودية',
  },
  {
    code: 'KM',
    name: 'القمر‎',
  },
  {
    code: 'KW',
    name: 'الكويت',
  },
  {
    code: 'MA',
    name: 'المغرب',
  },
  {
    code: 'YE',
    name: 'اليَمَن',
  },
  {
    code: 'IR',
    name: 'ایران',
  },
  {
    code: 'TD',
    name: 'تشاد‎',
  },
  {
    code: 'TN',
    name: 'تونس',
  },
  {
    code: 'DJ',
    name: 'جيبوتي‎',
  },
  {
    code: 'AE',
    name: 'دولة الإمارات العربية المتحدة',
  },
  {
    code: 'SY',
    name: 'سوريا',
  },
  {
    code: 'OM',
    name: 'عمان',
  },
  {
    code: 'PS',
    name: 'فلسطين',
  },
  {
    code: 'QA',
    name: 'قطر',
  },
  {
    code: 'LB',
    name: 'لبنان',
  },
  {
    code: 'EG',
    name: 'مصر',
  },
  {
    code: 'MR',
    name: 'موريتانيا',
  },
  {
    code: 'MV',
    name: 'ދިވެހިރާއްޖޭގެ',
  },
  {
    code: 'NP',
    name: 'नेपाल',
  },
  {
    code: 'BD',
    name: 'বাংলাদেশ',
  },
  {
    code: 'LK',
    name: 'ශ්‍රී ලංකාව',
  },
  {
    code: 'TH',
    name: 'ประเทศไทย',
  },
  {
    code: 'LA',
    name: 'ສປປລາວ',
  },
  {
    code: 'BT',
    name: 'འབྲུག་ཡུལ་',
  },
  {
    code: 'MM',
    name: 'မြန်မာ',
  },
  {
    code: 'GE',
    name: 'საქართველო',
  },
  {
    code: 'ET',
    name: 'ኢትዮጵያ',
  },
  {
    code: 'BH',
    name: '‏البحرين',
  },
  {
    code: 'LY',
    name: '‏ليبيا',
  },
  {
    code: 'CN',
    name: '中国',
  },
  {
    code: 'TW',
    name: '台灣',
  },
  {
    code: 'SG',
    name: '新加坡',
  },
  {
    code: 'JP',
    name: '日本',
  },
  {
    code: 'KP',
    name: '조선',
  },
  {
    code: 'KR',
    name: '한국',
  },
];

const templateHTML = `
    <div style="height: 250px">
        <freud-select
          [disabled]="disabled"
          [label]="label"
          [useItemTemplate]="useItemTemplate"
          [options]="options"
          [optionLabel]="optionLabel"
          [filter]="filter"
          [optionValue]="optionValue"
          [placeholder]="placeholder"
          [helpText]="helpText"
          [invalid]="invalid"
          [bgColor]="bgColor">
      </freud-select>
    </div>
`;

const Template: Story<FreudSelectComponent> = (args: FreudSelectComponent) => ({
  props: { ...args },
  template: templateHTML,
});
export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  value: '',
  placeholder: 'Placeholder',
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
};

export const BGColor = Template.bind({});
BGColor.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  bgColor: true,
  helpText: 'Helper Text',
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
};

export const Filter = Template.bind({});
Filter.args = {
  label: 'Label',
  filter: true,
  value: '',
  placeholder: 'Placeholder',
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
};

export const Countries = Template.bind({});
Countries.args = {
  label: 'Country',
  filter: true,
  value: '',
  placeholder: 'Select a country',
  options: countries.filter((country) => country.code !== 'BR'),
  optionLabel: 'name',
  optionValue: 'code',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Label',
  disabled: true,
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  invalid: true,
  options: items,
  optionLabel: 'name',
  optionValue: 'code',
};

export const Tags = Template.bind({});
Tags.args = {
  label: 'Label',
  useItemTemplate: true,
  placeholder: 'Placeholder',
  invalid: true,
  options: [
    {
      label: 'New York',
      code: 'NY',
      tags: [
        { label: 'Conteúdos' },
        { label: 'Autoavaliações' },
        { label: 'Sessões de psicoterapia (16)' },
        { label: 'Sessões de psiquiatria' },
      ],
    },
    { label: 'Rome', code: 'RM', disabled: true },
    { label: 'London', code: 'LDN' },
    { label: 'Istanbul', code: 'IST' },
  ],
  optionValue: 'code',
};

export default {
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
  ],
};
