import React, { Component } from 'react';
import { render } from 'react-dom';
import 'dialog-polyfill/dialog-polyfill.css';

import Dialog from '../../dist/react-dialog-native';
import '../../dist/react-dialog-native.css';

class Example extends Component {
  state = {
    dialogOpen1: true,
    dialogOpen2: false,
  };

  componentDidMount() {
    console.log('do mounted');
  }

  handleClose = () => {
    this.setState({
      dialogOpen1: false,
    });
  }

  handleClose2 = () => {
    this.setState({
      dialogOpen2: false,
    });
  }

  handleOpen = () => {
    this.setState({
      dialogOpen1: true,
    });
  }

  handleOpen2 = () => {
    this.setState({
      dialogOpen2: true,
    });
  }

  render() {
    const { dialogOpen1, dialogOpen2 } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleOpen}>open 1</button>
        <Dialog open={dialogOpen1} onClose={this.handleClose}>
          This is Dialog 1
          <button type="button" onClick={this.handleClose}>close</button>
          <button type="button" onClick={this.handleOpen2}>open 2</button>
        </Dialog>
        <Dialog open={dialogOpen2} onClose={this.handleClose2}>
          This is Dialog 2
          <button type="button" onClick={this.handleClose2}>close</button>
        </Dialog>
      </div>
    );
  }
}

render(
  <Example />,
  document.getElementById('root'),
);
