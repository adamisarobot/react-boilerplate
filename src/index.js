import React from 'react';
import ReactDom from 'react-dom';
import '../src/scss/style.scss';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <em>Astonishing Tales from Space!</em>
        <h1>Weird Future</h1>
        <strong>CTA</strong>
      </div>
    );
  }
}

ReactDom.render(<Welcome />, document.getElementById('root'));
