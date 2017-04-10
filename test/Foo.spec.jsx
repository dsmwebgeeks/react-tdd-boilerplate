import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { stub } from './stubbing';

import Foo from '../src/Foo';

describe('Foo', () => {
  let properties,
    element;

  beforeEach('set up', () => {
    properties = {
      whenClicking: stub()
    }
    element = shallow(<Foo {...properties} />);
  });

  it('should render as a div', () => {
    expect(element.type()).to.equal('div');
  });

  it('shoud fire click handler when clicked', () => {
    expect(properties.whenClicking.wasNotCalled())
      .to.equal(true);

    element.simulate('click');

    expect(properties.whenClicking.wasCalledOnlyOnce())
      .to.equal(true);
  });
});
