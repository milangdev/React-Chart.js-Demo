import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import LineChart from './LineChart';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const props = {
    data:[3910, 3706, 2850, 4005, 3750, 2912, 3200, 3645, 4205, 3211, 3354, 3904],
    average: [4010, 3600, 2900, 3550, 3800, 2900, 3000, 3500, 4000, 3700, 3550, 3800],
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
}

jest.mock('chart.js', () => ({
    Chart: {
      register: jest.fn()
    },
    registerables: []
  }));

let wrapper;
describe("LineChart", () => {
  beforeEach(() => {
    wrapper = shallow(<LineChart {...props}/>, {  disableLifecycleMethods: true});
  })
  it("should render LineChart correctly", () => {
    expect(wrapper.exists()).toBe(true)
  });
  it('should render chartContainer correctly', () => {
    const chartContainer = wrapper.find('.chartContainer')
    expect(chartContainer).toHaveLength(1)
  })
  it('should render canvas correctly', () => {
      const canvas = wrapper.find('canvas')
      expect(canvas).toHaveLength(1)
  })
});