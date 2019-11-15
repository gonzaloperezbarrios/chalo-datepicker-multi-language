# Welcome to datepicker-multi-language!

> Hi! It's a React component to build a customized UI of
> https://react-day-picker.js.org.
>
> It's too a calendar multi-language for React.
>
> **Install-package**
>
> - npm i chalo-datepicker-multi-language
> - yarn add chalo-datepicker-multi-language

## What does it?

![Example](doc/image.png)

- Show a box field displaying a calendar.
- It accepts the followings the date format: - MM/DD/YYYY - M/D/YYYY - MM/D/YYYY - M/DD/YYYY
- It can translate the calendar to the followings languages: - English - Spanish
- You can restrict the calendar date range.

## How to implated it?

You can see the example complete in directory **src/example/**

```JavaScript
    // src/example/
    ...

  render() {
    return (
      <div className="container">
        <InputDatePicker
          // Translate to English
          language="en"
          // Translate to Spanish
          // language="es"
          dateDefault={new Date()}
          handleChange={(date)=>{console.log(date)}}
          //(Optional) Restrict the calendar date range
          // min="09-09-2019"
          // max="09-16-2019"
        />
      </div>
    );
  }
```
