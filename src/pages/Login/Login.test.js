import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { initialState } from './../../store/reducers/loginReducer';

let props = {
    login : initialState
}

import { Login } from './Login';

describe('Login Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login {...props} />);
    })

    it('has a title', () => {
        expect(wrapper.find('p').exists()).toEqual(true);
    })

    it('has two inputs', () => {
        expect(wrapper.find('input')).toHaveLength(2);
    })

    it('the first input is type \'text\'', () => {
        expect(wrapper.find('input').at(0).prop('type')).toBe('text');
    })

    it('the second input is type \'password\'', () => {
        expect(wrapper.find('input').at(1).prop('type')).toBe('password');
    })

    it('should have a login button', () => {
        expect(wrapper.find('button').exists()).toEqual(true);
    })

    it('inputs should have no initial values', () => {
        expect(wrapper.find('input').at(0).prop('value')).toEqual('');
        expect(wrapper.find('input').at(1).prop('value')).toEqual('');
    })
})