import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Foo from '../src/Foo';

describe('Foo', () => {
  let props,
    element;

  beforeEach('set up', () => {
    props = { message: 'This is a message' };
    element = shallow(<Foo {...props} />);
  });

  it('should render as a div', () => {
    expect(element.type()).to.equal('div');
  });

  it('should have its contents equal to props.message', () => {
    expect(element.text()).to.equal(props.message);
  });
});
