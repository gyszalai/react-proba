import React from 'react';
import Note from './Note.jsx';
import Counter from './Counter.jsx';

export default class App extends React.Component {
  render() {
    return (
        <div>
            <Note
                text="Ez itt egy megjegyzés"
                myEnum='A' 
            />
            <Counter/>
        </div>
    );
  }
};
