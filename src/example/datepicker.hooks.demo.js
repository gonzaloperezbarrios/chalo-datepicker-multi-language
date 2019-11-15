import React, { useState } from "react";
// Import package InputDatePicker
import InputDatePicker from "chalo-datepicker-multi-language";
// Import style example
import "./style.css";

// Implementation example
function DatepickerDemo() {
  const [date] = useState(new Date());

  // It's a method to change the date in InputDatePicker
  const handleChangeDate = date => {
    console.log(date);
  };

  return (
    <div className="container">
      <InputDatePicker
        // Translate to English
        // language="en"
        // Translate to Spanish
        language="es"
        dateDefault={date}
        handleChange={handleChangeDate}
        //(Optional) Restrict the calendar date range
        // min="09-09-2019"
        // max="09-16-2019"
      />
    </div>
  );
}

export default DatepickerDemo;
