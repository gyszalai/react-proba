import React from 'react';
import { connect } from 'react-redux';

const increment = (howMany) => {
    return {
        type: 'INCREMENT',
        howMany
    };
};

const decrement = (howMany) => {
    return {
        type: 'DECREMENT',
        howMany
    };
};

let Counter = ({
  counter,
  onIncrement,
  onDecrement
}) => (
    <div>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>{'+'}</button>
        <button onClick={onDecrement}>{'-'}</button>
    </div>
);
// state-prop mapping
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
}
// dispatch mapping
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => {
            dispatch(increment(3))
        },
        onDecrement: () => {
            dispatch(decrement(3))
        }
    };
}

Counter = connect(
    mapStateToProps,
    mapDispatchToProps
) (Counter);

export default Counter;
