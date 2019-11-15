import React, { Component } from "react";
// Import package InputDatePicker
import InputDatePicker from "chalo-datepicker-multi-language";
// Import style example
import "./style.css";

// Implementation example
class DatepickerDemo extends Component {
  constructor(props) {
    super(props);
    // It gets a new date to show in InputDatePicker
    this.state = {
      date: new Date()
    };
  }

  // It's a method to change the date in InputDatePicker
  handleChangeDate(date) {
    console.log(date);
  }

  render() {
    return (
      <div className="container">
        <InputDatePicker
          // Translate to English
          language="en"
          // Translate to Spanish
          // language="es"
          dateDefault={this.state.date}
          handleChange={this.handleChangeDate}
          //(Optional) Restrict the calendar date range
          // min="09-09-2019"
          // max="09-16-2019"
        />
      </div>
    );
  }
}

export default DatepickerDemo;
