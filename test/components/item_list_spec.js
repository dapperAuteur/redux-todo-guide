import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { ItemList } from '../../src/components/item_list';

const items = fromJS([
    { id: 1, content: "test item 1", complete: true },
    { id: 2, content: "test item 2", complete: false }
]);

describe('<ItemList />', () => {
    const wrapper = shallow(<ItemList items={items} />);
    it('renders Items with correct props', () => {
        expect(wrapper).to.have.exactly(2).descendants('Item');
        const firstItemProps = wrapper.find('Item').first().props();
        expect(firstItemProps).to.include.keys('content', 'complete');
        expect(firstItemProps.content).to.eq('test item 1');
        expect(firstItemProps.complete).to.eq(true);
        const secondItemProps = wrapper.find('Item').last().props();
        /* WRITE A TEST HERE TO CHECK secondItemProps.content */
        /* WRITE A TEST HERE TO CHECK secondItemProps.complete */
    });
});