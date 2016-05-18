import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { App } from '../../src/components/app';

const state = fromJS({
    items: [
        {
            id: 1,
            content: "Go to the store",
            complete: true
        },
        {
            id: 2,
            content: "Buy an apple",
            complete: false
        },
        {
            id: 3,
            content: "Buy a pear",
            complete: false
        }
    ]
});

describe('<App />', () => {
    describe('render()', () => {
        const wrapper = shallow(<App name="Test App" state={state}/>);
        
        it('renders an h1 tag', () => {
            expect(wrapper.find('h1')).to.have.length(1);
        });
        
        it('renders name of application', () => {
            expect(wrapper).to.include.text("Test App");
        });
        
        it('renders ItemListContainer', () => {
            expect(wrapper.find('Connect(ItemList)')).to.have.length(1);
        });
    });
});