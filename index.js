import React from 'react'
import ReactDOM from 'react-dom';
import { VirtualScroll } from 'react-virtualized';
import { Grid } from 'react-virtualized';

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox />,
  document.getElementById('container')
);
