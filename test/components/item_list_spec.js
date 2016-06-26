import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import { ItemList } from '../../src/components/item_list';

const items = fromJS([
    { id: 1, content: "test item 1", complete: true, title: "title 1", topic: "topic 1", category: "category 1", playlist: "playlist 1", side_1: "side_1 a", side_2: "side_2 a"},
    { id: 2, content: "test item 2", complete: false, title: "title 2", topic: "topic 2", category: "category 2", playlist: "playlist 2", side_1: "side_1 b", side_2: "side_2 b" }
]);
    
describe('<ItemList />', () => {
    const wrapper = shallow(<ItemList items={items} />);
    // test checks correct props are in place
    it('renders Items with correct props', () => {
        expect(wrapper.find('Connect(Item)')).to.have.length(2);
        const firstItemProps = wrapper.find('Connect(Item)').first().props();
        expect(firstItemProps).to.include.keys('content', 'complete', 'title', 'topic', 'category', 'playlist', 'side_1', 'side_2');
        expect(firstItemProps.content).to.eq('test item 1');
        expect(firstItemProps.complete).to.eq(true);
        const secondItemProps = wrapper.find('Connect(Item)').last().props();
        expect(secondItemProps).to.include.keys('content', 'complete', 'title', 'topic', 'category', 'playlist', 'side_1', 'side_2');
        expect(secondItemProps.content).to.eq('test item 2');
        expect(secondItemProps.complete).to.eq(false);
        
    });
});