import React from 'react';

import { Item } from './item';

export class ItemList extends React.Component {
    render() {
        return (
            <div className="item-list">
                { this.props.items.map( (i) => 
                    <Item key={i.get('id')} 
                          content={i.get('content')} 
                          complete={i.get('complete')} />
                )}
            </div>
        );
    }
}
