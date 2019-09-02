import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils from 'react-day-picker/moment';
import {formatDate, parseDate} from './parse.datepicker';
import _enumFormatDate from './enum.datepicker';
import 'moment/locale/es';
import 'moment/locale/en-SG';

const InputDatePicker = props => {
  const { date, handleChange, locale } = props;
  const localeInput = locale || 'es';
  return (
    <DayPickerInput
      value={date}
      onDayChange={handleChange}
      formatDate={formatDate}
      format={_enumFormatDate.MM_DD_YYYY}
      parseDate={parseDate}
      placeholder={_enumFormatDate.MM_DD_YYYY}
      dayPickerProps={{
        localeUtils: MomentLocaleUtils,
        locale: localeInput === 'en-US' ? 'en-SG' : 'es'
      }}
    />
  );
};
export default InputDatePicker;