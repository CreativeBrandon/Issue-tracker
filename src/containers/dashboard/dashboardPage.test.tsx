import * as React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from './dashboardPage';

it('renders without crashing', () => {
  shallow(<DashboardPage title="About Page Container" />)
})
