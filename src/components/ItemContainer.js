import React from 'react';
import { connect } from 'react-redux';

function ItemContainer(props) {
    return (
        <div>
            Item - {props.item}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemCake = ownProps.cake
        ? state.cake.numberOfCakes
        : state.iceCream.numberOfIceCreams

    return {
        item: itemCake
    }

}

export default connect(mapStateToProps)(ItemContainer)
