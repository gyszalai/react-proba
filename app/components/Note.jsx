import React from 'react';

export default class Note extends React.Component {
    render() {
        return (
            <div>Megjegyzés: {this.props.text}</div>
        );
    }
};
