import React from 'react';
import { connect } from 'react-redux';

import { toggleItem } from '../action_creators.js';

export class Item extends React.Component {
    render() {
        return (
            <div className={ this.props.complete ? 'item complete' : 'item incomplete' }
                 onClick={ this.props.toggleItem }>
                { this.props.content }
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleItem: () => dispatch(toggleItem(ownProps.id))
    };
};

export const ItemContainer = connect(undefined, mapDispatchToProps)(Item);