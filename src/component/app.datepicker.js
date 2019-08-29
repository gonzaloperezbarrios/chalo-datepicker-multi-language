import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils from 'react-day-picker/moment';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { DateUtils } from 'react-day-picker';
import 'moment/locale/es';
import 'moment/locale/en-SG';
import 'react-day-picker/lib/style.css';
import  './app.datepicker.css';

let formatSelect = 'MM/DD/YYYY';

const parseDate = (str, format, locale) => {
  formatSelect = 'MM/DD/YYYY';
  const formatOK = /^\d{1,2}([/])\d{1,2}\1\d{4}$/.test(str);
  if (formatOK) {
    if (/^\d{1}([/])\d{1}\1\d{4}$/.test(str)) {
      formatSelect = 'M/D/YYYY';
    }

    if (/^\d{2}([/])\d{1}\1\d{4}$/.test(str)) {
      formatSelect = 'MM/D/YYYY';
    }

    if (/^\d{1}([/])\d{2}\1\d{4}$/.test(str)) {
      formatSelect = 'M/DD/YYYY';
    }
    const parsed = dateFnsParse(str, formatSelect, { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
  }
  return undefined;
};

const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, formatSelect, { locale });
};

const InputDatePicker = props => {
  const { date, handleChange, locale } = props;
  const localeInput = locale || 'es';
  return (
    <DayPickerInput
      value={date}
      onDayChange={handleChange}
      formatDate={formatDate}
      format="MM/DD/YYYY"
      parseDate={parseDate}
      placeholder="MM/DD/YYYY"
      dayPickerProps={{
        localeUtils: MomentLocaleUtils,
        locale: localeInput === 'en-US' ? 'en-SG' : 'es'
      }}
    />
  );
};
export default InputDatePicker;