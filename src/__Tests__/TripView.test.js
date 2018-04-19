import React from "react";
import { shallow, mount } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import sinon from "sinon";
import TripView from '../Components/TripView/TripView';

//Kara//

describe("TextInput", () => {
    it("TripView.js initial state: notInServer should default to false", () => {
      const output = shallow(<TextInput />);
      expect(output.state().notInServer).toEqual(false);
    });
  
    it("TripView.js initial state: currentInput should default to an empty string", () => {
      const output = shallow(<TextInput />);
      expect(output.state().currentInput).toEqual("");
    });
  
    it("TripView.js initial state: language should default to 'null'", () => {
      const output = shallow(<TextInput />);
      expect(output.state().language).toEqual("null");
    });
  
    it("TripView.js initial state: searchToggle should default to false", () => {
      const output = shallow(<TextInput />);
      expect(output.state().searchToggle).toEqual(false);
    });
  
    it("TripView.js initial state: code should default to false", () => {
      const output = shallow(<TextInput />);
      expect(output.state().code).toEqual(false);
    });
  
    it("should not render children when passed in", () => {
      const wrapper = shallow(
        <TextInput>
          <div className="search-and-go-bar" />
        </TextInput>
      );
      expect(wrapper.contains(<div className="search-and-go-bar" />)).toEqual(false);
    });
  });

