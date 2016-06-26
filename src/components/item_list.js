import React from 'react';
import { connect } from 'react-redux';

import { ItemContainer } from './item';

export class ItemList extends React.Component {
    render() {
        return (
            <div className="item-list">
                { this.props.items.map( (i) => 
                    <ItemContainer key={i.get('id')} 
                          id={i.get('id')} 
                          content={i.get('content')} 
                          complete={i.get('complete')}
                          title={i.get('title')}
                          topic={i.get('topic')}
                          category={i.get('category')}
                          playlist={i.get('playlist')}
                          side_1={i.get('side_1')}
                          side_2={i.get('side_2')}
                           />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.get('items')
    };
};

export const ItemListContainer = connect(mapStateToProps)(ItemList);
