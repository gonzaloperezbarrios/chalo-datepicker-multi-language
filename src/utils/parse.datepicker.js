import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { DateUtils } from 'react-day-picker';
import _enumFormatDate from './enum.datepicker';
import {GetFormatDate, SetFormatDate} from './fortmat.datepicker';

export const parseDate = (str, format, locale) => {
  let formatSelect = GetFormatDate();
  const formatOK = /^\d{1,2}([/])\d{1,2}\1\d{4}$/.test(str);
  if (formatOK) {
    if (/^\d{1}([/])\d{1}\1\d{4}$/.test(str)) {
      formatSelect = _enumFormatDate.M_D_YYYY;
    }

    if (/^\d{2}([/])\d{1}\1\d{4}$/.test(str)) {
      formatSelect = _enumFormatDate.MM_D_YYYY;
    }

    if (/^\d{1}([/])\d{2}\1\d{4}$/.test(str)) {
      formatSelect = _enumFormatDate.M_DD_YYYY;
    }
    SetFormatDate(formatSelect);
    const parsed = dateFnsParse(str, formatSelect, { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
  }
  return undefined;
};

export const formatDate = (date, format, locale) => {
  const formatSelect= GetFormatDate();
  return dateFnsFormat(date, formatSelect, { locale });
};