const GetLanguage = language => {
  let localeInput = "es";
  if (language) {
    if (language === "en-US" || language === "en") {
      localeInput = "en";
    }
  }
  return localeInput;
};
export default GetLanguage;
