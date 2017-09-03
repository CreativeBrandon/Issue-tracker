import * as React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './homePage';

it('renders without crashing', () => {
  shallow(<HomePage title="Home Page Component" />)
})
