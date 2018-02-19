import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


// snapshotSerializers configuration is used in jest.config.json file to get JSON output from enzyme's wrapper method
//Without this enzyme's wrapper method will return internals of enzyme also within snapshot apart from actual JSX
//So any change in that internals of enzyme besides actual JSX also leads to failure of test, which should not be the case

test('Testing Header Component', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
});

