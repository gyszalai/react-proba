import React from 'react';
import Note from './Note.jsx';
import Counter from './Counter.jsx';

export default class App extends React.Component {
  render() {
    return (
        <div>
            <Note valami="HUTYUTYU" />
            <Counter/>
        </div>
    );
  }
};

App.propTypes = {
  valami: React.PropTypes.string
}
