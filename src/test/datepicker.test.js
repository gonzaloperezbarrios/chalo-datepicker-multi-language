import React from "react";
import renderer from "react-test-renderer";
import InputDatePicker from "../utils/main.js";

test("InputDatePicker basic snapshot", () => {
  const component = renderer.create(
    <InputDatePicker
      language="en"
      dateDefault={new Date(new Date("09-02-2019"))}
      handleChange={console.log}
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
