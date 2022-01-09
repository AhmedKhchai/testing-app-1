import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";
const defaultProps = { secretWord: "potato" };
/**
 * Setup function for input component
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test("Input renders without error ", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "component-input");
  expect(inputComponent.length).toBe(1);
});
test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "potato" });
});
describe("state controlled input field", () => {
  test("states updates with value of input box change", () => {
    const mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

    const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
});
