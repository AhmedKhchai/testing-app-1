import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });
/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

// test("render counter display", () => {
//   const wrapper = setup();
//   const counterDisplay = findByTestAttr(wrapper, "counter-display");
//   expect(counterDisplay.length).toBe(1);
// });
// test("counter starts at 0", () => {
//   const wrapper = setup();
//   const count = findByTestAttr(wrapper, "count").text();
//   expect(count).toBe("0");
// });

// describe("Increment", () => {
//   test("renders increment button", () => {
//     const wrapper = setup();
//     const button = findByTestAttr(wrapper, "increment-button");
//     expect(button.length).toBe(1);
//   });
//   test("clicking on button increment counter display", () => {
//     const wrapper = setup();
//     // Find the button
//     const button = findByTestAttr(wrapper, "increment-button");
//     // Click the button
//     button.simulate("click");
//     // Find the display, and test that the number has been incremented
//     const count = findByTestAttr(wrapper, "count").text();
//     expect(count).toBe("1");
//   });
// });
// describe("Decrement", () => {
//   test("renders decrement button", () => {
//     const wrapper = setup();
//     const button = findByTestAttr(wrapper, "decrement-button");
//     expect(button.length).toBe(1);
//   });
//   test("clicking on button decrement counter display", () => {
//     const wrapper = setup();
//     const incButton = findByTestAttr(wrapper, "increment-button");
//     incButton.simulate("click");
//     const decButton = findByTestAttr(wrapper, "decrement-button");
//     decButton.simulate("click");
//     // Find the display, and test that the number has been incremented
//     const count = findByTestAttr(wrapper, "count").text();
//     expect(count).toBe("0");
//   });
// });
// describe("Error when couneter goes bellow 0", () => {
//   test("error does not show when not needed", () => {
//     const wrapper = setup();
//     // add errorm message as data-test for error div
//     const errorDiv = findByTestAttr(wrapper, "error-message");
//     const errorDivHasHiddenClass = errorDiv.hasClass("hidden");
//     expect(errorDivHasHiddenClass).toBe(true);
//   });
//   describe("Counter is 0 and decrement is clicked", () => {
//     let wrapper;
//     beforeEach(() => {
//       wrapper = setup();
//       const button = findByTestAttr(wrapper, "decrement-button");
//       button.simulate("click");
//     });
//     test("error shows", () => {
//       const errorDiv = findByTestAttr(wrapper, "error-message");
//       const errorDivHasHiddenClass = errorDiv.hasClass("hidden");
//       expect(errorDivHasHiddenClass).toBe(false);
//     });
//     test("counter still displays 0", () => {
//       const count = findByTestAttr(wrapper, "count").text();
//       expect(count).toBe("0");
//     });
//     test("clicking increment clears the error", () => {
//       const incButton = findByTestAttr(wrapper, "increment-button");
//       incButton.simulate("click");
//       const errorDiv = findByTestAttr(wrapper, "error-message");
//       const errorDivHasHiddenClass = errorDiv.hasClass("hidden");
//       expect(errorDivHasHiddenClass).toBe(true);
//     });
//   });
// });
