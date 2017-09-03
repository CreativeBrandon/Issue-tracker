import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutPage } from './aboutPage';

it('renders without crashing', () => {
  shallow(<AboutPage title="About Page Container" />)
})
