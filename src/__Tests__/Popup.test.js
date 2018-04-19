import React from "react";
import { shallow, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import sinon from "sinon";
import Popup from "../Components/Popup/Popup";

//garrett
describe("TextInput", () => {
  it("Popup.js initial state: notInServer should default to false", () => {
    const output = shallow(<TextInput />);
    expect(output.state().notInServer).toEqual(false);
  });

  it("Popup.js initial state: currentInput should default to an empty string", () => {
    const output = shallow(<TextInput />);
    expect(output.state().currentInput).toEqual("");
  });

  it("Popup.js initial state: language should default to 'null'", () => {
    const output = shallow(<TextInput />);
    expect(output.state().language).toEqual("null");
  });

  it("Popup.js initial state: searchToggle should default to false", () => {
    const output = shallow(<TextInput />);
    expect(output.state().searchToggle).toEqual(false);
  });

  it("Popup.js initial state: code should default to false", () => {
    const output = shallow(<TextInput />);
    expect(output.state().code).toEqual(false);
  });

  it("should not render children when passed in", () => {
    const wrapper = shallow(
      <TextInput>
        <div className="popup" />
      </TextInput>
    );
    expect(wrapper.contains(<div className="popup" />)).toEqual(false);
  });
});
