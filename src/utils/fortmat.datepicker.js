import _enumFormatDate from './enum.datepicker';

let formatSelect = _enumFormatDate.MM_DD_YYYY;

export const GetFormatDate=()=>{
  return formatSelect;
}

export const SetFormatDate=(formatDate)=>{
  formatSelect=formatDate;
}