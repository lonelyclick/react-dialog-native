import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dialogPolyfill from 'dialog-polyfill';

import './Dialog.css';

class Dialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    closeBackdropOnClick: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    open: false,
    closeBackdropOnClick: true,
    className: '',
  };

  componentDidMount() {
    dialogPolyfill.registerDialog(this.dialogRef);
    this.handleModal(this.props.open);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      this.handleModal(nextProps.open);
    }
  }

  handleModal(open) {
    if (open) {
      this.dialogRef.showModal();
    } else if (this.dialogRef.getAttribute('open') !== null) {
      this.dialogRef.close();
    }
  }

  handleClickDialog = (event) => {
    const { closeBackdropOnClick, onClose } = this.props;
    if (!closeBackdropOnClick) return;
    const rect = event.target.getBoundingClientRect();
    const inDialog = rect.top <= event.clientY
      && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX
      && event.clientX <= rect.left + rect.width;

    if (!inDialog) {
      onClose();
    }
  }

  render() {
    const { className, children } = this.props;

    return (
      <dialog
        className={`Dialog ${className}`}
        ref={(dialog) => { this.dialogRef = dialog; }}
        onClick={this.handleClickDialog}
      >
        {children}
      </dialog>
    );
  }
}

export default Dialog;
