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
                          complete={i.get('complete')} />
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