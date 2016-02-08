import React from 'react';

export default class Note extends React.Component {
    render() {
        return (
            <div>{'Megjegyzés: '}{this.props.text}{' '}{this.props.myEnum}</div>
        );
    }
};

Note.propTypes = {
    text: React.PropTypes.string.isRequired,
    myEnum: React.PropTypes.oneOf(['A', 'B'])
}
