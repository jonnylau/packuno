import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WeatherContainer} from '../client/src/containers/Weather.container.jsx';

Enzyme.configure({ adapter: new Adapter() });


const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;


spy(WeatherContainer.prototype, 'componentWillMount');

describe('<Weather />', () => {
  it('calls componentWillMount', () => {
    const wrapper = mount(<WeatherContainer />);
    expect(WeatherContainer.prototype.componentWillMount.calledOnce).to.equal(true);
  });
});


