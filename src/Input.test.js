import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

/**
 * Setup function for input component
 * @returns {ShallowWrapper}
 */
const setup = (success = false, secretWord = "potato") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};
describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    test("Input renders without error ", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("Input box does not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });
    test("submit button does not show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });
  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });
    test("Input renders without error ", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });
    test("Input box show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });
    test("submit button show", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "potato" });
});
describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState = React.useState;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  afterEach(() => {
    React.useState = originalUseState;
  });
  test("states updates with value of input box change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });
  test("feild cleared upon submit button", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenLastCalledWith("");
  });
});
