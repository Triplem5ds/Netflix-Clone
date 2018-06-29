import React from 'react';
import {shallow, mount} from 'enzyme';

import UserCreate from '../pages/makeProfileCreate'

describe('Profile Create',()=>{
    const headerWrapper = shallow(<UserCreate/>)
    it('should find The App', () =>{
        expect(headerWrapper.find('.App').length).toBe(1);
    })
    it('should find a header', () =>{
        expect(headerWrapper.find({id:'title'}).length).toBe(1);
    })
    it('should find a Description', () =>{
        expect(headerWrapper.find({id:'description'}).length).toBe(1);
    })
    it('should find a TextBox', () =>{
        expect(headerWrapper.find({id:'user_Name'}).length).toBe(1);
    })
    it('should find a header', () =>{
        expect(headerWrapper.find('.App').length).toBe(1);
    })


});