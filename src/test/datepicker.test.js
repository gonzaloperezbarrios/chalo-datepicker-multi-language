import React from "react";
import InputDatePicker from "../utils/main";
import { parseDate } from "../utils/parse.datepicker";
import renderer from "react-test-renderer";

test("InputDatePicker basic snapshot", () => {
  const component = renderer.create(
    <InputDatePicker
      locale="en-US"
      date={new Date(new Date("09-02-2019"))}
      handleChange={console.log}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("InputDatePicker validated format MM/DD/YYYY date", () => {
  const value = parseDate("09/02/2019", "MM/DD/YYYY", "en-US");
  expect(value).toStrictEqual(new Date("2019-09-02T05:00:00.000Z"));
});

test("InputDatePicker validated format M/DD/YYYY date", () => {
  const value = parseDate("9/02/2019", "M/DD/YYYY", "en-US");
  expect(value).toStrictEqual(new Date("2019-09-02T05:00:00.000Z"));
});

test("InputDatePicker validated format M/D/YYYY date", () => {
  const value = parseDate("9/2/2019", "M/D/YYYY", "en-US");
  expect(value).toStrictEqual(new Date("2019-09-02T05:00:00.000Z"));
});

test("InputDatePicker validated format MM/D/YYYY date", () => {
  const value = parseDate("09/2/2019", "MM/D/YYYY", "en-US");
  expect(value).toStrictEqual(new Date("2019-09-02T05:00:00.000Z"));
});
