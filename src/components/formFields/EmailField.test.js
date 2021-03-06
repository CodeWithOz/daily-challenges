import React from 'react';
import { shallow } from 'enzyme';
import EmailField from './EmailField';
import GenericInput from './GenericInput';

describe('EmailField renders', () => {
  test('a GenericInput', () => {
    const wrapper = shallow(<EmailField />);
    expect(wrapper.find(GenericInput).length).toEqual(1);
  });
});

describe('EmailField correctly passes', () => {
  test('all its props to its GenericInput', () => {
    const props = { test: 'value', test2: 'value2' };
    const wrapper = shallow(<EmailField {...props} />);
    const genWrapper = wrapper.find(GenericInput);
    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        expect(genWrapper.prop(prop)).toEqual(props[prop]);
      }
    }
  });

  test('a placeholder prop to its GenericInput', () => {
    const wrapper = shallow(<EmailField />);
    expect(wrapper.find(GenericInput).prop('placeholder')).toEqual(
      expect.any(String)
    );
    expect(
      wrapper.find(GenericInput).prop('placeholder').length
    ).toBeGreaterThan(0);
  });

  test('a type prop to its GenericInput', () => {
    const wrapper = shallow(<EmailField />);
    expect(wrapper.find(GenericInput).prop('type')).toEqual(expect.any(String));
    expect(wrapper.find(GenericInput).prop('type').length).toBeGreaterThan(0);
  });

  test('a required prop to its GenericInput', () => {
    const wrapper = shallow(<EmailField />);
    expect(wrapper.find(GenericInput).prop('required')).toEqual(
      expect.any(Boolean)
    );
  });

  test('an id prop to its GenericInput', () => {
    const wrapper = shallow(<EmailField />);
    expect(wrapper.find(GenericInput).prop('id')).toEqual(expect.any(String));
    expect(wrapper.find(GenericInput).prop('id').length).toBeGreaterThan(0);
  });

  test('a labelIndicator prop to its GenericInput', () => {
    const wrapper = shallow(<EmailField />);
    expect(wrapper.find(GenericInput).prop('labelIndicator')).toEqual(
      expect.any(String)
    );
    expect(
      wrapper.find(GenericInput).prop('labelIndicator').length
    ).toBeGreaterThan(0);
  });
});
