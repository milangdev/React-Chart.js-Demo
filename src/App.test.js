import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


jest.mock('chart.js', () => ({
  Chart: () => null,
  Chart: {
    register: jest.fn()
  },
  registerables: []
}));

let wrapper;
describe("App", () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it("should render APP correctly", () => {
    expect(wrapper.exists()).toBe(true)
  });
  it('should render a title correctly', () => {
    const title = wrapper.find('.App').find('h2')
    expect(title.html()).toContain('Test App with Chart.JS')
  })
  it('should render chart correctly', () => {
    const chart = wrapper.find('.chart')
    expect(chart).toHaveLength(1)
  })
  it('should render LineChart correctly', () => {
    const lineChart = wrapper.find('LineChart')
    expect(lineChart).toHaveLength(1)
  })
});