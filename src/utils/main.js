import React from "react";
import PropTypes from "prop-types";
import DayPickerInput from "react-day-picker/DayPickerInput";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import { DateUtils } from "react-day-picker";
import MomentLocaleUtils from "./localeUtils.datepicker";
import _enumFormatDate from "./enum.datepicker";
import { GetFormatDate, SetFormatDate } from "./fortmat.datepicker";
import GetLanguage from "./language.datepicker";
import range from "./range.datepicker";

const InputDatePicker = props => {
  const { dateDefault, handleChange, language, min, max } = props;
  const localeInput = GetLanguage(language);
  const parseDate = (str, format, locale) => {
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
        const rangeResponse = range(min, max);
        if (
          rangeResponse !== false &&
          DateUtils.isDayInRange(parsed, rangeResponse)
        ) {
          return undefined;
        }
        return parsed;
      }
    }
    return undefined;
  };

  const formatDate = (date, format, locale) => {
    const formatSelect = GetFormatDate();
    return dateFnsFormat(date, formatSelect, { locale });
  };

  return (
    <DayPickerInput
      value={dateDefault}
      onDayChange={handleChange}
      formatDate={formatDate}
      format={_enumFormatDate.MM_DD_YYYY}
      parseDate={parseDate}
      placeholder={_enumFormatDate.MM_DD_YYYY}
      dayPickerProps={{
        localeUtils: MomentLocaleUtils,
        locale: localeInput,
        disabledDays: [range(min, max)]
      }}
    />
  );
};
export default InputDatePicker;

InputDatePicker.propTypes = {
  handleChange: PropTypes.func.isRequired,
  language: PropTypes.oneOf(["en", "es", "en-US"]).isRequired
};
